import * as moment from 'moment';

export class MomentUtil {

  timeDateAgo(date:string) {
    let d = moment(date);

    return d.fromNow();
  }

  format(date:string, format:string) {
    let d = moment(date);

    return d.format(format);
  }

}