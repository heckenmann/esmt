import { browser, element, by } from 'protractor';

describe('Info', function() {

  beforeAll(() => {
    element(by.id('reindex_link')).click();
  });

  beforeEach(() => {

  });

  it('Header', () => {
    let currentHeader = element(by.css('.aui-page-header h1')).getText();
    expect(currentHeader).toEqual('Reindex');
  });

});
