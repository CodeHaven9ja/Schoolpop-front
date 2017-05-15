import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouteService } from '../../common/services/route.service';
import { NewsService } from '../../common/services/news.service';
import { EventService } from '../../common/services/event.service';

import { ModalDirective } from 'ngx-bootstrap/modal';

import '../../../../node_modules/fullcalendar/dist/fullcalendar.min.js';
import { adjustMainContentHeight } from '../../app.js.helpers';
import { SearchService } from '../../common/services/search.service';

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

  terms:string = "";

  isSearching:boolean = false; 

  @ViewChild('autoShownModal') public autoShownModal: ModalDirective;

  constructor(private rs: RouteService, private ns: NewsService, 
    private es: EventService, private ss: SearchService) { }

  ngOnInit() {
    this.rs.setBc("sticky-header");
    this.news = this.ns.getNews();
    adjustMainContentHeight();
    // console.log(JSON.stringify(this.events));

    this.ss.getQObservable.subscribe(
      (s) => {
        this.terms = s.search;
        this.isSearching = true;
        this.search(this.terms);
      }
    )
  }

  search(term:String) {

  }

  hideModal(): void {
    this.autoShownModal.hide();
  }

  onHidden(): void {
    this.isSearching = false;
    this.terms = "";
  }

}
