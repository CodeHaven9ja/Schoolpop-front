import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {

  qSubject:Subject<string> = new Subject<string>();

  getQObservable = this.qSubject.map(searchTerm => {
      return { search: searchTerm }
    })

  setQ(q:string) {
    this.qSubject.next(q);
  }

  constructor() { }

}
