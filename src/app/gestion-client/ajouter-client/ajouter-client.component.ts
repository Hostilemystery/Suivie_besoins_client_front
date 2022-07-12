import { Router } from '@angular/router';
import { ApiServices } from '../service/apiClient.service';
import { gestionClient } from './../gestion-client.model';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.scss']
})
export class AjouterClientComponent implements OnInit {

  formValue! : FormGroup;
  gestionClientObj: gestionClient= new gestionClient();
  clientData!:any;
  actionBtn : string="Add client";
  servicedata! : any;

  constructor(
    private matDialogRef:MatDialogRef<AjouterClientComponent>,
    private formbuilder:FormBuilder,
    private api: ApiServices,
    private router: Router,
    private toastr: ToastrService
    ) { }


  ngOnInit(): void {
    this.formValue =  this.formbuilder.group({
      name:['',[Validators.required]],
      number:['',[Validators.required,Validators.minLength(9)]],
      neighborhood:['',Validators.required],
      email:['',[Validators.email,Validators.required]],
      detaille_service:['',[Validators.required]],
      Service_Name:['',[Validators.required]],
    })
    this.getAllClient();
    this.getAllService();

  }
  onClose(){
    this.matDialogRef.close();
  }

  postClientDetails(){

    this.gestionClientObj.name = this.formValue.value.name;
    this.gestionClientObj.number = this.formValue.value.number;
    this.gestionClientObj.neighborhood = this.formValue.value.neighborhood;
    this.gestionClientObj.email = this.formValue.value.email;
    this.gestionClientObj.detaille_service = this.formValue.value.detaille_service;
    this.gestionClientObj.service_id = this.formValue.value.Service_Name;

    this.api.postClient(this.gestionClientObj).subscribe(res=>{
    console.log(res);
    this.formValue.reset();
    //  this.router.navigate(['Gestion-client'])
    //  .then(() => {
    //    window.location.reload();
    //  });
    this.matDialogRef.close('add');
    //  this.getAllClient();
    },
      err=>{
        this.toastr.warning('Une erreur est survenue', 'Attention!',{
          timeOut: 2000
        });
        // alert("error adding client")
      }
    )

  }


  getAllService(){
    this.api.getService().subscribe(res=>{
      this.servicedata = res.service;
      console.warn(res.service);

    })
  }


  getAllClient(){
    this.api.getClient().subscribe(res => {
      this.clientData= res.client;
    })
  }
}
