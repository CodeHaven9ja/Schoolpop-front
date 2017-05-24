import { TopicService } from './../services/topic.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Topic } from '../models/topic';
@Injectable()
export class TopicResolve implements Resolve<Topic[]> {

	constructor(private ts:TopicService) {
	}
  
  resolve() {
    return this.ts.getAllTopics();
  }
}