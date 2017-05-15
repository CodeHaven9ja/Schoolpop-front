import { RouteService } from './../../../common/services/route.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sp-cr-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ClassRoomViewComponent implements OnInit {

  class: any = {};

  constructor(private rs: RouteService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.rs.setBc("sticky-header");

    this.class = this.route.snapshot.data['classroom'];
  }

}
