import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  baseUrl: string = "http://api.schoolpop.ng/1";

  constructor(private http:Http, private router:Router) { }

  getUser(id:string):Observable<User> {
    let options = this.getOptions(this.getCurrentUser().sessionToken);

    return this.http.get(this.baseUrl+"/classes/_User/"+id, options)
    .map((res:Response) => {
      return res.json();
    });
  }

  getCurrentUser():User {
    return <User>JSON.parse(localStorage.getItem("currentUser"));
  }

  setCurrentUser(user:User) {
    localStorage.setItem("currentUser", JSON.stringify(user));
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
