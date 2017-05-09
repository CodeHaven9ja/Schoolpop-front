import { Component, OnInit } from '@angular/core';

import { adjustMainContentHeight } from '../../../app.js.helpers';
import { visibleSubMenuClose } from '../../../app.js.helpers';
import { toggleSidebar } from '../../../app.js.helpers';
import { hover } from '../../../app.js.helpers';

declare var jQuery: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    visibleSubMenuClose();
    toggleSidebar();
    hover();
  }

}
