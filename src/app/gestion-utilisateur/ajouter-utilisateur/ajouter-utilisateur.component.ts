import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { gestionUtilisateur } from '../gestion-utilisateur.model';
import { ApiService } from '../service/api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ajouter-utilisateur',
  templateUrl: './ajouter-utilisateur.component.html',
  styleUrls: ['./ajouter-utilisateur.component.scss']
})
export class AjouterUtilisateurComponent implements OnInit {

  formValue! : FormGroup;
  gestionUtilisateurObj: gestionUtilisateur= new gestionUtilisateur();
  UserData!:any;
  RoleData:any;
  actionBtn : string="Add User"
  constructor(@Inject(MAT_DIALOG_DATA) public editdata:any,
  private matDialogRef:MatDialogRef<AjouterUtilisateurComponent>,
   private formbuilder:FormBuilder, private api: ApiService,
   private router: Router,private toastr: ToastrService
   ) { }

  ngOnInit(): void {
    this.formValue =  this.formbuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.required]],
      role:['',Validators.required],
    })
    this.getAllUser();

    this.getRole();
  }

  onClose(){
    this.matDialogRef.close();
  }

  getAllUser(){
    this.api.getUser().subscribe(res => {
      this.UserData= res;
    })
  }

  getRole(){
    this.api.getRole().subscribe(res => {
      this.RoleData= res.service;

    })
  }

  postUserDetails(){

      this.gestionUtilisateurObj.name = this.formValue.value.name;
      this.gestionUtilisateurObj.email = this.formValue.value.email;
      this.gestionUtilisateurObj.password = this.formValue.value.password;
      this.gestionUtilisateurObj.type_utilisateur_id = this.formValue.value.role;

      console.warn(this.gestionUtilisateurObj);

      this.api.postUser(this.gestionUtilisateurObj).subscribe(res=>{
        console.log(res);
        this.formValue.reset();
        //  this.router.navigate(['Gestion-user'])
        //  .then(() => {
        //    window.location.reload();
        //  });
        this.matDialogRef.close('add');
        //  this.getAllClient();
       },
      err=>{
        // alert("error adding User")
        this.toastr.warning('Une erreur est survenue', 'Attention!',{
          timeOut: 2000
        });
      }
    )

  }





  showToaster(){

    this.toastr.success('Saved successfully');

    }
}

