import { Observable, Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouteService } from '../../../common/services/route.service';
import { ClassesService } from '../../../common/services/classes.service';

@Component({
  selector: 'sp-cr-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class ClassRoomIndexComponent implements OnInit, OnDestroy {

  classes: any[] = [];
  sub:Subscription;

  constructor(private rs: RouteService, private cs:ClassesService) { }

  ngOnInit() {
    this.rs.setBc("sticky-header");
    this.sub = Observable.timer(0, 1000*5).flatMap(() => this.cs.getClasses()).subscribe(
      (c) => {
        this.classes = c;
      }
    )
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
