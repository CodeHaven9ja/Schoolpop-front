import { CustomValidators } from 'ng2-validation';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../common/models/user';
import { UserService } from '../../../common/services/user.service';
import { UserboxConfig } from '../../../common/components/widgets/userbox/userbox.component';
import { ProfileService } from '../../../common/services/profile.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Topic } from '../../../common/models/topic';
import { TopicService } from '../../../common/services/topic.service';
import { Response } from '@angular/http';

@Component({
  selector: 'sp-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  @ViewChild('reportModal') public reportModal: ModalDirective;

  user: User;
  currentUser = false;
  isAdminOrTeacher = false;
  isParent = false;
  parent: User;
  userboxConfig: UserboxConfig;
  background = '';

  subjectForm: FormGroup;

  public isModalShown = false;
  public isLoading = false;

  asyncSelected: string;

  public typeaheadLoading: boolean;
  public typeaheadNoResults: boolean;
  public dataSource: Observable<any>;

  error:any = {};

  constructor(
    private route: ActivatedRoute,
    private us: UserService,
    private ps: ProfileService,
    private ts:TopicService,
    private fb: FormBuilder) {
    this.createForm();

  }

  getStatesAsObservable(token) {
    let query = new RegExp(token, 'ig');
    return Observable.of(
      this.statesComplex.filter((state: any) => {
        return query.test(state.title);
      })
    );
  }

  createForm() {
    this.subjectForm = this.fb.group({
      topic: ['', Validators.required],
      caScore: [0, Validators.required],
      examScore: [0, Validators.required]
    });
  }

  public statesComplex: Topic[] = [];

  ngOnInit() {
    this.user = <User>this.route.snapshot.data['user'];
    this.statesComplex = <Topic[]>this.route.snapshot.data['topics'];

    this.background = 'url(' + this.user.school.banner.url + ') no-repeat';

    this.userboxConfig = <UserboxConfig>this.route.snapshot.data['config'];

    this.currentUser = this.user.objectId === this.us.currentUser.get("objectId");
    this.isAdminOrTeacher = this.us.currentUser.get("role") === 'admin' || this.us.currentUser.get("role") === 'teacher';

    this.isParent = this.user.role === 'parent';

    if (this.isParent) {

    }

    this.dataSource = Observable
      .create((observer: any) => {
        // Runs on every search
        observer.next(this.asyncSelected);
      }).mergeMap((token: string) => this.getStatesAsObservable(token));
  }

  public showModal(): void {
    this.isModalShown = true;
  }

  public hideModal(): void {
    this.reportModal.hide();
  }

  public onHidden(): void {
    this.isModalShown = false;
  }

  public onSubmit(): void {
    let topic = this.statesComplex.filter((state: Topic) => {
      return state.title === this.subjectForm.value.topic;
    });

    let data:any = {};
    // console.log(topic);
    data.studentId = this.user.objectId;
    data.caScore = this.subjectForm.value.caScore;
    data.examScore = this.subjectForm.value.examScore;
    data.score = this.subjectForm.value.caScore + this.subjectForm.value.examScore;
    data.topicId = topic[0].objectId;

    this.isLoading = true; 

    this.ts.addReport(data).subscribe(
      r => {
        this.isLoading = false;
        this.hideModal();
      },
      (error:Response) => {
        this.isLoading = false;
        this.error = error.json();
      }
    );

  }

}
