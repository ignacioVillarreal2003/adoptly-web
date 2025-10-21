import { Routes } from '@angular/router';
import {MainLayout} from './features/main-layout/main-layout';
import {PetsDashboard} from './features/pets-dashboard-component/pets-dashboard/pets-dashboard';
import {Home} from './features/home-component/home/home';

export const routes: Routes = [
  /*{
    path: 'auth',
    component: AuthLayout,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },*/
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'pets-dashboard', component: PetsDashboard },
      { path: 'home', component: Home },
    ],
  },
  { path: '**', redirectTo: '' },
];
