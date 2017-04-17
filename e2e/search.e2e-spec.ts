import { browser, element, by } from 'protractor';

describe('Search', function() {

  beforeAll(() => {
    element(by.id('search_link')).click();
  });

  beforeEach(() => {

  });

  it('Header', () => {
    let currentHeader = element(by.css('.aui-page-header h1')).getText();
    expect(currentHeader).toEqual('Search');
  });

  it('Search function', () => {
    let keywords: string = 'john';
    let searchInput = element(by.id('search-input'));
    let searchButton = element(by.buttonText('Find!'));

    expect(searchInput.isDisplayed()).toBeTruthy();
    expect(searchButton.isDisplayed()).toBeTruthy();

    searchInput.clear().then(() => {
      searchInput.sendKeys(keywords).then(() => {
        searchButton.click().then(() => {
          let result = element.all(by.css('table.aui tbody tr td')).map((element) => { return element.getText() });
          expect(result).toEqual([
            'JSON',
            '205',
            '4.631368',
            'testdata',
            'account'
          ]);
        });
      });
    });
  });

});
