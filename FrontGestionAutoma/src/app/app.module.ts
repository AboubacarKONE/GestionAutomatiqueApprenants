import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AjoutApprenantsPage } from './Ajout/ajout-apprenants/ajout-apprenants.page';
import { ToastrModule } from 'ngx-toastr';
import {CardModule} from 'primeng/card';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ListeParApprenantPage } from './Liste/liste-par-apprenant/liste-par-apprenant.page';





@NgModule({
  declarations: [AppComponent,AjoutApprenantsPage,ListeParApprenantPage
 ],
  entryComponents: [  ],
  imports: [BrowserModule,BrowserAnimationsModule,
     IonicModule.forRoot(),
     AppRoutingModule,
     HttpClientModule, 
    ReactiveFormsModule,
    MatButtonModule,
   
    FormsModule,
    CardModule,
    MatCardModule,
  
    ToastrModule.forRoot(),
   
  
    NgbModule],
  providers: [{ provide: RouteReuseStrategy,  
    useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
