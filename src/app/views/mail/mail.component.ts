import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';

import { Subscription } from 'rxjs/Rx';

import { MailService } from '../../common/services/mail.service';
import { SingleMail } from '../../common/components/widgets/single-mail/single-mail.component';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit, OnDestroy {

  sub:Subscription;

  unReadCount = 0;

  constructor(private ms:MailService) { }

  ngOnInit() {
    this.sub = this.ms.uc.subscribe(
      (m) => this.unReadCount = m
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
