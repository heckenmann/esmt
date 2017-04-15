import { browser, element, by } from 'protractor';
import { Page } from './page';

export class NodesPage extends Page {

  navigateTo() {
    return browser.get('#/nodes');
  }

  getExpectedHeader() {
    return 'Nodes "docker-cluster"';
  }
}
