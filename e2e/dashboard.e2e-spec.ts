import { browser, element, by } from 'protractor';

describe('Dashboard', function() {

  beforeAll(() => {
    element(by.id('dashboard_link')).click();
  });

  beforeEach(() => {

  });

  it('Header', () => {
    let currentHeader = element(by.css('.aui-page-header h1')).getText();
    expect(currentHeader).toEqual('Cluster Dashboard "docker-cluster"');
  });

});
