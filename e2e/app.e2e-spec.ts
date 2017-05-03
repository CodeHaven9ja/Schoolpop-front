import { SchoolpopPage } from './app.po';

describe('schoolpop App', () => {
  let page: SchoolpopPage;

  beforeEach(() => {
    page = new SchoolpopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
