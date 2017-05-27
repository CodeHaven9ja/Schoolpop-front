import { environment } from './../../../environments/environment.prod';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Topic } from '../models/topic';
import { Http, Response, RequestOptions } from '@angular/http';
import { UserService } from './user.service';
import { ParseService } from './parse.service';

@Injectable()
export class TopicService {

  topic: Topic[] = [];
  currentUser: User;
  opts: RequestOptions;

  baseUrl: string;

  constructor(
    private us: UserService,
    private ps: ParseService,
    private http: Http) {
    this.opts = us.getOptions();
    console.log("Development box", environment.production);

    if (!environment.production) {
      console.log("Development box");
      this.baseUrl = "http://localhost:3030/1"
    } else {
      this.baseUrl = "https://api.schoolpop.ng/1";
    }
  }

  getAllTopics(): Observable<Topic[]> {
    return this.http.get(this.baseUrl+"/classes/Topic?order=title", this.opts)
      .map((res: Response) => res.json().results);
  }

  setTopics(topics: Topic[]) {
    this.topic = topics;
  }

  addReport(data: any) {
    return this.http.post(this.baseUrl + "/functions/setSubject", { data: data }, this.opts)
      .map((res: Response) => res.json().result);
  }

  // :Observable<Topic[]>

}
