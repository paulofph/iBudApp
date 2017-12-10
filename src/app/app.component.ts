import { Component } from '@angular/core';
import { AuthService } from './components/auth/auth.service';
import { Profile } from './models/profile'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Profile

  constructor(public auth: AuthService) {
     this.auth.handleAuthentication();
  }

  ngOnInit() {
    //this.auth.handleAuthentication();
    //  if(!this.auth.isAuthenticated())
    //    this.auth.login() 
  }
}
