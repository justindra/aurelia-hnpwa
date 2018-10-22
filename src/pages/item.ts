import { Item } from './../api/interfaces';
import { API } from './../api/index';
export class ItemPage {
  item: Item;

  activate(params) {
    return API.item(params.id)
      .then((res) => {
        this.item = res;
      });
  }
}
