import { Component, OnInit, Input } from '@angular/core';

interface ISingleMail {
  objectId: string;
  from: string;
  excerpt: string;
  createdAt: string;
}
export class SingleMail implements ISingleMail {
  objectId: string;
  from: string;
  excerpt: string;
  createdAt: string;
}

@Component({
  selector: 'app-single-mail',
  templateUrl: './single-mail.component.html',
  styleUrls: ['./single-mail.component.css']
})

export class SingleMailComponent implements OnInit {

  @Input()
  mail:SingleMail;

  constructor() { }

  ngOnInit() {
  }

}
