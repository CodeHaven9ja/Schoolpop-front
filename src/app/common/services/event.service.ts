import { Injectable } from '@angular/core';
import { RequestOptions, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { MomentUtil } from './../../moment.util';
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable()
export class EventService {

  currentUser: User;
  opts: RequestOptions;

  moment = new MomentUtil().getMoment();

  baseUrl: string = "https://api.schoolpop.ng/1";

  constructor(private us: UserService, private http: Http) { 
    this.opts = us.getOptions();
  }

  getEvents(): Observable<any> {
    // Seven days ago
    let startDate = this.moment().subtract('90', 'd').toISOString();
    let endDate = this.moment().add('7', 'd').toISOString();

    let options = new RequestOptions({
      headers: this.opts.headers,
      params : {
        "where" : {
          "startDate" : {
            "$gte" : this.getDatePointer(startDate)
          }
        }
      }
    });

    return this.http.get(this.baseUrl+"/classes/Event", options)
    .map((res:Response) => {
      let e:any[] = res.json().results;
      let events:any[] = [];

      for(let i = 0; i< e.length; i++) {
        let event:any = {};
        event.id = e[i].objectId;
        event.title = e[i].title;
        event.url = "/events/" + e[i].objectId;
        event.start = e[i].startDate.iso;
        if (e[i].endDate) {
          event.end = e[i].endDate.iso;
        } else {
          event.start = this.moment(e[i].startDate.iso).format("YYYY-MM-DD");
        }
        events.push(event);
      }

      return events;
    }).map((events:any[]) => {
      let options:any = {};
      options.aspectRatio = 2;
      options.fixedWeekCount = false;
      options.defaultView = 'listMonth';
      options.defaultDate = this.moment().toISOString();
      options.editable = false
      options.eventLimit = true
      options.events = events;
      options.theme = false;

      return options;
    });
  }

  getDatePointer(date:string = this.moment().toISOString()) {
    return { "__type": "Date", "iso": date }
  }

}
