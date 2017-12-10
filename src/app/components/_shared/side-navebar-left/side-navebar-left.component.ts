import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from './../../auth/auth.service';
import { Profile } from './../../../models/profile';

@Component({
  selector: 'app-component-shared-side-navebar-left',
  templateUrl: './side-navebar-left.component.html',
  styleUrls: ['./side-navebar-left.component.css']
})
export class SideNavebarLeftComponent implements OnInit {
  @Input() user: Profile;

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {

  }

  private logout(){
    this.auth.logout();
    this.auth.login()
  }
}
