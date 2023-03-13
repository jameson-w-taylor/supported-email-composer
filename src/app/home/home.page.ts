import { Component } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { EmailComposer } from '@ionic-enterprise/email-composer/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private emailComposer: EmailComposer) {}

  async openDefault() {
    if (Capacitor.getPlatform() === 'ios') {
      // Check for a configured account on iOS because hasClient('mailto') seems to always return true (iOS bug?)
      // Currently don't know if Android has same bug, avoid checking on that plaform for now (Android needs permissons prior to invoking hasAccount()
      const canSendEmail = await this.emailComposer.hasAccount();
      if (!canSendEmail) {
        console.error('No account configured for this device');
        return;
      }
    }

    const hasDefaultClient = await this.emailComposer.hasClient('mailto');
    if (hasDefaultClient) {
      console.log('Device has "mailto" client');
      try {
        await this.emailComposer.open({ app: 'mailto', subject: 'This is a test' });
      } catch (e) {
        console.error('Failed to open "mailto" client', e);
      }
    } else {
      console.error('Device does NOT have "mailto" client');
    }
  }
}
