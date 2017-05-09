import { AsyncUserIdValidator } from './../../../common/validators/userid-validator';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/filter';

import { RouteService } from '../../../common/services/route.service';
import { UserService } from '../../../common/services/user.service';

declare var jQuery: any;

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {
  ckeditorContent:string = "";
  itemsAsObjects:any[] = [];
  subject:string = "";

  @ViewChild('subjectWrapper') subjectWrapper: ElementRef;

   v = new AsyncUserIdValidator(this.us);

  constructor(private rs:RouteService, private us:UserService) {
    this.ckeditorContent = `<p>Write message here.</p>`;
  }

  ngOnInit() {
    this.rs.setBc("sticky-header");
  }

  onAdd(item) {
    console.log('tag added: value is ' + JSON.stringify(item));
  }

  // TODO: do Async tag verification

  // validateTag(control: FormControl) {
  //   this.v.validate(control).subscribe(
  //     (good) => 
  //   );
  // }

  onAdding(tag): Observable<any> {
    console.log('tag adding: ' + JSON.stringify(tag));
    const confirm = window.confirm('Do you really want to add this tag?');
    return Observable
            .of(undefined)
            .filter(() => confirm)
            .mapTo(tag);
  }

  focusOut() {
    let ne = jQuery(this.subjectWrapper.nativeElement);
    ne.removeClass("tag-input--focused");
  }

  focus() {
    let ne = jQuery(this.subjectWrapper.nativeElement);
    ne.addClass("tag-input--focused");
  }

  onSubmit(){
    console.log(this.ckeditorContent, JSON.stringify(this.itemsAsObjects), this.subject);
  }

}
