import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { AjouterClientComponent } from './ajouter-client/ajouter-client.component';
import { DeleteClientComponent } from './delete-client/delete-client.component';
import { gestionClient } from './gestion-client.model';
import { ApiServices } from './service/apiClient.service';
import { UpdateClientComponent } from './update-client/update-client.component';


@Component({
  selector: 'app-gestion-client',
  templateUrl: './gestion-client.component.html',
  styleUrls: ['./gestion-client.component.scss']
})
export class GestionClientComponent implements OnInit {

  gestionClientObj: gestionClient = new gestionClient();
  clientData!: any
  displayedColumns: string[] = ['id', 'name', 'email', 'Service_Name', 'action'];
  dataSource!: MatTableDataSource<any>;



  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialogRef: MatDialog, private api: ApiServices, private _snackBar: MatSnackBar, private toastr: ToastrService) { }




  ngOnInit(): void {
    this.getAllClient();
  }
  openDialog() {
    this.dialogRef.open(AjouterClientComponent).afterClosed().subscribe(val => {
      if (val === 'add') {
        this.toastr.success('Enregistrement du nouveau client reussi', 'Felicitation!', {
          timeOut: 2000
        });
        this.getAllClient();
      }
    })
  }

  getAllClient() {
    this.api.getClient().subscribe({
      next: res => {

        this.dataSource = new MatTableDataSource(res.client);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        console.warn(res.client);

      }
    })
  }

  getprint() {
    this.api.getPrin().subscribe({
      next: res => {

      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  UpdateClient(row: any) {
    this.dialogRef.open(UpdateClientComponent, {
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'update') {
        this.toastr.success('Modification du  client reussi', 'Felicitation!', {
          timeOut: 2000
        });
        this.getAllClient();
      }
    });
  }


  deleteClient(id: any) {
    this.dialogRef.open(DeleteClientComponent).afterClosed().subscribe(val => {
      if (val === 'del') {
        this.api.deleteClient(id).subscribe({
          next: res => {
            this.getAllClient();
            this.toastr.success('Suppression du  client reussi', 'Felicitation!', {
              timeOut: 2000
            });
          },
          error: () => {
            this.toastr.warning('Une erreur est survenue lors de la suppression ', 'Attention!', {
              timeOut: 2000
            });
            // alert("error while deleting client")
          }
        })

        this.getAllClient();
      }
    })
    // this.api.deleteClient(id).subscribe({next:res => {
    //   this.getAllClient();
    //   },
    //   error:() => {
    //     alert("error while deleting client")
    //   }
    // })
  }
}
