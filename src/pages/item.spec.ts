import { ItemPage } from './item';
import { MockedHN } from 'api/__mocks__/index';

describe('The Item Page', () => {
  let itemPage: ItemPage;
  const initMock: MockedHN = new MockedHN();

  beforeEach(() => {
    itemPage = new ItemPage();
  });

  it('should have an item after activate', async () => {
    initMock.item();
    const id = 16493489;
    await itemPage.activate({ id });
    expect(itemPage.item).toBeDefined();
    expect(itemPage.item.id).toEqual(id);
  });

  it('should not have an item if activate errors', async () => {
    console.error = jest.fn();
    const id = 16493489;
    await itemPage.activate({ id });

    expect(console.error).toHaveBeenCalled();
    expect(itemPage.item).toBeUndefined();
  });
});
