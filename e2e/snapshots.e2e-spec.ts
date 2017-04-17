import { browser, element, by } from 'protractor';

describe('Snapshots', function() {

  beforeAll(() => {
    element(by.id('search_link')).click();
  });

  beforeEach(() => {

  });

  it('Header', () => {
    let currentHeader = element(by.css('.aui-page-header h1')).getText();
    expect(currentHeader).toEqual('Search');
  });

});
