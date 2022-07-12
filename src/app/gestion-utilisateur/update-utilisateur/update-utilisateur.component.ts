import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { gestionUtilisateur } from '../gestion-utilisateur.model';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-update-utilisateur',
  templateUrl: './update-utilisateur.component.html',
  styleUrls: ['./update-utilisateur.component.scss']
})
export class UpdateUtilisateurComponent implements OnInit {


  formValue! : FormGroup;
  gestionUtilisateurObj: gestionUtilisateur= new gestionUtilisateur();
  UserData!:any;
  RoleData:any;
  actionBtn : string="Update User"
  constructor(@Inject(MAT_DIALOG_DATA) public editdata:any,
  private matDialogRef:MatDialogRef<UpdateUtilisateurComponent>,
   private formbuilder:FormBuilder, private api: ApiService,
   private router: Router,private toastr: ToastrService,
   ) { }

  ngOnInit(): void {
    this.formValue =  this.formbuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.email,Validators.required]],
      password:[''],
      type_utilisateur_id:['',Validators.required],
    })
    this.getAllUser();
    this.getRole();
    if(this.editdata){
      this.actionBtn= "Update Client";
      this.formValue.controls['name'].setValue(this.editdata.name);
      this.formValue.controls['email'].setValue(this.editdata.email);
      this.formValue.controls['type_utilisateur_id'].setValue(this.editdata.type_utilisateur_id);
    }
  }




  onClose(){
    this.matDialogRef.close();
  }

  getAllUser(){
    this.api.getUser().subscribe(res => {
      this.UserData= res.user;
    })
  }

  getRole(){
    this.api.getRole().subscribe(res => {
      this.RoleData= res.service;

    })
  }

  updateUser(){

    console.warn(this.formValue.value);
    this.api.updateUser(this.formValue.value,this.editdata.id).subscribe({
      next:(res)=>{
        console.warn(res);
        this.formValue.reset();
    //     this.router.navigate(['Gestion-user'])
    //  .then(() => {
    //    window.location.reload();
    //  });
     this.matDialogRef.close('update');
    },
      error:()=>{
      // alert("error adding user")
      this.toastr.warning('Une erreur est survenue', 'Attention!',{
        timeOut: 2000
      });
    }
    }
    )
  }
}
