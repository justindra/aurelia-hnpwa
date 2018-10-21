import { API } from './../api/index';
import { FeedItem } from './../api/interfaces';

export class Top {
  newsItems: FeedItem[] = [];

  activate() {
    API.news()
      .then((res) => {
        this.newsItems = res;
      });
  }
}
