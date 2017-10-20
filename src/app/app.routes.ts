import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'first-part', pathMatch: 'full' },
  { path: 'first-part', component: HomeComponent },
  { path: 'second-part', component: AboutComponent },
  { path: '**',    component: NoContentComponent },
];
