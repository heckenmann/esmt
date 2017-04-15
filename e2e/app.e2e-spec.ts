import { DashboardPage } from './dashboard.e2e';
import { NodesPage } from './nodes.e2e';
import { browser, element, by } from 'protractor';
import { Page } from './page';
import { IndicesPage } from './indices.e2e';
import { SearchPage } from './search.e2e';
import { SnapshotsPage } from './snapshots.e2e';
import { TasksPage } from './tasks.e2e';

describe('esmt App', function() {
  let dashboard: DashboardPage = new DashboardPage();
  let nodes: NodesPage = new NodesPage();
  let indices: IndicesPage = new IndicesPage();
  let search: SearchPage = new SearchPage();
  let snapshots: SnapshotsPage = new SnapshotsPage();
  let tasks: TasksPage = new TasksPage();

  let pages: Array<Page> = new Array<Page>();
  pages.push(dashboard);
  pages.push(nodes);
  pages.push(indices);
  pages.push(search);
  pages.push(snapshots);
  pages.push(tasks);

  beforeEach(() => {
    browser.driver.manage().window().setSize(1600, 600);
  });

  it('Navigation Links', () => {
    let navigationLinks: string[] = [
      'dashboard_link',
      'nodes_link',
      'indices_link',
      'search_link',
      'snapshots_link',
      'tasks_link',
      'generator_link'
    ];
    for (let page in pages) {
      pages[page].navigateTo();
      for (let pos in navigationLinks) {
        expect(element.all(by.id(navigationLinks[pos])).count()).toBe(1);
      }
    }
  });

  it('Headers', () => {
    for (let page in pages) {
      pages[page].navigateTo();
      expect(pages[page].getCurrentHeader()).toEqual(pages[page].getExpectedHeader());
    }
  });
});
