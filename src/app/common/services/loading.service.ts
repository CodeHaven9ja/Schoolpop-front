import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {

  loading:Subject<boolean> = new Subject<boolean>();

  setLoading(bool:boolean = false) {
    this.loading.next(bool);
  }

  getLoading = this.loading.asObservable();

  constructor() { }

}
