import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutApprenantsPage } from './ajout-apprenants.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutApprenantsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutApprenantsPageRoutingModule {}
