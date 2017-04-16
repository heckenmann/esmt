import { browser, element, by } from 'protractor';

describe('Dashboard', function() {

  beforeAll(() => {
    browser.driver.manage().window().setSize(1600, 600);
    element(by.id('dashboard_link')).click();
    //browser.get('#/dashboard');
  });

  beforeEach(() => {

  });

  it('Header', () => {
    let currentHeader = element(by.css('.aui-page-header h1')).getText();
    expect(currentHeader).toEqual('Cluster Dashboard "docker-cluster"');
  });

});
