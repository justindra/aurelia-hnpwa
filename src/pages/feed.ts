import { API } from '../api/index';
import { FeedItem } from '../api/interfaces';
import { RoutableComponentDetermineActivationStrategy, activationStrategy } from 'aurelia-router';

export class Feed implements RoutableComponentDetermineActivationStrategy {
  newsItems: FeedItem[] = [];
  feedType: string;
  page: number = 1;

  loading: boolean = true;

  determineActivationStrategy() {
    return activationStrategy.invokeLifecycle;
  }

  activate(params, routeConfig) {
    this.feedType = routeConfig.settings.feedType;
    this.page = params.page || 1;
    scrollBodyToTop();
    API[this.feedType]()
      .then((res) => {
        this.newsItems = res;
      });
  }

  next() {
    this.page += 1;
    API[this.feedType](this.page)
      .then((res) => {
        this.newsItems.push.apply(this.newsItems, res);
      });
  }
}

function scrollBodyToTop() {
  document.getElementsByTagName('html')[0].scrollTop = 0;
}
