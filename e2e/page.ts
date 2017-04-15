import { browser, element, by } from 'protractor';

export abstract class Page {
  abstract navigateTo();

  getCurrentHeader() {
    return element(by.css('.aui-page-header h1')).getText();
  }

  abstract getExpectedHeader();
}
