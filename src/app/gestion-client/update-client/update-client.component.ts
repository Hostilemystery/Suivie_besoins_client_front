import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { gestionClient } from '../gestion-client.model';
import { ApiServices } from '../service/apiClient.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.scss']
})
export class UpdateClientComponent implements OnInit {

  formValue! : FormGroup;
  gestionClientObj: gestionClient= new gestionClient();
  clientData!:any;
  actionBtn : string="Update"
  servicedata! : any;
  constructor(
            @Inject(MAT_DIALOG_DATA) public editdata:any,
            private matDialogRef:MatDialogRef<UpdateClientComponent>,
            private formbuilder:FormBuilder,
            private api: ApiServices,
            private router: Router,
            private toastr: ToastrService
            ) { }

  ngOnInit(): void {
    this.formValue =  this.formbuilder.group({
      name:['',[Validators.required]],
      number:['',[Validators.required]],
      neighborhood:['',Validators.required],
      email:['',[Validators.email,Validators.required]],
      detaille_service:['',[Validators.required]],
      service_id:['',[Validators.required]],
    })
    this.getAllClient();
    this.getAllService();

    if(this.editdata){
      this.actionBtn= "Update Client";
      this.formValue.controls['name'].setValue(this.editdata.name);
      this.formValue.controls['number'].setValue(this.editdata.number);
      this.formValue.controls['neighborhood'].setValue(this.editdata.neighborhood);
      this.formValue.controls['email'].setValue(this.editdata.email);
      this.formValue.controls['detaille_service'].setValue(this.editdata.detaille_service);
      this.formValue.controls['service_id'].setValue(this.editdata.service_id);

    }
  }

  onClose(){
    this.matDialogRef.close();
  }

  updateClient(){

    console.warn(this.formValue.value);
    console.log(this.editdata.id);

    this.api.updateClient(this.formValue.value, this.editdata.id).subscribe({
      next:(res)=>{
        this.formValue.reset();
    //     this.router.navigate(['Gestion-client'])
    //  .then(() => {
    //    window.location.reload();
    //  });
     this.matDialogRef.close('update');
    },
      error:()=>{
        this.toastr.warning('Une erreur est survenue', 'Attention!',{
          timeOut: 2000
        });
      // alert("error adding client")
    }
    }
    )
  }

  getAllClient(){
    this.api.getClient().subscribe(res => {
      this.clientData= res.client;
    })
  }

  getAllService(){
    this.api.getService().subscribe(res=>{
      this.servicedata = res.service;
      console.warn(res.service);

    })
  }
}
