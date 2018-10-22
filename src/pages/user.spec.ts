import { UserPage } from './user';
import { MockedHN } from 'api/__mocks__/index';

describe('The Item Page', () => {
  let userPage: UserPage;
  const initMock: MockedHN = new MockedHN();

  beforeEach(() => {
    userPage = new UserPage();
  });

  it('should have a user after activate', async () => {
    initMock.user();
    const id = 'davideast';
    await userPage.activate({ id });
    expect(userPage.user).toBeDefined();
    expect(userPage.user.id).toEqual(id);
  });

  it('should not have a user if activate errors', async () => {
    console.error = jest.fn();
    const id = 'davideast';
    await userPage.activate({ id });

    expect(console.error).toHaveBeenCalled();
    expect(userPage.user).toBeUndefined();
  });
});
