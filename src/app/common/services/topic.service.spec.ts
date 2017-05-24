import { Observable } from 'rxjs';
import { TestBed, inject } from '@angular/core/testing';

import { TopicService } from './topic.service';
import { Topic } from '../models/topic';

describe('Service: TopicService', () => {
  const testTopics: Topic[] = [
    new Topic().setObjectId("lknsdvnsdkvn").setTitle("Agriculture"),
    new Topic().setObjectId("lnvsvdkdsnvs").setTitle("Chemistry")
  ];
  const tObservable:Observable<Topic[]> = Observable.of(testTopics);
  let service: TopicService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopicService]
    });
  });

  it('#getAllTopics should, by default, return an empty array', inject([TopicService], (service: TopicService) => {
    expect(service.getAllTopics()).toEqual(<Observable<Topic[]>>Observable.of([]));
  }));

  it('#setTopics should set the `topics` attribute', inject([TopicService], (service: TopicService) =>{
    service.setTopics(testTopics);
    expect(service.getAllTopics()).toEqual(tObservable);
  }))
});
