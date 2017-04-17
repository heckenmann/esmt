import { browser, element, by } from 'protractor';

describe('Indices', function() {

  beforeAll(() => {
    element(by.id('indices_link')).click();
  });

  beforeEach(() => {

  });

  it('Header', () => {
    let currentHeader = element(by.css('.aui-page-header h1')).getText();
    expect(currentHeader).toEqual('Indices');
  });

});
