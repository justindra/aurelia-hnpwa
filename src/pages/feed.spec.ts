import { Feed } from './feed';
import { MockedHN } from 'api/__mocks__';

describe('The Feed Page', () => {
  let feedPage: Feed;
  let initMock: MockedHN;
  beforeEach(() => {
    feedPage = new Feed();
    initMock =  new MockedHN();
  });

  it('should get the first page of feeds on activate', async () => {
    initMock.news();
    expect(feedPage.newsItems).toEqual([]);
    await feedPage.activate({}, { settings: { feedType: 'news' } });

    expect(feedPage.feedType).toEqual('news');
    expect(feedPage.newsItems.length).toEqual(30);
    expect(feedPage.page).toEqual(1);
  });

  it('should not set any newsitems on activate if no network', async () => {
    expect(feedPage.newsItems).toEqual([]);
    await feedPage.activate({}, { settings: { feedType: 'news' } });

    expect(feedPage.newsItems.length).toEqual(0);
    expect(feedPage.page).toEqual(1);
  });

  it('should increment page and append items on next', async () => {
    expect(feedPage.newsItems).toEqual([]);
    initMock.news();
    await feedPage.activate({}, { settings: { feedType: 'news' } });
    initMock.news();
    await feedPage.next();

    expect(feedPage.newsItems.length).toEqual(60);
    expect(feedPage.page).toEqual(2);
  });

  it('should determine an activation strategy', () => {
    const actStrategy = feedPage.determineActivationStrategy();
    expect(actStrategy).toEqual('invoke-lifecycle');
  });
});
