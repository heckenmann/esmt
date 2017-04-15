import { browser, element, by } from 'protractor';
import { Page } from './page';

export class TasksPage extends Page {

  navigateTo() {
    return browser.get('#/tasks');
  }

  getExpectedHeader() {
    return 'Tasks (Cluster)';
  }
}
