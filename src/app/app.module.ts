import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components//home/home.component';

import { ROUTES } from './app.routes';

import { AuthService } from './components//auth/auth.service';
import { ProfileComponent } from './components//profile/profile.component';
import { CallbackComponent } from './components//callback/callback.component';

import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { PingComponent } from './components/ping/ping.component';


import {MatButtonModule, MatCheckboxModule, MatSidenavModule, MatGridListModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SideNavebarLeftComponent } from './components/_shared/side-navebar-left/side-navebar-left.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenGetter: (() => localStorage.getItem('access_token'))
  }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    CallbackComponent,
    PingComponent,
    SideNavebarLeftComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatGridListModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    AuthService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
