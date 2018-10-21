import { Endpoints } from './../enums';
import * as nock from 'nock';

export class MockedHN {
  private server;

  public news: () => void;
  public newest: () => void;
  public ask: () => void;
  public show: () => void;
  public jobs: () => void;
  public item: () => void;
  public user: () => void;

  constructor() {
    this.server = nock(Endpoints.Base);
    // tslint:disable-next-line:max-line-length
    const endpointList = [Endpoints.News, Endpoints.Newest, Endpoints.Ask, Endpoints.Show, Endpoints.Jobs, Endpoints.Item, Endpoints.User];
    // Generate required mocks
    for (const endpoint of endpointList) {
      this[endpoint] = this.generateMock(endpoint);
    }
  }

  private generateMock(endpoint: string) {
    return  () => {
      const regex = new RegExp(`/${endpoint}/`);
      this.server
        .get(regex)
        .replyWithFile(
          200, `${__dirname}/${endpoint}.json`, { 'Content-Type': 'application/json' },
        );
    };
  }
}
