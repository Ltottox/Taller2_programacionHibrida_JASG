import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'citas',
    loadComponent: () => import('./paginas/citas/citas.page').then( m => m.CitasPage)
  },
  {
    path: 'gestion-de-citas',
    loadComponent: () => import('./paginas/gestion-de-citas/gestion-de-citas.page').then( m => m.GestionDeCitasPage)
  },
  {
    path: 'configuraciones',
    loadComponent: () => import('./paginas/configuraciones/configuraciones.page').then( m => m.ConfiguracionesPage)
  },
];
