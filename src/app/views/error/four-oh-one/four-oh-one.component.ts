import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../../common/services/route.service';

@Component({
  selector: 'sp-four-oh-one',
  templateUrl: './four-oh-one.component.html',
  styleUrls: ['./four-oh-one.component.scss']
})
export class FourOhOneComponent implements OnInit {

  constructor(private rs: RouteService) { }

  ngOnInit() {
    this.rs.setBc("body-500");
  }

}
