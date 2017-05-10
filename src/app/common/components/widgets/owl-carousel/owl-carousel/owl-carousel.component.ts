import { Component, Input, ElementRef, HostBinding } from '@angular/core';

declare var $: any, jQuery: any;
import 'owl.carousel';

@Component({
  selector: 'owl-carousel',
  template: `<ng-content></ng-content>`
})
export class OwlCarouselComponent {
  @HostBinding('class') defaultClass = 'owl-carousel';
  @Input() options: object;

  f = true;

  $owlElement: any;

  defaultOptions: any = {};

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    // use default - empty
    // for (var key in this.options) {
    //   this.defaultOptions[key] = this.options[key];
    // }
    this.$owlElement = $(this.el.nativeElement).owlCarousel(this.defaultOptions);
  }

  ngOnDestroy() {
    this.$owlElement.owlCarousel('destroy');
    this.$owlElement = null;
  }

}
