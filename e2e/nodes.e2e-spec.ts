import { browser, element, by } from 'protractor';

describe('Nodes', function() {

  beforeAll(() => {
    element(by.id('nodes_link')).click();
  });

  beforeEach(() => {

  });

  it('Header', () => {
    let currentHeader = element(by.css('.aui-page-header h1')).getText();
    expect(currentHeader).toEqual('Nodes "docker-cluster"');
  });

});
