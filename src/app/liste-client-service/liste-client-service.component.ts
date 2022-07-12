import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServices } from '../gestion-client/service/apiClient.service';
import { ServiceApiService } from '../gestion-service/service/service-api.service';

@Component({
  selector: 'app-liste-client-service',
  templateUrl: './liste-client-service.component.html',
  styleUrls: ['./liste-client-service.component.scss']
})
export class ListeClientServiceComponent implements OnInit {

  id!: number;
  service!:ServiceApiService;
  clientData!: any
  displayedColumns: string[] = ['id', 'name', 'number','email','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router:ActivatedRoute, private route : Router, private api : ServiceApiService, private ppi: ApiServices) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.getByID()
  }



  getByID(){
    this.api.getClient(this.id).subscribe({ next:res => {

      this.dataSource= new MatTableDataSource(res.service);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort= this.sort;

      console.warn(res.service);

    }})
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getprint($id:number) {
    this.ppi.Print($id).subscribe({
      next: res => {

      }
    })
  }
}
