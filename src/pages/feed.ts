import { API } from '../api/index';
import { FeedItem } from '../api/interfaces';
import { RoutableComponentDetermineActivationStrategy, activationStrategy } from 'aurelia-router';

export class FeedPage implements RoutableComponentDetermineActivationStrategy {
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
    return API[this.feedType]()
      .then((res) => {
        this.newsItems = res;
      })
      .catch((err) => {
        console.error(err);
        this.newsItems = [];
      });
  }

  next() {
    this.page += 1;
    return API[this.feedType](this.page)
      .then((res) => {
        this.newsItems.push.apply(this.newsItems, res);
      });
  }
}

function scrollBodyToTop() {
  document.getElementsByTagName('html')[0].scrollTop = 0;
}
