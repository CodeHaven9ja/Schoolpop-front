import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { ClassesService } from '../services/classes.service';
@Injectable()
export class ClassroomResolve implements Resolve<any> {

  constructor(private cs: ClassesService) { }

  resolve(route: ActivatedRouteSnapshot) {
    let classId = route.params['id'];
    return this.cs.getClass(classId);
  }
  
}