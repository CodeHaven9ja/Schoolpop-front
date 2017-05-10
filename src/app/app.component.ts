import { 
  Component, 
  OnInit, 
  OnDestroy, 
  NgZone, 
  Renderer, 
  ElementRef, 
  ViewChild, 
  ViewContainerRef } from '@angular/core';
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
import { SingleMail } from './common/components/widgets/single-mail/single-mail.component';
import { User } from './common/models/user';
import { UserService } from './common/services/user.service';

declare var jQuery: any;

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app works!';
  bc = "sticky-header";
  color = 'primary';

  @ViewChild('spinnerElement') spinnerElement: ElementRef;

  sub:Subscription;
  sub2:Subscription;

  unreadCount:number = 0;

  mails: SingleMail[] = [];
  user: User;
  m: any[] = [];

  constructor(
    private rs: RouteService,
    private router: Router,
    private ngZone: NgZone,
    private renderer: Renderer,
    private us:UserService,
    private toastr: ToastsManager,
    vRef: ViewContainerRef,
    private ms:MailService) {

    this.toastr.setRootViewContainerRef(vRef);
    this.sub = router.events.subscribe((event: RouterEvent) => {
      this._navigationInterceptor(event);
    });
  }
  ngOnInit() {
    this.rs.bc.subscribe(
      (c) => {
        let body = jQuery("body");
        body.attr("class", "");
        body.addClass(c);
      }
    )
    adjustMainContentHeight();

    this.user = this.us.getCurrentUser();
    if (this.user) {
      this.sub2 = this.ms.getUnreadMails().subscribe(
        (mails) => {
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
          if (this.unreadCount < this.m.length) {
            this.toastr.success("You have new messages", null, {dismiss: 'click'});
          }
          this.unreadCount = this.m.length;
          this.ms.setUnreadCount(this.m.length);
          this.ms.setUnreadMails(this.mails);
        },
        (err: Response) => {
          console.log(err.json());
          this.ms.setUnreadCountError(err);
          this.ms.setUnreadMailsError(err);
        }
      )
    }
  }

  private _navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      // We wanna run this function outside of Angular's zone to
      // bypass change detection
      this.ngZone.runOutsideAngular(() => {
        let ne = jQuery(this.spinnerElement.nativeElement);
        ne.removeClass("loading-overlay-off").addClass("loading-overlay");
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
      let ne = jQuery(this.spinnerElement.nativeElement);
      ne.removeClass("loading-overlay").addClass("loading-overlay-off");
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    if (this.sub2) {
      this.sub2.unsubscribe();
    }
  }
}