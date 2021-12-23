import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadStart, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServicesService } from 'src/app/Ajout/service/services.service';
import { RandomModel } from 'src/app/model/random-model';
import { ListeGlobalePage } from '../liste-globale/liste-globale.page';

@Component({
  selector: 'app-liste-par-apprenant',
  templateUrl: './liste-par-apprenant.page.html',
  styleUrls: ['./liste-par-apprenant.page.scss'],
})
export class ListeParApprenantPage implements OnInit {
  listGroup:any;
  listApp: any;
  getGroup:any
  

  constructor(private apService : ServicesService, public alertCtrl: AlertController, public router: Router) { }

  ngOnInit() {
    this.listApp =JSON.parse(localStorage.getItem('random'))
    console.log();
    console.log();  
     this.apService.GetRandomGroup(this.listApp[0], this.listApp[1]).subscribe(data=>{
       this.listGroup = data
    localStorage.setItem('randomGroup', JSON.stringify( this.listGroup))
    this.getGroup=JSON.parse(localStorage.getItem('randomGroup'))
    
    }, err=>{
      console.log(err);
      
     })
  }
  async showPrompt() {  
    const prompt = await this.alertCtrl.create({ 
    cssClass:'danger',
    header: 'Groupe', 
    message: 'entrer le nombre apprenants', 
    inputs: [ 
      
    { 
    
    type: 'text', 
    placeholder: 'Entrer le nombre apprenants par groupe' 
    
    }, 
    { 
   
    type: 'text', 
    placeholder: 'Entrer le nombre de groupe' ,
    
    }, 
    ], 
    buttons: [  
    { 
    text: 'Generer', 
    handler: data => {       
      localStorage.setItem('random',JSON.stringify(data) )  
      this.router.navigateByUrl('/liste-par-apprenant')
    } 
    }, 
    { 
    text: 'Annuler',  
    
    } 
    ] 
    }); 
    await prompt.present(); 
   
    }

}
