/// <reference path="./../../../../node_modules/@types/parse/index.d.ts" />
import { Observer } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';

import { User } from '../models/user';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { ParseService } from './parse.service';

// declare var Parse: any;

@Injectable()
export class UserService {
  baseUrl: string = "https://api.schoolpop.ng/1";

  isLoggedIn = new Subject<boolean>();

  loggedIn = this.isLoggedIn.asObservable();

  currentUser: Parse.User = this.getCurrentUser();

  setLoginStatus(status:boolean = false) {
    this.isLoggedIn.next(status);
  }

  constructor(private http:Http, private router:Router, private ps:ParseService) {
  }

  getUser(id: string): Observable<Parse.User> {
    // let options = this.getOptions();

    var User = Parse.Object.extend("_User");
    var query = new Parse.Query(User);
    query.equalTo("objectId", id);
    query.include(['school', 'profile']);
    
    let queryPromise = new Promise((resolve, reject) => {
      query.first().done((user) => {
        resolve(user);
      }).reject((err) => {
        reject(err);
      });
    });

    return Observable.fromPromise(queryPromise);
  }

  getCurrentUser():Parse.User {
    return Parse.User.current();
  }

  setCurrentUser(user:User) {
    this.setLoginStatus(true);
  }

  isAdmin():boolean {
    let user: Parse.User = this.getCurrentUser();
    return user && user.get("role") && user.get("role") == "admin";
  }

  login(cred):Observable<User> {
    cred.username = cred.username.trim();

    return this.http.get(
      this.baseUrl+"/login?username="+cred.username+"&password="+cred.password, 
      this.getOptions()
      ).map((res:Response) => res.json());
  }

  logout() {
    this.setLoginStatus(false);
    // this.currentUser = null;
    // localStorage.removeItem("currentUser");
    Parse.User.logOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  getOptions(): RequestOptions {
    let user:Parse.User = this.currentUser;
    let token = user ? user.getSessionToken() : '';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('X-Parse-Application-Id', '9o87s1WOIyPgoTEGv0PSp9GXT1En9cwC');
    headers.append('X-Parse-Session-Token', token);

    let options = new RequestOptions({ headers: headers });

    return options;
  }

  getUserPointer(user:Parse.User){
    return {
      "__type": "Pointer",
      "className": "_User",
      "objectId": user.id
    };
  }

  parseLogin(cred):Observable<Parse.User> {
    cred.username = cred.username.trim();
    let loginPromise = new Promise((resolve, reject) =>{
      Parse.User.logIn(cred.username, cred.password).then((user) =>{
        resolve(user);
      }, (err) => {
        reject(err);
      })
    })
    return Observable.fromPromise(loginPromise);
  }

  getUsersFromParse(): Observable<Parse.Object[]> {
    var User = Parse.Object.extend("_User");
    var query = new Parse.Query(User);
    return Observable.create((observer: Observer<Parse.Object[]>) => {
      query.find().resolve((results) => {
        observer.next(results);
      });
      query.find().reject((error) => {
        observer.error(error);
      });
      query.find().done(() => {
        observer.complete();
      });
    });
  }

  getUserByIdentifier(identifier:string): Observable<Parse.User> {
    let User = Parse.Object.extend("_User");

    let queryEmail = new Parse.Query(User);
    queryEmail.equalTo("email", identifier);

    let queryUsername = new Parse.Query(User);
    queryUsername.equalTo("username", identifier);

    let queryObjectId = new Parse.Query(User);
    queryObjectId.equalTo("objectId", identifier);

    let mainQuery = Parse.Query.or(queryEmail, queryUsername, queryObjectId);

    return Observable.fromPromise(this.ps.getOne(mainQuery));

  }

}
