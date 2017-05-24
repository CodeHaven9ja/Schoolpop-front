import { Component, OnInit, Input } from '@angular/core';

import { UserService } from '../../../services/user.service';
import { User } from './../../../models/user';

@Component({
  selector: 'sp-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit {

  @Input()
  userId:string;

  @Input()
  user:Parse.User;

  constructor(private us: UserService) { }

  ngOnInit() {
    if (this.userId.length) {
      this.us.getUser(this.userId).subscribe(
        (u) => this.user = u
      )
    } else if(this.user) {
      this.userId = this.user.id;
    }
  }

}
