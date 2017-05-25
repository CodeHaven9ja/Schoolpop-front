import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { MailService } from './../services/mail.service';

@Injectable()
export class MailItemResolve implements Resolve<Parse.Object[]> {

  constructor(private ms: MailService) {}

  resolve(route: ActivatedRouteSnapshot) {
    let id = route.params['id'];
    return this.ms.getMail(id);
  }
}