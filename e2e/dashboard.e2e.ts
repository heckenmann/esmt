import { browser, element, by } from 'protractor';
import { Page } from './page';

export class DashboardPage extends Page {

  navigateTo() {
    return browser.get('#/dashboard');
  }

  getExpectedHeader() {
    return 'Cluster Dashboard "docker-cluster"';
  }
}
