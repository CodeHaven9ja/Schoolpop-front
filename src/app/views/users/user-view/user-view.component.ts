import { CustomValidators } from 'ng2-validation';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../common/models/user';
import { UserService } from '../../../common/services/user.service';
import { UserboxConfig } from '../../../common/components/widgets/userbox/userbox.component';
import { ProfileService } from '../../../common/services/profile.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Topic } from '../../../common/models/topic';
import { TopicService } from '../../../common/services/topic.service';
import { Response } from '@angular/http';
import { ParseService } from '../../../common/services/parse.service';

@Component({
  selector: 'sp-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  @ViewChild('reportModal') public reportModal: ModalDirective;

  user: Parse.User;
  currentUser = false;
  isAdminOrTeacher = false;
  isParent = false;
  parent: Parse.User;
  userboxConfig: UserboxConfig;
  staffboxConfig: UserboxConfig;
  background = '';

  editPosition:number;

  subjectForm: FormGroup;

  public isModalShown = false;
  public isLoading = false;
  public isUpdating = false;

  asyncSelected: string;

  public typeaheadLoading: boolean;
  public typeaheadNoResults: boolean;
  public dataSource: Observable<any>;

  error: any = {};

  results: Parse.Object[] = [];
  public statesComplex: Topic[] = [];

  editScoreGroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private us: UserService,
    private ps: ProfileService,
    private parse: ParseService,
    private ts: TopicService,
    private fb: FormBuilder) {
    this.createForm();

  }

  editScore(i:number) {
    this.editPosition = i;
    this.editScoreGroup.patchValue({
      caScore: this.results[i].get("caScore"),
      examScore: this.results[i].get("examScore")
    })
  }

  finishEdit(i:number) {
    this.isUpdating = true;
    if (this.editScoreGroup.value.caScore != this.results[i].get("caScore")) {
      this.results[i].set("caScore", this.editScoreGroup.value.caScore)
    }
    if (this.editScoreGroup.value.examScore != this.results[i].get("examScore")) {
      this.results[i].set("examScore", this.editScoreGroup.value.examScore)
    }

    Observable.fromPromise(this.parse.saveObject(this.results[i])).subscribe(
      (r) => {
        this.editPosition = null;
        this.isUpdating = false;
      }
    )
  }

  cancelEdit(i) {
    this.editPosition = null;
  }

  ngOnInit() {
    this.init();
    this.getStaff();
    if (this.user.get("role") === "user") {
      this.getResult().subscribe(
        (r: Parse.Object[]) => {
          this.results = r;
        },
        (err: Parse.Error) => console.log(err.message)
      )
    }
  }

  init() {
    this.user = <Parse.User>this.route.snapshot.data['user'];
    this.statesComplex = <Topic[]>this.route.snapshot.data['topics'];

    if (this.user.has("school")) {
      this.background = 'url(' + this.user.get("school").get("banner").url() + ') no-repeat';
    } else {
      this.background = "url('assets/img/profile-banner.jpg') no-repeat";
    }

    this.userboxConfig = <UserboxConfig>this.route.snapshot.data['config'];

    this.currentUser = this.user.id === this.us.currentUser.id;
    this.isAdminOrTeacher = this.us.currentUser.get("role") === 'admin' || this.us.currentUser.get("role") === 'teacher';

    this.isParent = this.user.get("role") === 'parent';

    if (this.isParent) {

    }

    this.dataSource = Observable
      .create((observer: any) => {
        // Runs on every search
        observer.next(this.asyncSelected);
      }).mergeMap((token: string) => this.getStatesAsObservable(token));
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
    this.editScoreGroup = this.fb.group({
      caScore: [0, Validators.required],
      examScore: [0, Validators.required]
    })
  }
  

  getStaff() {
    let staffQuery = new Parse.Query("_User");
    staffQuery
      .equalTo("school", this.us.currentUser.get("school"))
      .equalTo("role", "teacher");

    this.staffboxConfig = new UserboxConfig();
    this.staffboxConfig.title = "Staff";
    this.staffboxConfig.imgWidth = 52;
    this.staffboxConfig.users = Observable.fromPromise(this.parse.getMany(staffQuery));
  }

  getResult(): Observable<Parse.Object[]> {
    let query = new Parse.Query("Report");
    query.equalTo("student", this.user);
    query.descending("createdAt");
    return Observable.fromPromise(this.parse.getOne(query))
      .flatMap((report:Parse.Object) =>{
        let q2 = report.relation("subjects").query();
        q2.include(["subject"]);
        return Observable.fromPromise(this.parse.getMany(q2));
      });
  }

  getGrade(score:number, hasExam:boolean) {
    if (!hasExam) {
      return "";
    } else if (score <= 39) {
      return "F";
    } else if (score > 39 && score <= 44) {
      return "E";
    } else if (score > 44 && score <= 49) {
      return "D";
    } else if (score > 49 && score <= 64) { 
      return "C";
    } else if (score > 64 && score <= 74) {
      return "B";
    } else {
      return "A";
    }
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

    let data: any = {};
    // console.log(topic);
    data.studentId = this.user.id;
    data.caScore = this.subjectForm.value.caScore;
    data.examScore = this.subjectForm.value.examScore;
    data.score = this.subjectForm.value.caScore + this.subjectForm.value.examScore;
    data.topicId = topic[0].objectId;

    this.isLoading = true;

    this.ts.addReport(data).flatMap(() => this.getResult()).subscribe(
      r => {
        this.results = r;
        this.isLoading = false;
        this.hideModal();
      },
      (error: Response) => {
        this.isLoading = false;
        this.error = error.json();
      }
    );

  }

}
