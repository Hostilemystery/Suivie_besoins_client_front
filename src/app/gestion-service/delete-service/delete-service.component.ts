import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-service',
  templateUrl: './delete-service.component.html',
  styleUrls: ['./delete-service.component.scss']
})
export class DeleteServiceComponent implements OnInit {

  constructor(
    private matDialogRef:MatDialogRef<DeleteServiceComponent>
  ) { }

  ngOnInit(): void {
  }

  onClose(){
    this.matDialogRef.close();
  }
  delete(){

    this.matDialogRef.close('del');
  }

}
