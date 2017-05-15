import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { RouteService } from '../../common/services/route.service';
import { Observable } from 'rxjs';
import { ClassesService } from '../../common/services/classes.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr';
import { validateClassRoomName } from '../../common/validators/class-room-students.validator';

@Component({
  selector: 'sp-class-room',
  templateUrl: './class-room.component.html',
  styleUrls: ['./class-room.component.scss']
})
export class ClassRoomComponent implements OnInit {

  newClassForm: FormGroup;
  classesObsv: Observable<any[]> = this.cs.getClasses();
  classes: any[] = [];
  isLoading: boolean = false;

  commonName = new FormControl("", Validators.compose([Validators.required,
  this.uniqueClassName.bind(this)]));

  constructor(private rs: RouteService,
    private cs: ClassesService,
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
    this.cs.addClass(c).flatMap(() => this.cs.getClasses()).subscribe(
      (c) => {
        this.classes = c;
        this.newClassForm.reset();
        this.isLoading = false;
        console.log(c);
        this.cs.setClasses(c);
      }
    );
  }

  uniqueClassName(control) {
    let name: string = control.value;
    let isInvalid = false;

    // console.log(this.classes);

    for (let i = 0; i < this.classes.length; i++) {
      if (this.classes[i].commonName && name.toLowerCase() === this.classes[i].commonName.toLowerCase()) {
        isInvalid = true;
        // console.log("Is Invalid", isInvalid);
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
