import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

  messageId: string;
  mail: Parse.Object = new Parse.Object();
  currentUser: Parse.User;

  moment = new MomentUtil();
  replySubject: string;
  replyText:string;

  constructor(private rs: RouteService, private route: ActivatedRoute, private us: UserService, private ms: MailService, private router: Router) {
    this.currentUser = us.getCurrentUser();
  }

  ngOnInit() {
    this.rs.setBc("sticky-header");
    this.mail = this.route.snapshot.data['mail'];
    if (this.mail.get("to").id === this.currentUser.id && !this.mail.get("isRead")) {
      this.ms.markAsRead(this.mail).subscribe();
    }
    let subject = this.mail.get("subject");
    this.replySubject = `RE: ${subject}`;
  }

  onReply() {
    let message: any = {};
    message.users = [this.mail.get("from").id];

    message.message = {
      subject: this.replySubject,
      text: this.replyText
    }

    this.ms.sendMail(message).subscribe(
      (res) => {
        this.router.navigate(['/mail']);
      },
      (err) => this.router.navigate(['/mail'])
    );

  }

  getCreatedAt(date) {
    return this.moment.timeDateAgo(date);
  }

  getDateFormatted(date) {
    let format: string = "MM/DD/YYYY";
    return this.moment.format(date, format);
  }

}
