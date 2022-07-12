import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { gestionService } from '../gestion-service.model';
import { ServiceApiService } from '../service/service-api.service';

@Component({
  selector: 'app-ajouter-service',
  templateUrl: './ajouter-service.component.html',
  styleUrls: ['./ajouter-service.component.scss']
})
export class AjouterServiceComponent implements OnInit {

  file!: File;
  formValue! : FormGroup;
   gestionServiceObj: gestionService= new gestionService();
  clientData!:any;
  actionBtn : string="Add Services"



  id!: number;
  image!:any;
  Service_Name!: string;
  Info_Service!: string;



  constructor(
    private matDialogRef:MatDialogRef<AjouterServiceComponent>,
    private formbuilder:FormBuilder,
    private router: Router,
    private api: ServiceApiService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.formValue =  this.formbuilder.group({
      image:['',[Validators.required]],
      Service_Name:['',[Validators.required]],
      Info_Service:['',Validators.required],
    })
    this.getAllService();
  }



  onCreateService() {


  }

  onClose(){
    this.matDialogRef.close();
  }

  // get the file image from html
  onFileChanged(event: any) {
    this.file = event.target.files[0]

  }

  postServiceDetails(){


    const formData = new FormData();
    formData.append('image', this.file, this.file.name);
    formData.append('Service_Name', this.formValue.value.Service_Name);
    formData.append('Info_Service', this.formValue.value.Info_Service);
    // this.gestionServiceObj.image = this.file;
    // this.gestionServiceObj.Service_Name = this.formValue.value.Service_Name;
    // this.gestionServiceObj.Info_Service = this.formValue.value.Info_Service;

    // console.warn(this.file);
    // console.warn(this.file);

    this.api.postService(formData).subscribe(res=>{
    console.warn(res);

    this.formValue.reset();
    this.matDialogRef.close('add');
     this.getAllService();
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
    this.api.getService().subscribe(res => {
      this.clientData= res.Service;
    })
  }

}
