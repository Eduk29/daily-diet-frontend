import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'user',
    children: [
      {
        path: 'register',
        loadComponent: () => import('./users/pages/user-create/user-create.component').then(m => m.UserCreateComponent),
      },
    ],
  },
  { path: 'home', loadComponent: () => import('./pages/home/home/home.component').then(m => m.HomeComponent) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
