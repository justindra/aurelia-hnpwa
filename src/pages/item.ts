import { Item } from './../api/interfaces';
import { API } from './../api/index';
export class ItemView {
  item: Item;

  activate(params) {
    API.item(params.id)
      .then((res) => {
        this.item = res;
      });
  }
}
