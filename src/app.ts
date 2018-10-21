import { PLATFORM } from 'aurelia-pal';
import { RouterConfiguration, Router } from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Aurelia HN';

    /* tslint:disable max-line-length */
    config.map([
      { route: ['', 'top'], name: 'top',        moduleId: PLATFORM.moduleName('pages/top'), nav: true, title: 'Top' },
      { route: ['new'],     name: 'new',        moduleId: PLATFORM.moduleName('pages/top'), nav: true, title: 'New' },
      { route: ['show'],    name: 'show',       moduleId: PLATFORM.moduleName('pages/top'), nav: true, title: 'Show' },
      { route: ['ask'],     name: 'ask',        moduleId: PLATFORM.moduleName('pages/top'), nav: true, title: 'Ask' },
      { route: ['jobs'],    name: 'jobs',       moduleId: PLATFORM.moduleName('pages/top'), nav: true, title: 'Jobs' },
      // { route: 'item/:id',  name: 'itemDetail', moduleId: PLATFORM.moduleName('pages/top'), title: 'jobs' },
      // { route: 'users/:id', name: 'userDetail', moduleId: PLATFORM.moduleName('pages/top'), title: 'jobs' },
    ]);
    /* tslint:enable max-line-length */
  }
}
