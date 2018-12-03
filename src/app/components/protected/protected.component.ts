import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styles: []
})
export class ProtectedComponent implements OnInit {
  profile: any;
  constructor(private auth0: AuthService) { }

  ngOnInit() {
    if (this.auth0.userProfile) {
      this.profile = this.auth0.userProfile;
    } else {
      this.auth0.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }

}
