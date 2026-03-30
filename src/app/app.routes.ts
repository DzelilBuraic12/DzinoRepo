import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'usluge', loadComponent: () => import('./pages/services/services').then(m => m.Services) },
  { path: 'usluge/car-wash', loadComponent: () => import('./pages/services/car-wash/car-wash').then(m => m.CarWash) },
  { path: 'usluge/shop', loadComponent: () => import('./pages/services/shop/shop').then(m => m.Shop) },
  { path: 'usluge/cafe', loadComponent: () => import('./pages/services/cafe/cafe').then(m => m.Cafe) },
  { path: 'lokacija', loadComponent: () => import('./pages/location/location').then(m => m.Location) },
  { path: 'kontakt', loadComponent: () => import('./pages/contact/contact').then(m => m.Contact) },
  { path: '**', redirectTo: '' }
];
