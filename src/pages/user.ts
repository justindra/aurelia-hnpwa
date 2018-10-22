import { User } from './../api/interfaces';
import { API } from './../api/index';

export class UserPage {
  user: User;

  activate(params) {
    return API.user(params.id)
      .then((res) => {
        this.user = res;
      })
      .catch((err) => {
        console.error(err);
        this.user = undefined;
      });
  }
}
