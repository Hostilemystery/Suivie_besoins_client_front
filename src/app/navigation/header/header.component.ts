import { Component,EventEmitter, Input, OnInit,Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuPositionY } from '@angular/material/menu';

import {MegaMenuItem,MenuItem, PrimeIcons} from 'primeng/api';
import { TokenService } from 'src/app/login/services/token.service';
import { MailComponent } from 'src/app/mail/mail.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  @Input()
  items!: MegaMenuItem[];
  tokens = this.token.getToken();
yPosition!: MenuPositionY
  constructor(private dialogRef: MatDialog,private token: TokenService) { }

  ngOnInit(): void {
    setInterval(()=>{
      const date = new Date();
      this.updateDate(date);
    },1000);
    this.day= this.daysArray[this.date.getDay()];
  }

     user:any = JSON.parse(localStorage.getItem('datas') || '{}').body.user.name;


  openDialog(){
    this.dialogRef.open(MailComponent).afterClosed().subscribe(val=>{

    })
  }

toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
  logout(){
    this.token.revokeToken(this.tokens);
    // localStorage.removeItem('datas');
    window.location.reload();
  }
  reloadPage(): void {
    window.location.reload();
  }

  private daysArray = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  private date = new Date();
  public hour: any;
  public minute!: string;
  public second!: string;
  public ampm!: string;
  public day!: string;


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

}
