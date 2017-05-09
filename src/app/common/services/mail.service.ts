import { ObservableUtil } from '../../ObservableUtil';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable()
export class MailService {

  currentUser:User;
  opts: RequestOptions;

  baseUrl: string = "http://api.schoolpop.ng/1";

  constructor(private us:UserService, private http:Http) { 
    this.currentUser = us.getCurrentUser();
    this.opts = us.getOptions(this.currentUser.sessionToken);
  }

  getUnreadMails() {
    let ticker = new ObservableUtil().getTicker(0, 1000*30);

    let options = new RequestOptions({
      headers: this.opts.headers,
      params: {
        "where" :{
          "to" : this.us.getUserPointer(this.currentUser),
          "isRead" : false          
        },
        include: ['message', 'from'],
        order: "-createdAt"
      }
    });

    return ticker.flatMap(() => this.http.get(this.baseUrl+"/classes/Mail", options))
    .map((res:Response) => res.json().results);
  }

  getMail(id:string) {
    let options = new RequestOptions({
      headers: this.opts.headers,
      params: {
        include: ['message', 'from', 'to']
      }
    });

    return this.http.get(this.baseUrl+"/classes/Mail/"+id, options)
    .map((res:Response) => res.json());
  }

  sendMail(message) {
    console.log(message);
    return this.http.post(this.baseUrl+"/functions/loopSend", {message:message}, this.opts).map((res:Response) => res.json());
  }
  
  getMails(limit:number  = 10, skip:number = 0) {
    let options = new RequestOptions({
      headers: this.opts.headers,
      params: {
        "where" :{
          "to" : this.us.getUserPointer(this.currentUser)         
        },
        include: ['message', 'from'],
        limit: limit,
        order: "-createdAt"
      }
    });

    return this.http.get(this.baseUrl+"/classes/Mail", options)
    .map((res:Response) => res.json().results);
  }
  getSentMails(limit:number  = 10, skip:number = 0) {
    let options = new RequestOptions({
      headers: this.opts.headers,
      params: {
        "where" :{
          "from" : this.us.getUserPointer(this.currentUser)         
        },
        include: ['message', 'to', 'from'],
        limit: limit,
        order: "-createdAt"
      }
    });

    return this.http.get(this.baseUrl+"/classes/Mail", options)
    .map((res:Response) => res.json().results);
  }

  markAsRead(id:string) {
    let options = new RequestOptions({
      headers: this.opts.headers
    });
    return this.http.put(this.baseUrl+"/classes/Mail/"+id, {isRead:true}, options);
  }

}
