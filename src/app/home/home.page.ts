import { Component } from '@angular/core';
import { EmailComposer } from '@ionic-enterprise/email-composer/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private emailComposer: EmailComposer) {}

  async openDefault() {
    const result = await this.emailComposer.hasClient('mailto');
    console.log(`Device has client "mailto": ${result}`);
    try {
      await this.emailComposer.open({ app: 'mailto', subject: 'This is a test' });
    } catch (e) {
      console.log('Failed to open "mailto" client', e);
    }
  }
}
