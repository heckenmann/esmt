import { EsmtPage } from './app.po';

describe('esmt App', () => {
  let page: EsmtPage;

  beforeEach(() => {
    page = new EsmtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
