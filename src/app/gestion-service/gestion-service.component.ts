import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AjouterServiceComponent } from './ajouter-service/ajouter-service.component';
import { DeleteServiceComponent } from './delete-service/delete-service.component';
import { ServiceApiService } from './service/service-api.service';
import { UpdateServiceComponent } from './update-service/update-service.component';

@Component({
  selector: 'app-gestion-service',
  templateUrl: './gestion-service.component.html',
  styleUrls: ['./gestion-service.component.scss']
})
export class GestionServiceComponent implements OnInit {

  servicedata! : any;
  constructor(private dialogRef: MatDialog,private api: ServiceApiService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllService();
  }

  openDialog(){
    this.dialogRef.open(AjouterServiceComponent).afterClosed().subscribe(val=>{
      if(val==='add'){
        this.toastr.success('Enregistrement du nouveau service reussi', 'Felicitation!',{
          timeOut: 2000
        });
        this.getAllService()
      }
    })
  }

  getAllService(){
    this.api.getService().subscribe(res=>{
      this.servicedata = res.service;
      console.warn(res.service);

    })
  }

  UpdateService(){
    this.dialogRef.open(UpdateServiceComponent).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllService();
      }
    });
  }


  deleteService(id : any){
    this.dialogRef.open(DeleteServiceComponent).afterClosed().subscribe(val=>{
      if(val==='del'){
        this.api.deleteService(id).subscribe({next:res => {
          this.toastr.success('Suppression du  service reussi', 'Felicitation!',{
            timeOut: 2000
          });
          this.getAllService();
        },
        error:() => {
          this.toastr.success('Une erreur est survenu lors de la suppression', 'Attention!',{
            timeOut: 2000
          });
          // alert("error while deleting User")
        }
        })
        this.getAllService()
      }
    })
  }
}

