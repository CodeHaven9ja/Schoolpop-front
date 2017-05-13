import { Observable } from 'rxjs';
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
  events: Observable<any> = this.es.getEvents();

  constructor(private rs: RouteService, private ns: NewsService, private es:EventService) { }

  ngOnInit() {
    this.rs.setBc("sticky-header");
    this.news = this.ns.getNews();
    adjustMainContentHeight();
    // console.log(JSON.stringify(this.events));
  }

}
