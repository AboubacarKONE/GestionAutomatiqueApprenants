import { Component, Injectable, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/Ajout/service/services.service';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RandomModel } from 'src/app/model/random-model';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-liste-globale',
  templateUrl: './liste-globale.page.html',
  styleUrls: ['./liste-globale.page.scss'],
})
export class ListeGlobalePage implements OnInit {
  apprenants: any
  locals: any
  listApp : any=[]
  alertController: any;


  constructor(public data:ServicesService,  private apService: ServicesService, public navCtrl: NavController, public alertCtrl: AlertController, private router:Router) { }

  ngOnInit() {
    this.apService.getApprenant().subscribe(data=>{
      this.apprenants = data
      localStorage.setItem("liste", JSON.stringify(this.apprenants))
      this.locals=JSON.parse (localStorage.getItem("liste"))
      
    },err=>{
      console.log(err);

    })
  } 
  exportToExcel() {
    this.data.exportToExcel(this.apprenants, 'Apprenants');
    }
  listerApp(){
    this.apService.getApprenant().subscribe((data)=>{
      
      return this.listApp=data;
     
    })
  }
  deleteApprenant(student_id : any){
    this.apService.deleteApprenant(student_id).subscribe((result)=>{ 
    // console.log(result))
    this.ngOnInit()
    });
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
  


