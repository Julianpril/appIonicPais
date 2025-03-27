import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { DetallePage } from './detail/detail/detail.page';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage, pathMatch: 'full' },
  { path: 'detalle', component: DetallePage, pathMatch: 'full' },
];
