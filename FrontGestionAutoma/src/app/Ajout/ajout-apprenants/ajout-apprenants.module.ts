import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutApprenantsPageRoutingModule } from './ajout-apprenants-routing.module';

import { AjoutApprenantsPage } from './ajout-apprenants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutApprenantsPageRoutingModule
  ],
  declarations: [AjoutApprenantsPage]
})
export class AjoutApprenantsPageModule {}
