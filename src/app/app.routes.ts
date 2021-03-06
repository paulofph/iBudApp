import { Routes } from '@angular/router';
import { HomeComponent } from './components//home/home.component';
import { ProfileComponent } from './components//profile/profile.component';
import { CallbackComponent } from './components//callback/callback.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent, pathMatch: 'full' },
  { path: 'callback', component: CallbackComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];
