import { Routes } from '@angular/router';
import {MainLayout} from './features/main-layout/main-layout';
import {PetsDashboard} from './features/pets-dashboard-component/pets-dashboard/pets-dashboard';

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
      { path: '', redirectTo: 'pets-dashboard', pathMatch: 'full' },
      { path: 'pets-dashboard', component: PetsDashboard },
    ],
  },
  { path: '**', redirectTo: '' },
];
