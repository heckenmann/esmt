import { browser, element, by } from 'protractor';

describe('Settings', function() {

  beforeAll(() => {
    element(by.id('settings_link')).click();
  });

  beforeEach(() => {

  });

  it('Header', () => {
    let currentHeader = element(by.css('.aui-page-header h1')).getText();
    expect(currentHeader).toEqual('Settings');
  });

  it('Correct elasticsearch host', () => {
    let testurl = 'http://elasticsearch:9200';
    element(by.id('dashboard_link')).click().then(() => {
      element(by.id('settings_link')).click().then(() => {
        expect(element(by.id('esurl')).getAttribute('value')).toEqual(testurl);
      });
    });
  });

});
