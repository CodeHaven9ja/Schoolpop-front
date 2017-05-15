import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { MomentUtil } from '../../moment.util';
import { RequestOptions, Http, Response } from '@angular/http';
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable()
export class ClassesService {

  currentUser: User;
  opts: RequestOptions;
  classes:Subject<any[]> = new Subject<any[]>();

  getClassesObservable: Observable<any[]> = this.classes.asObservable();

  setClasses(c:any[]) {
    this.classes.next(c);
  }

  moment = new MomentUtil().getMoment();

  baseUrl: string = "https://api.schoolpop.ng/1";

  constructor(private us: UserService, private http: Http) { 
    this.opts = us.getOptions();
  }

  getClasses():Observable<any[]> {
    return this.http.post(this.baseUrl +"/functions/getClasses", null, this.opts)
    .map((res:Response) => res.json().result);
  }

  getClass(classId:string) {
    return this.http.get(this.baseUrl+"/classes/ClassRoom/"+classId, this.opts)
      .map((res:Response) => res.json());
  }

  addClass(clazz) {
    return this.http.post(this.baseUrl+"/classes/ClassRoom", clazz, this.opts);
  }

}
