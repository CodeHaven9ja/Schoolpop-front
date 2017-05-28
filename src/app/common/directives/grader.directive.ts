import { Directive, NgModule, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[spGrader]'
})
export class GraderDirective implements OnInit {

  @Input("ca-score")
  caScore: number;

  @Input("ca-score")
  examScore: number;

  withExam:boolean = false;

  constructor(private element:ElementRef) { }

  ngOnInit() {
    
  }

}

@NgModule({
  declarations: [
    GraderDirective
  ],
  exports: [
    GraderDirective
  ]
})
export class GraderModule {

}
