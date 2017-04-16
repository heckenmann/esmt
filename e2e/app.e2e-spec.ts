import { browser, element, by } from 'protractor';

describe('esmt App', function() {

  beforeAll(() => {

  });

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
      'generator_link',
      'settings_link'
    ];
    for (let pos in navigationLinks) {
      expect(element.all(by.id(navigationLinks[pos])).count()).toBe(1);
    }
  });
});
