import { Component, OnInit, Input } from '@angular/core';
import { SingleMail } from '../single-mail/single-mail.component';
import { MomentUtil } from '../../../../moment.util';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'tr',
  templateUrl: './mail-box-item.component.html',
  styleUrls: ['./mail-box-item.component.css']
})
export class MailBoxItemComponent implements OnInit {

  @Input()
  mail:SingleMail;

  @Input("avi-width")
  avatarWidth:number;

  @Input()
  class:string = "";

  momentUtil = new MomentUtil();

  currentUser:User;

  constructor(private us: UserService) { 
    this.currentUser = us.getCurrentUser();
  }

  getCreatedAt(date) {
    return this.momentUtil.timeDateAgo(date);
  }

  ngOnInit() {
    // console.log(this.mail);
  }

}
