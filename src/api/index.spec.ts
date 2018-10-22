import { MockedHN } from './__mocks__';
import { API } from './index';

describe('HNAPI', () => {
  const initMock: MockedHN = new MockedHN();

  it('should return news results', () => {
    initMock.news();
    return API.news(3)
      .then((res: any) => {
        expect(res.length).toEqual(30);
      });
  });

  it('should return news page 1 results by default', () => {
    initMock.news();
    return API.news()
      .then((res: any) => {
        expect(res.length).toEqual(30);
      });
  });

  it('should return newest results', () => {
    initMock.newest();
    return API.newest(1)
      .then((res: any) => {
        expect(res.length).toEqual(30);
      });
  });

  it('should return newest page 1 results by default', () => {
    initMock.newest();
    return API.newest()
      .then((res: any) => {
        expect(res.length).toEqual(30);
      });
  });

  it('should return ask results', () => {
    initMock.ask();
    return API.ask(1)
      .then((res: any) => {
        expect(res.length).toEqual(30);
      });
  });

  it('should return ask page 1 results by default', () => {
    initMock.ask();
    return API.ask()
      .then((res: any) => {
        expect(res.length).toEqual(30);
      });
  });

  it('should return show results', () => {
    initMock.show();
    return API.show(1)
      .then((res: any) => {
        expect(res.length).toEqual(30);
      });
  });

  it('should return show page 1 results by default', () => {
    initMock.show();
    return API.show()
      .then((res: any) => {
        expect(res.length).toEqual(30);
      });
  });

  it('should return jobs results', () => {
    initMock.jobs();
    return API.jobs(1)
      .then((res: any) => {
        expect(res.length).toEqual(16);
      });
  });

  it('should return jobs page 1 results by default', () => {
    initMock.jobs();
    return API.jobs()
      .then((res: any) => {
        expect(res.length).toEqual(16);
      });
  });

  it('should return a single item', () => {
    initMock.item();
    return API.item(16493489)
      .then((res: any) => {
        expect(res.title).toEqual('Machine Learning Crash Course');
      });
  });

  it('should fail when no id is given for an item', () => {
    initMock.item();
    return API.item(undefined)
      .catch((err) => {
        expect(err).toMatch('No id was given');
      });
  });

  it('should return a single user', () => {
    initMock.user();
    return API.user('davideast')
      .then((res: any) => {
        expect(res.karma).toEqual(23);
      });
  });

  it('should fail when no id is given for a user', () => {
    initMock.user();
    return API.user(undefined)
      .catch((err) => {
        expect(err).toMatch('No id was given');
      });
  });
});
