import { Component, OnInit, Input } from '@angular/core';

export interface ISingleMail {
  objectId: string;
  fromUser: string;
  from:any;
  to:any;
  excerpt: string;
  createdAt: string;
  subject:string;
}
export class SingleMail implements ISingleMail {
  public objectId: string;
  public fromUser: string;
  public excerpt: string;
  public createdAt: string;
  public subject: string;
  public from: any;
  public to: any;
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
