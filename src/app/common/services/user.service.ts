import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../models/user';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {
  baseUrl: string = "http://api.schoolpop.ng/1";

  isLoggedIn = new Subject<boolean>();

  loggedIn = this.isLoggedIn.asObservable();

  setLoginStatus(status:boolean = false) {
    this.isLoggedIn.next(status);
  }

  constructor(private http:Http, private router:Router) {
    if (this.getCurrentUser() != null) {
      this.setLoginStatus(true);
    } else {
      this.setLoginStatus(false);
    }
  }

  getUser(id:string):Observable<User> {
    let options = this.getOptions(this.getCurrentUser().sessionToken);

    return this.http.get(this.baseUrl+"/classes/_User/"+id, options)
    .map((res:Response) => {
      return res.json();
    });
  }

  getCurrentUser():User {
    if (localStorage.getItem("currentUser")) {
      return <User>JSON.parse(localStorage.getItem("currentUser"));
    }
    return null;
  }

  setCurrentUser(user:User) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    this.setLoginStatus(true);
  }

  isAdmin():boolean {
    let user:User = this.getCurrentUser();
    return user && user.role && user.role == "admin";
  }

  login(cred):Observable<User> {
    cred.username = cred.username.trim();

    return this.http.get(
      this.baseUrl+"/login?username="+cred.username+"&password="+cred.password, 
      this.getOptions()).map((res:Response) => res.json());
  }

  logout() {
    this.setLoginStatus(false);
    localStorage.clear();
    this.router.navigate(['/']);
  }

  getOptions(token?: string): RequestOptions {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('X-Parse-Application-Id', '9o87s1WOIyPgoTEGv0PSp9GXT1En9cwC');
    if (this.getCurrentUser()) {
      let user:User = this.getCurrentUser();
      headers.append('X-Parse-Session-Token', user.sessionToken);
    } else if (token) {
      headers.append('X-Parse-Session-Token', token);
    }

    let options = new RequestOptions({ headers: headers });

    return options;
  }

  getUserPointer(user:User){
    return {
      "__type": "Pointer",
      "className": "_User",
      "objectId": user.objectId
    };
  }

}
