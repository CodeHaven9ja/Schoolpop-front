import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../common/services/route.service';

@Component({
  selector: 'sp-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private rs: RouteService) { }

  ngOnInit() {
    this.rs.setBc("sticky-header");
  }

}
