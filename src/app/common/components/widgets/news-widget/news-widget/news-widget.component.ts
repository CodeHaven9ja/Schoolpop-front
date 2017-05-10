import { Component, OnInit, AfterViewInit, HostBinding, ElementRef } from '@angular/core';

import { NewsService } from '../../../../services/news.service';

declare var $: any, jQuery: any;
import 'owl.carousel';

@Component({
  selector: 'news-widget',
  templateUrl: './news-widget.component.html',
  styleUrls: ['./news-widget.component.css']
})
export class NewsWidgetComponent implements OnInit, AfterViewInit {
  @HostBinding('class') defaultClass = 'owl-carousel';
  news:any[] = [];
  $owlElement: any;

  constructor(private ns: NewsService, private el: ElementRef) { }

  ngAfterViewInit(): void {
    
    this.$owlElement = $(this.el.nativeElement).owlCarousel({
      loop: true,
      center: true,
      items: 1,
      margin: 10,
      nav: false,
      autoplay: true,
      autoplayTimeout: 1000 * 10,
      autoplayHoverPause: true,
      autoHeight: true
    });
  }
  ngOnInit() {
    this.news = this.ns.getNews();
  }

  ngOnDestroy() {
    this.$owlElement.owlCarousel('destroy');
    this.$owlElement = null;
  }

}
