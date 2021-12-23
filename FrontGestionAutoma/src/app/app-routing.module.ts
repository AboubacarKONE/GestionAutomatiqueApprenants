import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'liste-globale',
    loadChildren: () => import('./Liste/liste-globale/liste-globale.module').then( m => m.ListeGlobalePageModule)
  },
  {
    path: 'liste-par-apprenant',
    loadChildren: () => import('./Liste/liste-par-apprenant/liste-par-apprenant.module').then( m => m.ListeParApprenantPageModule)
  },
  {
    path: 'ajout-apprenants',
    loadChildren: () => import('./Ajout/ajout-apprenants/ajout-apprenants.module').then( m => m.AjoutApprenantsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
