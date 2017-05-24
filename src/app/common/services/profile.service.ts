import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable()
export class ProfileService {
  baseUrl: string = "https://api.schoolpop.ng/1";

  constructor(private http: Http, private us:UserService) { }

  getParent(user: Parse.User) {
    let options = new RequestOptions({
      headers: this.us.getOptions().headers,
      params: {
        where: {
          user: this.us.getUserPointer(user)
        },
        include: ['parent'],
        order: "-createdAt",
        limit: 2
      }
    });

    return this.http.get(this.baseUrl + "/classes/Profile", options)
      .flatMap((res: Response) => {
        let users: User[] = [];
        let u: any[] = res.json().results;
        for (let i = 0; i < u.length; i++) {
          let user = u[i].parent;
          users.push(user);
        }
        return users;
      }).toArray();
  }

  getChildren(user:Parse.User):Observable<Parse.User[]> {
    let options = new RequestOptions({
      headers: this.us.getOptions().headers,
      params: {
        where: {
          parent: this.us.getUserPointer(user)
        },
        include: ['user'],
        order: "-createdAt"
      }
    });

    var Profile = Parse.Object.extend("Profile");
    var query = new Parse.Query(Profile);
    query.equalTo("parent", user);
    query.include(['user']);
    query.descending("createdAt");

    let findPromise = new Promise((resolve, reject) => {
      query.find().then((users) => {
        resolve(users);
      }, (err) => {
        reject(err);
      });
    });

    return Observable.fromPromise(findPromise).flatMap((profiles: Parse.Object[]) => {
      let p:Parse.Object[] = profiles;
      let us:Parse.User[] = [];

      for(let i = 0; i< p.length; i++) {
        let u:Parse.User = p[i].get("user");
        us.push(u);
      }
      return us;
    }).toArray();


    // return this.http.get(this.baseUrl+"/classes/Profile", options)
    // .flatMap((res:Response) => {
    //   let users:User[] = [];
    //   let u:any[] = res.json().results;
    //   for(let i = 0; i < u.length; i++) {
    //     let user = u[i].user;
    //     users.push(user);
    //   }
    //   return users;
    // }).toArray();
  }

}
