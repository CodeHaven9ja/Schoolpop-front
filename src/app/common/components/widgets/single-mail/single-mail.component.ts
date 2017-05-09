import { Component, OnInit, Input } from '@angular/core';

export interface ISingleMail {
  objectId: string;
  from: string;
  excerpt: string;
  createdAt: string;
  subject:string;
}
export class SingleMail implements ISingleMail {
  public objectId: string;
  public from: string;
  public excerpt: string;
  public createdAt: string;
  public subject: string;
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
