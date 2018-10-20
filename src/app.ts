import { API } from './api/index';

export class App {
  message = 'Hello World!';

  attached() {
    API.news()
      .then((res) => {
        console.log(res);
      });
  }
}
