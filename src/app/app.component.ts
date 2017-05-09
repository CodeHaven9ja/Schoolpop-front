import { Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy, NgZone, Renderer, ElementRef, ViewChild } from '@angular/core';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';

import { adjustMainContentHeight } from './app.js.helpers';
import { RouteService } from './common/services/route.service';

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

  constructor(
    private rs: RouteService,
    private router: Router,
    private ngZone: NgZone,
    private renderer: Renderer) {

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
  }
}