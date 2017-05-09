import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { MailService } from './../services/mail.service';

@Injectable()
export class InboxResolve implements Resolve<any[]> {

  constructor(private ms: MailService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.ms.getMails();
  }
}