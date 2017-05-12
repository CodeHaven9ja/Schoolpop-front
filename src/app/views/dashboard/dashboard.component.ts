import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouteService } from '../../common/services/route.service';
import { NewsService } from '../../common/services/news.service';
import { EventService } from '../../common/services/event.service';

import '../../../../node_modules/fullcalendar/dist/fullcalendar.min.js';
import { adjustMainContentHeight } from '../../app.js.helpers';

declare var $: any, jQuery: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  news: any[] = [];
  calendar: any;

  @ViewChild('fullCalender') private fullCalender: ElementRef

  constructor(private rs: RouteService, private ns: NewsService, private es:EventService) { }

  ngOnInit() {
    this.rs.setBc("sticky-header");
    this.news = this.ns.getNews();
    this.es.getEvents().subscribe(
      (events) => {
        this.build(events);
        adjustMainContentHeight();
      }
    );
    // console.log(JSON.stringify(this.events));
  }

  build(events:any) {
    if (typeof jQuery.fullCalendar === 'undefined') {
      throw new Error('Configuration issue: Embedding jquery.fullCalendar.js lib is mandatory');
    }
    this.calendar = jQuery(this.fullCalender.nativeElement).fullCalendar(events);
  }

}
