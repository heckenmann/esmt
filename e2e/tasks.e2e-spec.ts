import { browser, element, by } from 'protractor';

describe('Tasks', function() {

  beforeAll(() => {
    element(by.id('tasks_link')).click();
  });

  beforeEach(() => {

  });

  it('Header', () => {
    let currentHeader = element(by.css('.aui-page-header h1')).getText();
    expect(currentHeader).toEqual('Tasks (Cluster)');
  });

});
