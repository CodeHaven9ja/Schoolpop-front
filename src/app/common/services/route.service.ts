import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class RouteService {

  private bodyClassSubject = new Subject<string>();

  bc = this.bodyClassSubject.asObservable();

  setBc(bc:string) {
    this.bodyClassSubject.next(bc);
  }

  constructor() { }

}
