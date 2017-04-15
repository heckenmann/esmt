import { browser, element, by } from 'protractor';
import { Page } from './page';

export class SnapshotsPage extends Page {

  navigateTo() {
    return browser.get('#/snapshots');
  }

  getExpectedHeader() {
    return 'Snapshot API';
  }
}
