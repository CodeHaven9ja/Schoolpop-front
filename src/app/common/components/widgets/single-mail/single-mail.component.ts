import { Component, OnInit, Input } from '@angular/core';

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

}
