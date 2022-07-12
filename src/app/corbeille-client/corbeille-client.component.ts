import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiClientService } from './service/api-client.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-corbeille-client',
  templateUrl: './corbeille-client.component.html',
  styleUrls: ['./corbeille-client.component.scss']
})
export class CorbeilleClientComponent implements OnInit {

  clientData!: any
  displayedColumns: string[] = ['id', 'name', 'number', 'neighborhood','email','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialogRef: MatDialog, private api: ApiClientService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllClient()
  }

  getAllClient(){
    this.api.getClient().subscribe({ next:res => {

      this.dataSource= new MatTableDataSource(res.client);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort= this.sort;

      console.warn(res.client);

    }})
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  deleteClient(id : any){
    this.api.deleteClient(id).subscribe({next:res => {
      this.toastr.success('Suppression du  client reussi', 'Felicitation!',{
        timeOut: 2000
      });
      this.getAllClient();
      },
      error:() => {
        this.toastr.warning('Une erreur est survenue lors de la suppression ', 'Attention!',{
          timeOut: 2000
        });
        // alert("error while deleting client")
      }
    })
  }


  restoreClient(id:any){
    this.api.restoreClient(id).subscribe({next:res => {
      this.toastr.success('restoration du  client reussi', 'Felicitation!',{
        timeOut: 2000
      });
      this.getAllClient()
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
