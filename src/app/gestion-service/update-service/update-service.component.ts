import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { gestionService } from '../gestion-service.model';
import { ServiceApiService } from '../service/service-api.service';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.scss']
})
export class UpdateServiceComponent implements OnInit {


  file!: File;
  formValue! : FormGroup;
  gestionServiceObj: gestionService= new gestionService();
  clientData!:any;
  actionBtn : string="Update Service"
  servicedata! : any;

  id!: number;
  image!:any;
  Service_Name!: string;
  Info_Service!: string;
  constructor(
    private matDialogRef:MatDialogRef<UpdateServiceComponent>,
    @Inject(MAT_DIALOG_DATA) public editdata:any,
    private formbuilder:FormBuilder,
    private router: Router,
    private api: ServiceApiService,
  ) { }

  ngOnInit(): void {
    this.formValue =  this.formbuilder.group({
      image:['',[Validators.required]],
      Service_Name:['',[Validators.required]],
      Info_Service:['',Validators.required],
    })


    this.getAllService();

    if(this.editdata){
      this.formValue.controls['image'].setValue(this.editdata.image);
      this.formValue.controls['Service_Name'].setValue(this.editdata.Service_Name);
      this.formValue.controls['Info_Service'].setValue(this.editdata.Info_Service);
    }
  }

  getAllService(){
    this.api.getService().subscribe(res=>{
      this.servicedata = res.service;
      console.warn(res.service);

    })
  }


  onFileChanged(event: any) {
    this.file = event.target.files[0]

  }
  onClose(){
    this.matDialogRef.close();
  }

  updateService(){

    const formData = new FormData();
    formData.append('image', this.file, this.file.name);
    formData.append('Service_Name', this.formValue.value.Service_Name);
    formData.append('Info_Service', this.formValue.value.Info_Service);

    console.warn(this.formValue.value);
    this.api.updateService(formData, this.editdata.id).subscribe({
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
      alert("error adding user")
    }
    }
    )
  }

}
