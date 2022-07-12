import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.scss']
})
export class DeleteClientComponent implements OnInit {

  constructor(
    private matDialogRef:MatDialogRef<DeleteClientComponent>
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
