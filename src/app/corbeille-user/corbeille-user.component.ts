import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiUserService } from './service/api-user.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-corbeille-user',
  templateUrl: './corbeille-user.component.html',
  styleUrls: ['./corbeille-user.component.scss']
})
export class CorbeilleUserComponent implements OnInit {

  message: string="";
  UserData!: any;
  displayedColumns: string[] = ['id', 'name', 'email', 'role','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private dialogRef: MatDialog, private api: ApiUserService,private toastr: ToastrService) { }


  ngOnInit(): void {
    this.getAllUser()
  }

  getAllUser(){
    this.api.getUser().subscribe({ next:res => {

      console.warn(res.client)
      this.dataSource= new MatTableDataSource(res.client);
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

  deleteUser(id : any){
    this.api.deleteUser(id).subscribe({next:res => {
      this.toastr.success('Suppression du  l\'utilisateur reussi', 'Felicitation!',{
        timeOut: 2000
      });
      this.getAllUser();
    },
    error:() => {
      this.toastr.warning('Une erreur est survenue lors de la suppression ', 'Attention!',{
        timeOut: 2000
      });
      alert("error while deleting User")
    }
    })
  }

  restoreUser(id:any){
    this.api.restoreUser(id).subscribe({next:res => {
      this.toastr.success('restoration de l\'utilisateur reussi', 'Felicitation!',{
        timeOut: 2000
      });
      this.getAllUser();
    },
    error:() => {
      this.toastr.warning('Une erreur est survenue lors de la restoration ', 'Attention!',{
        timeOut: 2000
      });
      // alert("error while restoring User")
    }
    })
  }
}
