import { browser, element, by } from 'protractor';
import { Page } from './page';

export class SearchPage extends Page {

  navigateTo() {
    return browser.get('#/search');
  }

  getExpectedHeader() {
    return 'Search';
  }
}
