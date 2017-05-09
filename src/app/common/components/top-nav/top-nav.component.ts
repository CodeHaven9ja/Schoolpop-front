import { MomentUtil } from './../../../moment.util';
import { forEach } from '@angular/router/src/utils/collection';
import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { adjustMainContentHeight } from '../../../app.js.helpers';
import { visibleSubMenuClose } from '../../../app.js.helpers';

import { SingleMail } from '../widgets/single-mail/single-mail.component';
import { MailService } from '../../services/mail.service';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

declare var jQuery: any;

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  mails: SingleMail[] = [];
  user: User;
  m: any[] = [];

  mailMapping:
      {[k: string]: string} = {'=0': 'No unread mails.', '=1': 'One unread mail.', 'other': '# unread mails.'};

  constructor(private us: UserService, private ms: MailService) {}

  ngOnInit() {
    this.user = this.us.getCurrentUser();
    this.ms.getUnreadMails().subscribe(
      (mails) => {
        this.m = [];
        this.mails = [];
        this.m = mails;
        let momentUtil = new MomentUtil();
        for (let i = 0; i < this.m.length; i++) {
          let mm = this.m[i];
          let m = new SingleMail();
          m.from = mm.from.firstName;
          m.excerpt = mm.subject;
          m.objectId = mm.objectId;
          m.createdAt = momentUtil.timeDateAgo(mm.createdAt);
          this.mails.push(m);
        }
      },
      (err: Response) => console.log(err.json())
    )
  }

  logout() {
    this.us.logout();
  }

  toggle() {
    let body = jQuery('body');
    let bodyposition = body.css('position');

    if (bodyposition != 'relative') {

      if (!body.hasClass('sidebar-collapsed')) {
        body.addClass('sidebar-collapsed');
        jQuery('.side-navigation ul').attr('style', '');

      } else {
        body.removeClass('sidebar-collapsed chat-view');
        jQuery('.side-navigation li.active ul').css({ display: 'block' });

      }
    } else {
      if (body.hasClass('sidebar-open'))
        body.removeClass('sidebar-open');
      else
        body.addClass('sidebar-open');

      adjustMainContentHeight();
    }
  }

}
