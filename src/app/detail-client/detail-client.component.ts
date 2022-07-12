import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServices } from '../gestion-client/service/apiClient.service';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.scss']
})
export class DetailClientComponent implements OnInit {

  id!: number;
  service!:ApiServices;
  clientData!: any
  constructor(
    private api:ApiServices,
    private router:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.getByID()
  }

  getByID(){
    this.api.getClients(this.id).subscribe({ next:res => {

      this.clientData = res.client

      console.warn(res.client);

    }})
  }
  getprint($id:number) {
    this.api.getPrint($id).subscribe({
      next: res => {

      }
    })
  }
}
