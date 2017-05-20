import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../models/user';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'sp-userbox',
  templateUrl: './userbox.component.html',
  styleUrls: ['./userbox.component.scss']
})
export class UserboxComponent implements OnInit {
  @Input()
  config:UserboxConfig;

  constructor() { }

  ngOnInit() {
  }

}

interface IUserbox {
  title:string;
  users: Observable<User[]>;
  imgWidth:number;
}
export class UserboxConfig implements IUserbox {
  imgWidth: number;
  title: string;
  users: Observable<User[]>;
}
