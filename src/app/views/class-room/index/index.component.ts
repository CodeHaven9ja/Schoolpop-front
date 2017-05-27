import { Observable, Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouteService } from '../../../common/services/route.service';
import { ClassesService } from '../../../common/services/classes.service';
import { UserService } from '../../../common/services/user.service';
import { ParseService } from '../../../common/services/parse.service';
import { LoadingService } from '../../../common/services/loading.service';

@Component({
  selector: 'sp-cr-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class ClassRoomIndexComponent implements OnInit, OnDestroy {

  classes: any[] = [];
  sub: Subscription;

  interval: number = 10 * 1000;
  maxInterval: number = 30 * 1000;
  initInterval: number = 1000;

  school:Parse.Object;

  constructor(private rs: RouteService,
    private ps: ParseService,
    private ls: LoadingService,
    private us: UserService, private cs: ClassesService) { }

  ngOnInit() {
    this.rs.setBc("sticky-header");

    this.school = this.us.currentUser.get("school");
    let relation = this.school.relation("classRoom");
    let query = relation.query();
    query.ascending("commonName");

    this.ls.setLoading(true);

    this.getClassesObservable(query).subscribe(
      (classes: Parse.Object[]) => {
        this.ls.setLoading(false);
        this.classes = classes;
      }
    );

    this.sub = this.cs.getSchoolUpdated
      .flatMap(() => this.getClassesObservable(query)).subscribe(
        (classes: Parse.Object[]) => {
          this.classes = classes;
          this.ls.setLoading(false);
        }
      );
  }

  computeInterval(error: boolean) {
    let int: number = 0;
    if (error) {
      // double until maximum interval on errors
      int = this.interval < this.maxInterval ? this.interval * 2 : this.maxInterval;
    } else {
      // anytime the poller succeeds, make sure we've reset to
      // default interval.. this also allows the initInterval to 
      // change while the poller is running
      this.interval = this.initInterval;
      int = this.initInterval;
    }
    return int;
  }

  getClassesObservable(query) {
    return Observable.fromPromise(this.ps.getMany(query));
  }

  remove(c:Parse.Object) {
    this.ls.setLoading(true);
    this.school.relation("classRoom").remove(c);
    Observable.fromPromise(this.ps.saveObject(this.school))
    .map(()=> Observable.fromPromise(this.ps.deleteObject(c))).subscribe();
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
