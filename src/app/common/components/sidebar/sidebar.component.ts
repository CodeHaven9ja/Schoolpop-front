import { Component, OnInit } from '@angular/core';

import { adjustMainContentHeight } from '../../../app.js.helpers';
import { visibleSubMenuClose } from '../../../app.js.helpers';
import { toggleSidebar } from '../../../app.js.helpers';
import { hover } from '../../../app.js.helpers';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { MailService } from '../../services/mail.service';

declare var jQuery: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentUser:Parse.User;
  uc:number = 0;
  constructor(private us:UserService, private ms:MailService) { }

  ngOnInit() {
    visibleSubMenuClose();
    toggleSidebar();
    hover();

    this.currentUser = this.us.getCurrentUser();

    this.ms.uc.subscribe(
      (count: number) => this.uc = count
    )
  }

}
