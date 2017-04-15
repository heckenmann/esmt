import { browser, element, by } from 'protractor';
import { Page } from './page';

export class IndicesPage extends Page {

  navigateTo() {
    return browser.get('#/indices');
  }

  getExpectedHeader() {
    return 'Indices';
  }
}
