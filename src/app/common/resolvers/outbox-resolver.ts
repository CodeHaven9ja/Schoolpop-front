import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { MailService } from './../services/mail.service';

@Injectable()
export class OutboxResolve implements Resolve<any[]> {

  constructor(private ms: MailService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.ms.getSentMails();
  }
}