import {
  Component,
  OnInit,
  OnDestroy,
  NgZone,
  Renderer,
  ElementRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';
import { Response } from '@angular/http';

import { Subscription } from 'rxjs/Rx';

import { ToastsManager, Toast } from 'ng2-toastr';

import { adjustMainContentHeight } from './app.js.helpers';
import { RouteService } from './common/services/route.service';
import { MailService } from './common/services/mail.service';
import { MomentUtil } from './moment.util';
import { User } from './common/models/user';
import { UserService } from './common/services/user.service';

declare var jQuery: any;
declare var Parse: any;

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app works!';
  bc = 'sticky-header';
  color = 'primary';

  @ViewChild('spinnerElement') spinnerElement: ElementRef;

  sub: Subscription;
  sub2: Subscription;

  unreadCount = 0;

  mails: Parse.Object[] = [];
  user: Parse.User;
  m: Parse.Object[] = [];

  constructor(
    private rs: RouteService,
    private router: Router,
    private ngZone: NgZone,
    private renderer: Renderer,
    private us: UserService,
    private toastr: ToastsManager,
    vRef: ViewContainerRef,
    private ms: MailService) {

    this.toastr.setRootViewContainerRef(vRef);
    this.sub = router.events.subscribe((event: RouterEvent) => {
      this._navigationInterceptor(event);
    });
  }
  ngOnInit() {
    this.rs.bc.subscribe(
      (c) => {
        const body = jQuery('body');
        body.attr('class', '');
        body.addClass(c);
      }
    );
    adjustMainContentHeight();

    this.user = this.us.getCurrentUser();

    if (this.user != null) {
      this.poll();
    } else {
      this.us.setLoginStatus(false);
    }
  }

  private poll() {
    // Switch to live query
    let query = new Parse.Query("Mail");
    query
      .equalTo("to", this.us.currentUser)
      .equalTo("isRead", false)
      .include(['message', 'from'])
      .descending("createdAt");
    let subscription = query.subscribe();

    subscription.on('open', () => {
      console.log('subscription opened');
    });

    subscription.on('create', (object) => {
      console.log('object created');
      this.unreadCount++;
      this.addToMailList(object);
      this.toastr.success('You have new messages');
      this.ms.setUnreadCount(this.unreadCount);
      this.ms.setUnreadMails(this.mails);
    });

    subscription.on('enter', (object) => {
      console.log('object entered', object);
      this.unreadCount++;
      this.addToMailList(object);
      this.toastr.success('You have new messages');
      this.ms.setUnreadCount(this.unreadCount);
      this.ms.setUnreadMails(this.mails);
    });
    
    subscription.on('leave', (object) => {
      console.log('object left', object);
      if (this.unreadCount > 0) {
        this.unreadCount--;
      }
      this.removeFromMailList(object);
      this.ms.setUnreadCount(this.unreadCount);
      this.ms.setUnreadMails(this.mails);
    });
  }

  addToMailList(mail:Parse.Object) {
    this.mails.push(mail);
  }

  removeFromMailList(mail: Parse.Object) {
    this.mails = this.mails.filter((el) => {
      return el.id !== mail.id;
    })
  }

  private _navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      // We wanna run this function outside of Angular's zone to
      // bypass change detection
      this.ngZone.runOutsideAngular(() => {
        const ne = jQuery(this.spinnerElement.nativeElement);
        ne.removeClass('loading-overlay-off').addClass('loading-overlay');
      });
    }

    if (event instanceof NavigationEnd) {
      this._hideSpinner();
    }

    if (event instanceof NavigationCancel) {
      this._hideSpinner();
    }

    if (event instanceof NavigationError) {
      this._hideSpinner();
    }
  }

  private _hideSpinner(): void {
    // We wanna run this function outside of Angular's zone to
    // bypass change detection,
    this.ngZone.runOutsideAngular(() => {
      const ne = jQuery(this.spinnerElement.nativeElement);
      ne.removeClass('loading-overlay').addClass('loading-overlay-off');
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    if (this.sub2) {
      this.sub2.unsubscribe();
    }
  }
}
