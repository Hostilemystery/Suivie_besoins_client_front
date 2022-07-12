import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GestionClientComponent } from './../gestion-client/gestion-client.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from '../app.component';
import { CountService } from './service/count.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isShown: boolean = false;
  countClient:any;
  countUser:any;
  countService:any;

  private daysArray = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  private date = new Date();
  public hour: any;
  public minute!: string;
  public second!: string;
  public ampm!: string;
  public day!: string;

  constructor(private http: HttpClient, private api: CountService ) { }

  ngOnInit(): void {
    // const headers = new HttpHeaders(
    //   'Authorization': 'Bearer '+localStorage.getItem('token')
    // });
    // this.http.get('http://127.0.0.1:8000/api/utilisateur',{headers: headers}).subscribe(
    //   result=> console.log(result)
    // )
    this.show()

    this.getAllClient();
    this.getAllUser();
    this.getAllService();

    setInterval(()=>{
      const date = new Date();
      this.updateDate(date);
    },1000);
    this.day= this.daysArray[this.date.getDay()];
   }


   getAllClient(){
    this.api.getClient().subscribe(res=>{
      this.countClient = res.client;
      console.warn(res.client);

    })
  }

  getAllUser(){
    this.api.getUser().subscribe(res=>{
      this.countUser = res.client;
      console.warn(res.client);

    })
  }

  getAllService(){
    this.api.getService().subscribe(res=>{
      this.countService = res.client;
      console.warn(res.client);

    })
  }


  private updateDate(date: Date){
    const hours = date.getHours();
    this.ampm = hours>=12? 'PM' : 'AM';
    this.hour = hours % 12;
    this.hour= this.hour ? this.hour : 12;
    this.hour = this.hour < 10 ? '0'+this.hour : this.hour;
    const minutes =date.getMinutes();
    this.minute = minutes <10?'0'+minutes : minutes.toString();
    const seconds= date.getSeconds();
    this.second= seconds<10?'0'+seconds:seconds.toString();
  }



  images =[
    {path:'../../assets/images/msg657925926-25437.jpg'},
    {path:'../../assets/images/msg657925926-25438.jpg' },
    {path:'../../assets/images/msg657925926-25439.jpg'},
    {path:'../../assets/images/msg657925926-25440.jpg'},
    {path:'../../assets/images/msg657925926-25441.jpg'},
    {path:'../../assets/images/msg657925926-25442.jpg' },
    {path:'../../assets/images/msg657925926-25443.jpg' },
    {path:'../../assets/images/msg657925926-25444.jpg' },
    {path:'../../assets/images/msg657925926-25445.jpg' }



  ];
  show(){
    const user = JSON.parse(localStorage.getItem('datas') || '{}').body.user.type_utilisateur_id;

    if(user==1){
     this.isShown= true;
     }
  }

}
