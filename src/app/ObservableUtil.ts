import { Observable } from 'rxjs/Rx';
export class ObservableUtil {

  getTicker(delay:number, interval:number) {
    return Observable.timer(delay, interval);
  }

}