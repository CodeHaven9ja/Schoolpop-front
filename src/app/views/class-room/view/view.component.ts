import { RouteService } from './../../../common/services/route.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../common/services/user.service';
import { ParseService } from '../../../common/services/parse.service';

@Component({
  selector: 'sp-cr-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ClassRoomViewComponent implements OnInit {

  c: Parse.Object;
  students:any[] = [];
  newStudentForm: FormGroup;
  isLoading: boolean = false;

  constructor(
    private rs: RouteService,
    private fb: FormBuilder,
    private us: UserService,
    private ps: ParseService,
    private route: ActivatedRoute) {
    this.createForm();
  }

  createForm() {
    this.newStudentForm = this.fb.group({
      identifier: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.rs.setBc("sticky-header");

    this.c = this.route.snapshot.data['classroom'];

    this.students = this.c.get("students");
    console.log(this.c);
  }

  onSubmit() {
    let identifier = this.newStudentForm.value.identifier;
    this.us.getUserByIdentifier(identifier).map((user: Parse.User) => {
      let id = user.id;
      let students: any[] = this.c.get("students");
      students.push(id);

      students = this.ArrNoDupe(students);

      this.c.set("students", students);

      return this.ps.saveObject(this.c);
    }).subscribe(
      (clazz) => {
        this.isLoading = false;
      },
      (err: Parse.Error) => {
        this.isLoading = false;
        console.log(err.message);
      }
      );
  }

  ArrNoDupe(a:any[]) {
    let temp = {};
    for (let i = 0; i < a.length; i++)
      temp[a[i]] = true;
    let r = [];
    for (let k in temp)
      r.push(k);
    return r;
  }

}
