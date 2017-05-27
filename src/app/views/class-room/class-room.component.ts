import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { RouteService } from '../../common/services/route.service';
import { Observable } from 'rxjs';
import { ClassesService } from '../../common/services/classes.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr';
import { validateClassRoomName } from '../../common/validators/class-room-students.validator';
import { UserService } from '../../common/services/user.service';

@Component({
  selector: 'sp-class-room',
  templateUrl: './class-room.component.html',
  styleUrls: ['./class-room.component.scss']
})
export class ClassRoomComponent implements OnInit {

  newClassForm: FormGroup;
  classesObsv: Observable<Parse.Object[]> = this.cs.getClasses();
  classes: Parse.Object[] = [];
  isLoading: boolean = false;

  sub:any;

  commonName = new FormControl("", Validators.compose([Validators.required,
  this.uniqueClassName.bind(this)]));

  constructor(private rs: RouteService,
    private cs: ClassesService,
    private us:UserService,
    private fb: FormBuilder,
    private toastr: ToastsManager,
    vRef: ViewContainerRef) {

    this.toastr.setRootViewContainerRef(vRef);

    this.createForm();
  }

  ngOnInit() {
    this.rs.setBc("sticky-header");
    this.classesObsv.subscribe(
      (c) => {
        this.classes = c;
        this.cs.setClasses(c);
      }
    );
  }

  createForm() {
    this.newClassForm = this.fb.group({
      commonName: this.commonName
    })
  }

  onSubmit() {
    let className = this.newClassForm.value.commonName;
    this.isLoading = true;
    let c = this.newClassForm.value;
    c.students = [];

    let ClassRoom = Parse.Object.extend("ClassRoom");
    let clazz:Parse.Object = new ClassRoom();
    clazz.set("commonName", className);
    clazz.set("students", []);

    this.cs.addClass(clazz).flatMap(() => this.cs.getClasses()).subscribe(
      (c: Parse.Object[]) => {
        this.classes = c;
        this.newClassForm.reset();
        this.isLoading = false;
        this.cs.setClasses(c);
      }
    );
  }

  uniqueClassName(control) {
    let name: string = control.value;
    let isInvalid = false;

    for (let i = 0; i < this.classes.length; i++) {
      let c:any = this.classes[i];
      if (c.commonName && name && name.toLowerCase() === c.commonName.toLowerCase()) {
        isInvalid = true;
      }
      break;
    }
    if (isInvalid) {
      return {
        isInvalid: isInvalid
      };
    } else {
      return null;
    }
  }

}
