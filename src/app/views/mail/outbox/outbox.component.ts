import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteService } from '../../../common/services/route.service';

@Component({
  selector: 'app-outbox',
  templateUrl: './outbox.component.html',
  styleUrls: ['./outbox.component.css']
})
export class OutboxComponent implements OnInit {

  mails: Parse.Object[] = [];
  unReadCount = 0;

  constructor(private rs:RouteService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.rs.setBc("sticky-header");
    this.mails = this.route.snapshot.data['mails'];
  }

  navigateToMail(objectId) {
    this.router.navigate(['/mail',objectId]);
  }

}
