import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Response } from '@angular/http';

import { MomentUtil } from './../../../moment.util';

import { MailService } from '../../../common/services/mail.service';
import { UserService } from '../../../common/services/user.service';
import { RouteService } from '../../../common/services/route.service';
import { User } from '../../../common/models/user';

declare var jQuery: any;

@Component({
  selector: 'app-read-mail',
  templateUrl: './read-mail.component.html',
  styleUrls: ['./read-mail.component.css']
})
export class ReadMailComponent implements OnInit {

  messageId:string;
  mail:any = {};
  currentUser:Parse.User;

  moment = new MomentUtil();

  constructor(private rs:RouteService, private route: ActivatedRoute, private us: UserService, private ms: MailService) {
    this.currentUser = us.getCurrentUser();
  }

  ngOnInit() {
    this.rs.setBc("sticky-header");
    this.mail = this.route.snapshot.data['mail'];
    if (this.mail.to.objectId == this.currentUser.get("objectId")) {
      this.ms.markAsRead(this.mail.objectId).subscribe();
    }
  }

  getCreatedAt(date) {
    return this.moment.timeDateAgo(date);
  }

  getDateFormatted(date) {
    let format:string = "MM/DD/YYYY";
    return this.moment.format(date, format);
  }

}
