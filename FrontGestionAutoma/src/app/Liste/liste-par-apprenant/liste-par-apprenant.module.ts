import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeParApprenantPageRoutingModule } from './liste-par-apprenant-routing.module';

import { ListeParApprenantPage } from './liste-par-apprenant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeParApprenantPageRoutingModule
  ],
  declarations: [ListeParApprenantPage]
})
export class ListeParApprenantPageModule {}
