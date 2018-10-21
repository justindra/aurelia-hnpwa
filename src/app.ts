import { PLATFORM } from 'aurelia-pal';
import { RouterConfiguration, Router } from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Aurelia HN';
    config.options.pushState = true;
    config.options.root = '/';

    /* tslint:disable max-line-length */
    config.map([
      { route: ['', 'top'], name: 'top',        moduleId: PLATFORM.moduleName('pages/feed'), nav: true, title: 'Top',  settings: { feedType: 'news' } },
      { route: ['new'],     name: 'new',        moduleId: PLATFORM.moduleName('pages/feed'), nav: true, title: 'New',  settings: { feedType: 'newest' } },
      { route: ['show'],    name: 'show',       moduleId: PLATFORM.moduleName('pages/feed'), nav: true, title: 'Show', settings: { feedType: 'show' } },
      { route: ['ask'],     name: 'ask',        moduleId: PLATFORM.moduleName('pages/feed'), nav: true, title: 'Ask',  settings: { feedType: 'ask' } },
      { route: ['jobs'],    name: 'jobs',       moduleId: PLATFORM.moduleName('pages/feed'), nav: true, title: 'Jobs', settings: { feedType: 'jobs' } },
      // { route: 'item/:id',  name: 'itemDetail', moduleId: PLATFORM.moduleName('pages/feed'), title: 'jobs' },
      // { route: 'users/:id', name: 'userDetail', moduleId: PLATFORM.moduleName('pages/feed'), title: 'jobs' },
    ]);
    /* tslint:enable max-line-length */
  }
}
