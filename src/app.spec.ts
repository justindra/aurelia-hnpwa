import { App } from './app';
import { Container } from 'aurelia-framework';
import { RouterConfiguration, Router } from 'aurelia-router';

describe('application routes', () => {
  let app: App;
  let router: Router;
  let routerConfiguration: RouterConfiguration;
  let configureRouter: Promise<void>;

  beforeEach(() => {
    const container = new Container().makeGlobal();
    routerConfiguration = container.get(RouterConfiguration);
    router = container.get(Router);
    app = new App();
    app.configureRouter(routerConfiguration, router);
    configureRouter = router.configure(routerConfiguration);
  });

  it('should exist for sample', async () => {
    expect(router).not.toBeNull();
    await configureRouter;

    // Make sure we have all the required routes
    const requiredRoutes = ['top', 'new', 'show', 'ask', 'jobs', 'item-detail', 'user-detail'];

    for (const requiredRoute of requiredRoutes)  {
      const route = router.routes.find(route => route.name === requiredRoute);
      expect(route).toBeDefined();
    }

    // Make sure that the navigation routes are set
    expect(router.navigation.length).toBe(5);
  });
});
