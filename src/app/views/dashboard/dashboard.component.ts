import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../common/services/route.service';
import { NewsService } from '../../common/services/news.service';

declare var $: any, jQuery: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  news: any[] = [];
  constructor(private rs: RouteService, private ns: NewsService) { }

  ngOnInit() {
    this.rs.setBc("sticky-header");
    this.news = this.ns.getNews();
  }

}
