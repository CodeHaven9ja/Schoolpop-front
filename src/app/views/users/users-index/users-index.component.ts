import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Rx';

import { User } from '../../../common/models/user';

import { ProfileService } from '../../../common/services/profile.service';
import { UserService } from '../../../common/services/user.service';
import { Response } from '@angular/http';

@Component({
  selector: 'sp-users-index',
  templateUrl: './users-index.component.html',
  styleUrls: ['./users-index.component.scss']
})
export class UsersIndexComponent implements OnInit {

  currentUser:Parse.User;
  sub:Subscription;
  children:Parse.User[] = [];

  constructor(private us:UserService, private ps:ProfileService) { }

  ngOnInit() {
    this.currentUser = this.us.currentUser;

    if (this.currentUser.get("role") === 'parent') {
      this.sub = this.getChildren(this.currentUser).subscribe(
        children => this.children = children,
        (error:Response) => console.log(error.json())
      )
    }
  }

  getChildren(parent:Parse.User) {
    return this.ps.getChildren(parent);
  }

}
