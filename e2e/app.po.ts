import { browser, element, by } from 'protractor';

export class SchoolpopPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('body h1')).getText();
  }
}
