import { Component, OnInit } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-ping',
  templateUrl: './ping.component.html',
  styleUrls: ['./ping.component.css']
})
export class PingComponent implements OnInit {

  API_URL: string = 'http://localhost:5000/api';
  message: string;


  constructor(public authHttp: AuthHttp) { }

  ngOnInit() {
  }

  public securedPing(): void {
    this.message = '';
    this.authHttp.get(`${this.API_URL}/ping`)
      .map(res => res.json())
      .subscribe(
        data => console.log("data", data),
        error => this.message = error,
      );
  }

}
