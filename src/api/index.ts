import { HttpClient } from 'aurelia-fetch-client';

enum Endpoints {
  Base = 'https://api.hnpwa.com/v0/',
  News = 'news',
  Newest = 'newest',
  Ask = 'ask',
  Show = 'show',
  Jobs = 'jobs',
  Item = 'item',
  User = 'user',
}

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

  news(page = 1) {
    return this.client.fetch(`${Endpoints.News}/${page}.json`);
  }

  newest(page = 1) {
    return this.client.fetch(`${Endpoints.Newest}/${page}.json`);
  }

  ask(page = 1) {
    return this.client.fetch(`${Endpoints.Ask}/${page}.json`);
  }

  show(page = 1) {
    return this.client.fetch(`${Endpoints.Show}/${page}.json`);
  }

  jobs(page = 1) {
    return this.client.fetch(`${Endpoints.Jobs}/${page}.json`);
  }

  item(id: string) {
    if (!id || !id.length) return Promise.reject('No id was given, unable to retrieve item');
    return this.client.fetch(`${Endpoints.Item}/${id}.json`);
  }

  user(id: string) {
    if (!id || !id.length) return Promise.reject('No id was given, unable to retrieve user');
    return this.client.fetch(`${Endpoints.User}/${id}.json`);
  }
}

export const API = new HNAPI();
