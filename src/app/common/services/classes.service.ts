import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { MomentUtil } from '../../moment.util';
import { RequestOptions, Http, Response } from '@angular/http';
import { User } from '../models/user';
import { UserService } from './user.service';
import { ParseService } from './parse.service';

@Injectable()
export class ClassesService {

  currentUser: User;
  opts: RequestOptions;
  
  classes: Subject<Parse.Object[]> = new Subject<Parse.Object[]>();

  getClassesObservable: Observable<any[]> = this.classes.asObservable();

  setClasses(c: Parse.Object[]) {
    this.classes.next(c);
  }

  schoolUpdated: Subject<boolean> = new Subject<boolean>();

  getSchoolUpdated: Observable<boolean> = this.schoolUpdated.asObservable();

  setSchoolUpdated() {
    this.schoolUpdated.next(true);
  }

  moment = new MomentUtil().getMoment();

  baseUrl: string = "https://api.schoolpop.ng/1";

  constructor(private us: UserService, private http: Http, private ps:ParseService) { 
    this.opts = us.getOptions();
  }

  getClasses(): Observable<Parse.Object[]> {
    return Observable.fromPromise(this.ps.run("getClasses"));
  }

  getClass(classId:string):Observable<Parse.Object> {
    let query = new Parse.Query("ClassRoom");
    query.equalTo("objectId", classId);
    return Observable.fromPromise(this.ps.getOne(query));
  }

  addClass(clazz:Parse.Object) {
    return Observable.fromPromise(this.ps.saveObject(clazz));
  }

}
