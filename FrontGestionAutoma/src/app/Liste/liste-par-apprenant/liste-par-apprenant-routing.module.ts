import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeParApprenantPage } from './liste-par-apprenant.page';

const routes: Routes = [
  {
    path: '',
    component: ListeParApprenantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeParApprenantPageRoutingModule {}
