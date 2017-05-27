import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../models/user';
import { UserService } from './user.service';
import { ParseService } from './parse.service';

@Injectable()
export class ProfileService {
  baseUrl: string = "https://api.schoolpop.ng/1";

  constructor(private http: Http, private us:UserService, private ps:ParseService) { }

  getParent(user: Parse.User) {
    let query = new Parse.Query("Profile");
    query
      .equalTo("user", user)
      .include(['parent'])
      .descending("createdAt")
      .limit(2);

    return this.getProfileUserObservable("parent", query);
  }

  getChildren(user:Parse.User):Observable<Parse.User[]> {

    var Profile = Parse.Object.extend("Profile");
    var query = new Parse.Query(Profile);
    query.equalTo("parent", user);
    query.include(['user']);
    query.descending("createdAt");

    return this.getProfileUserObservable("user", query);
  }

  getProfileUserObservable(key:string, query:Parse.Query) {
    return Observable.fromPromise(this.ps.getMany(query)).flatMap((profiles: Parse.Object[]) => {
      let p: Parse.Object[] = profiles;
      let us: Parse.User[] = [];

      for (let i = 0; i < p.length; i++) {
        let u: Parse.User = p[i].get(key);
        us.push(u);
      }
      return us;
    }).toArray();
  }

}
