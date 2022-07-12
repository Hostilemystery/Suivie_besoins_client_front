import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { AjouterUtilisateurComponent } from './ajouter-utilisateur/ajouter-utilisateur.component';
import { DeleteUtilisateurComponent } from './delete-utilisateur/delete-utilisateur.component';
import { gestionUtilisateur } from './gestion-utilisateur.model';
import { ApiService } from './service/api.service';
import { UpdateUtilisateurComponent } from './update-utilisateur/update-utilisateur.component';

@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.scss']
})
export class GestionUtilisateurComponent implements OnInit {

  message: string="";
  UserData!: any;
  displayedColumns: string[] = ['id', 'name', 'email', 'role','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private dialogRef: MatDialog, private api: ApiService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  openDialog(){
    this.dialogRef.open(AjouterUtilisateurComponent).afterClosed().subscribe(val=>{
      if(val==='add'){
        this.toastr.success('Enregistrement du nouvel utilisateur reussi', 'Felicitation!',{
          timeOut: 2000
        });
        this.getAllUser();
      }
    })
  }
  getAllUser(){
    this.api.getUser().subscribe({ next:res => {


      this.dataSource= new MatTableDataSource(res.user);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort= this.sort;
    }})
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  UpdateUser(row:any){
    this.dialogRef.open(UpdateUtilisateurComponent,{
      data:row
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.toastr.success('Modification de l\'utilisateur reussi', 'Felicitation!',{
          timeOut: 2000
        });
        this.getAllUser();
      }
    });
  }

  deleteUser(id : any){
    this.dialogRef.open(DeleteUtilisateurComponent).afterClosed().subscribe(val=>{
      if(val==='del'){
        this.api.deleteUser(id).subscribe({next:res => {
          this.toastr.success('Suppression de l\'utilisateur reussi', 'Felicitation!',{
            timeOut: 2000
          });
          this.getAllUser();
        },
        error:() => {
          this.toastr.warning('Une erreur est survenue lors de la suppression', 'Attention!',{
            timeOut: 2000
          });
          // alert("error while deleting User")
        }
        })
        this.getAllUser();
      }
    })
  }
}
