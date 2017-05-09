import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../common/services/route.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private rs:RouteService) { }

  ngOnInit() {
    this.rs.setBc("sticky-header");
  }

}
