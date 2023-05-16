import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  constructor (private auth: AuthService){}

  authStatus$ = this.auth.getStatus();

  login() {
    this.auth.signIn();
  }

  logout() {
    this.auth.signOut();
  }

}
