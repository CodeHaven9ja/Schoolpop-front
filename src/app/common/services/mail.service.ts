import { Subject } from 'rxjs/Subject';
import { ObservableUtil } from '../../ObservableUtil';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable()
export class MailService {

  // Unread Count
  private unreadCount = new Subject<number>();
  uc = this.unreadCount.asObservable();

  setUnreadCount(c:number){
    this.unreadCount.next(c);
  }

  setUnreadCountError(error:Response) {
    this.unreadCount.error(error);
  }

  // Unread mails
  private unReadMails = new Subject<Parse.Object[]>();
  um = this.unReadMails.asObservable();

  setUnreadMails(m: Parse.Object[]){
    this.unReadMails.next(m);
  }

  setUnreadMailsError(error:Response) {
    this.unReadMails.error(error);
  }

  currentUser:Parse.User;
  opts: RequestOptions;

  baseUrl: string = "https://api.schoolpop.ng/1";

  constructor(private us:UserService, private http:Http) { 
    this.opts = us.getOptions();
  }

  getUnreadMails():Observable<Parse.Object[]> {
    let query = new Parse.Query("Mail");
    query
      .equalTo("to", this.us.currentUser)
      .equalTo("isRead", false)
      .include(['message', 'from'])
      .descending("createdAt");

    let findPromise = new Promise((resolve, reject) => {
      query.find().then((mails) => {
        resolve(mails);
      }, (err) => {
        reject(err);
      })
    })
    let ticker = new ObservableUtil().getTicker(0, 1000*10);
    return ticker.flatMap(() => Observable.fromPromise(findPromise));
  }

  unTicked() {
    let options = new RequestOptions({
      headers: this.opts.headers,
      params: {
        "where" :{
          "to": this.us.getUserPointer(this.us.currentUser),
          "isRead" : false          
        },
        include: ['message', 'from'],
        order: "-createdAt"
      }
    });

    return this.http.get(this.baseUrl+"/classes/Mail", options).map((res:Response) => res.json().results);
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
    var Mail = Parse.Object.extend("Mail");
    var query = new Parse.Query(Mail);
    query
      .equalTo("to", this.us.currentUser)
      .include(['message', 'from'])
      .limit(limit)
      .skip(skip)
      .descending("createdAt");

    let queryPromise = new Promise((resolve, reject) => {
      query.find().then((mails) => {
        resolve(mails);
      }, (err) => {
        reject(err);
      })
    });

    return Observable.fromPromise(queryPromise);
  }
  getSentMails(limit:number  = 10, skip:number = 0) {
    var Mail = Parse.Object.extend("Mail");
    var query = new Parse.Query(Mail);
    query
      .equalTo("from", this.us.currentUser)
      .include(['message', 'from', 'to'])
      .limit(limit)
      .skip(skip)
      .descending("createdAt");

    let queryPromise = new Promise((resolve, reject) => {
      query.find().then((mails) => {
        resolve(mails);
      }, (err) => {
        reject(err);
      })
    });

    return Observable.fromPromise(queryPromise);
  }

  markAsRead(id:string) {
    let options = new RequestOptions({
      headers: this.opts.headers
    });
    return this.http.put(this.baseUrl+"/classes/Mail/"+id, {isRead:true}, options);
  }

}
