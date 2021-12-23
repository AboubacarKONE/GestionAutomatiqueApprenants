import { Component, OnInit } from '@angular/core';

import { ServicesService } from '../service/services.service';
import {  FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { ToastController } from '@ionic/angular';
import { present } from '@ionic/core/dist/types/utils/overlays';



@Component({
  selector: 'app-ajout-apprenants',
  templateUrl: './ajout-apprenants.page.html',
  styleUrls: ['./ajout-apprenants.page.scss'],
})
export class AjoutApprenantsPage implements OnInit {
  AddForm: FormGroup;
  isSubmitted = false;
  errorMessage:any;

  constructor(public formBuilder: FormBuilder, private toastCtrl: ToastController , public service : ServicesService, public router:Router, public toast : ToastrService) { }

  ngOnInit() {
    this.AddForm = this.formBuilder.group({
    prenom: ['', [Validators.required, Validators.minLength(2)]],
     nom: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    telephone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
    
  }

 

  get errorControl() {
    return this.AddForm.controls;
  }

  OnSubmit() {
    this.isSubmitted = true;
    // if (!this.AddForm.valid) {
    //   console.log('Veuillez remplir tous les champs')
    //   return false;
    // } else {
    //   console.log(this.AddForm.value)
    // }
    this.service.Ajout(this.AddForm.value).subscribe(
      ()=>{  
       
        this.router.navigateByUrl('/liste-globale')
        this.present();
      },
      err=>{
        this.errorMessage = err.error.errors
        this.presentToast();
        
        
      })  

   }
   async presentToast(){
    let toast = this.toastCtrl.create({
      message: this.errorMessage,
      duration: 3000,
       color:'danger',
      position: 'top'
    });
    (await toast).present();
   }
   async present(){
    let toast = this.toastCtrl.create({
      message: 'Ajout effectué',
      duration: 500,
       color:'success',
      position: 'top'
    });
    (await toast).present();
   }
   
}
  
