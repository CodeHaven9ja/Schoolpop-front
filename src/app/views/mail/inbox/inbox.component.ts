import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Rx';

import { RouteService } from '../../../common/services/route.service';
import { SingleMail } from '../../../common/components/widgets/single-mail/single-mail.component';
import { MailService } from '../../../common/services/mail.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit, OnDestroy {

  mails: SingleMail[] = [];

  // sub:Subscription;

  unReadCount = 0;

  constructor(private rs:RouteService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.rs.setBc("sticky-header");
    this.mails = this.route.snapshot.data['mails'];

    console.log(this.route.snapshot.data['mails']);
  }

  navigateToMail(objectId) {
    this.router.navigate(['/mail',objectId]);
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

}
