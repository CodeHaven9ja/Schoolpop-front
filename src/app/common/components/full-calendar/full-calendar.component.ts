import { NgModule, Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges, ElementRef, ViewChild } from '@angular/core';

import '../../../../../node_modules/fullcalendar/dist/fullcalendar.min.js';

declare var jQuery: any;

@Component({
  selector: 'sp-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.scss'],
  host: {
    '(window:resize)': 'onResize()'
  }
})
export class FullCalendarComponent implements OnInit, OnDestroy, OnChanges {

  // Properties
  @Input() private options: any;

  @ViewChild('fullCalender') private fullCalender: ElementRef

  public calendar: any;
  private initFlag: boolean = false;

  constructor() {
  }

  ngOnInit() {
    console.log("Got here!");
    this.initFlag = true;
    if (this.options) {
      this.build();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes.options.currentValue) {
      jQuery(this.fullCalender.nativeElement).fullCalendar(changes.options.currentValue);
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
    this.calendar = jQuery(this.fullCalender.nativeElement).fullCalendar(this.options);
  }

  onResize() {

  }
}
