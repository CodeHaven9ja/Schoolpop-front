import { Component, OnInit, Input } from '@angular/core';
import { MomentUtil } from '../../../../moment.util';

@Component({
  selector: 'app-single-mail',
  templateUrl: './single-mail.component.html',
  styleUrls: ['./single-mail.component.css']
})

export class SingleMailComponent implements OnInit {

  @Input()
  mail: Parse.Object;

  constructor() { }

  ngOnInit() {
  }

  formatDate(date) {
    let moment = new MomentUtil();

    return moment.timeDateAgo(date);
  }

}
