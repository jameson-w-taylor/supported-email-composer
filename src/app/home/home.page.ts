import { Component } from '@angular/core';
import { EmailComposer } from '@ionic-enterprise/email-composer/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private emailComposer: EmailComposer) {
    
  }

  canEmail() {
    this.emailComposer.isAvailable().then(result => console.log('Can Email: ', result));
  }

}
