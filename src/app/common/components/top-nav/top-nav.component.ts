import { MomentUtil } from './../../../moment.util';
import { forEach } from '@angular/router/src/utils/collection';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { adjustMainContentHeight } from '../../../app.js.helpers';
import { visibleSubMenuClose } from '../../../app.js.helpers';

import { MailService } from '../../services/mail.service';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SearchService } from '../../services/search.service';

import 'rxjs/add/operator/distinctUntilChanged';

declare var jQuery: any;

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  mails: Parse.Object[] = [];
  user: Parse.User;

  uc: number = 0;

  terms: string = ""

  mailMapping:
  { [k: string]: string } = { '=0': 'No unread mails.', '=1': 'One unread mail.', 'other': '# unread mails.' };


  constructor(private us: UserService, private ms: MailService, private ss: SearchService) {

  }

  ngOnInit() {
    this.user = this.us.getCurrentUser();
    this.ms.uc.subscribe(
      (count: number) => this.uc = count
    )

    this.ms.getUnreadMails().subscribe(
      mails => {
        if (mails.length > 0) {
          this.ms.setUnreadMails(mails);
          this.ms.setUnreadCount(mails.length)
        }
      }
    )

    this.ms.um.subscribe(
      (mails: Parse.Object[]) => this.mails = mails
    )

    // this.us.getUsersFromParse().subscribe(
    //   (users) => {
    //     console.log(users);
    //   }
    // )

    // this.ss.getQObservable.subscribe(
    //   (s) => console.log(s.search)
    // )
  }

  search(terms: string) {
    if (terms.length > 0)
      this.ss.qSubject.next(terms);
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
