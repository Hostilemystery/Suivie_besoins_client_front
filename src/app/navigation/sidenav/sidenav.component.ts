import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  isShown: boolean = false;
  constructor() { }

  ngOnInit(): void {
  this.show()
}

show(){
   const user = JSON.parse(localStorage.getItem('datas') || '{}').body.user.type_utilisateur_id;

   if(user==1){
    this.isShown= true;
    }
 }
}
