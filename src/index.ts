import CustomFetch from './api';
import * as Service from './service';

class MailSentry {
  email: Service.Email;
  constructor(xApiToken: string) {
    const api = new CustomFetch({ xApiToken });
    this.email = new Service.Email(api);
  }
}

export default MailSentry;
