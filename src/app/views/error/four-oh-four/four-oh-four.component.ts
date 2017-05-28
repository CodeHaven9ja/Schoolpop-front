import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../../common/services/route.service';

@Component({
  selector: 'sp-four-oh-four',
  templateUrl: './four-oh-four.component.html',
  styleUrls: ['./four-oh-four.component.scss']
})
export class FourOhFourComponent implements OnInit {

  constructor(private rs: RouteService) { }

  ngOnInit() {
    this.rs.setBc("body-404");
  }

}
