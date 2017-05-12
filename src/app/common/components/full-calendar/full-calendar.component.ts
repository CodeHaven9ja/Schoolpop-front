import { NgModule, Directive, OnInit, Input, OnDestroy, OnChanges, SimpleChanges, ElementRef } from '@angular/core';

import '../../../../../node_modules/fullcalendar/dist/fullcalendar.min.js';

declare var jQuery: any;

@Directive({
  selector: '[fullCalendar]',
  host: {
    '(window:resize)': 'onResize()'
  }
})
export class FullCalendarDirective implements OnInit, OnDestroy {

  // Properties
  @Input() private options: any;

  public calendar: any;
  private element: ElementRef;
  private initFlag: boolean = false;

  constructor(element: ElementRef) { 
    this.element = element;
  }

  ngOnInit() {
    console.log("Got here!");
    this.initFlag = true;
    if (this.options) {
      this.build();
    }
  }

  ngOnDestroy() {
    if (this.calendar) {
      this.calendar = void 0;
    }
  }

  build() {
    // Clear before rebuild
    this.ngOnDestroy();

    if (typeof jQuery.fullCalendar === 'undefined') {
      throw new Error('Configuration issue: Embedding jquery.fullCalendar.js lib is mandatory');
    }

    this.calendar = jQuery(this.element.nativeElement).fullCalendar(this.options);
  }

  onResize() {

  }
}
