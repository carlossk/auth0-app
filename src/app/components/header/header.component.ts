import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    constructor(public auth0: AuthService) {
        this.auth0.handleAuthentication();
    }
    login() {
      this.auth0.login();
    }
    logout() {
      this.auth0.logout();
    }
}
