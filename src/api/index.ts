import { FeedItem, Item, User } from './interfaces';
import { Endpoints } from './enums';
import { HttpClient } from 'aurelia-fetch-client';

export class HNAPI {
  private client: HttpClient;

  constructor() {
    this.client = new HttpClient();

    // Configure the Client and set some default options
    this.client.configure((config) => {
      config
        .withBaseUrl(Endpoints.Base)
        .withInterceptor({
          request(request: Request) {
            console.log(`Requesting ${request.method} ${request.url}`);
            return request;
          },
          response(response: Response) {
            console.log(`Received ${response.status} ${response.url}`);
            return response.json();
          },
        });
    });
  }

  news(page = 1): Promise<FeedItem[]> {
    return this.client.fetch(`${Endpoints.News}/${page}.json`) as any;
  }

  newest(page = 1): Promise<FeedItem[]> {
    return this.client.fetch(`${Endpoints.Newest}/${page}.json`) as any;
  }

  ask(page = 1): Promise<FeedItem[]> {
    return this.client.fetch(`${Endpoints.Ask}/${page}.json`) as any;
  }

  show(page = 1): Promise<FeedItem[]> {
    return this.client.fetch(`${Endpoints.Show}/${page}.json`) as any;
  }

  jobs(page = 1): Promise<FeedItem[]> {
    return this.client.fetch(`${Endpoints.Jobs}/${page}.json`) as any;
  }

  item(id: string): Promise<Item> {
    if (!id || !id.length) return Promise.reject('No id was given, unable to retrieve item');
    return this.client.fetch(`${Endpoints.Item}/${id}.json`) as any;
  }

  user(id: string): Promise<User> {
    if (!id || !id.length) return Promise.reject('No id was given, unable to retrieve user');
    return this.client.fetch(`${Endpoints.User}/${id}.json`) as any;
  }
}

export const API = new HNAPI();
