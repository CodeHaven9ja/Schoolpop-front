import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../common/services/route.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private rs:RouteService) { }

  ngOnInit() {
    this.rs.setBc("sticky-header");
  }

}
