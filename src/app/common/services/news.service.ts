import { Injectable } from '@angular/core';

@Injectable()
export class NewsService {

  constructor() { }

  getNews() {
    return [
      {
        objectId: 'abd234fgh',
        date: '12 March 2017',
        text: 'If today were the last day of your life, would you want to do what your are about to do today'
      },
      {
        objectId: 'abd345fgh',
        date: '13 March 2017',
        text: 'If today were the last day of your life, would you want to do what your are about to do today'
      }
    ]
  }

}
