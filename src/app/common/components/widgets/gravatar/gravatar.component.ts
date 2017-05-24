import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http';

import { UserService } from './../../../services/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-gravatar',
  templateUrl: './gravatar.component.html',
  styleUrls: ['./gravatar.component.css']
})
export class GravatarComponent implements OnInit {

  @Input()
  user:Parse.User;

  @Input()
  userId:string;

  @Input()
  width:number;

  constructor(private us:UserService) { }

  ngOnInit() {
  }

}
