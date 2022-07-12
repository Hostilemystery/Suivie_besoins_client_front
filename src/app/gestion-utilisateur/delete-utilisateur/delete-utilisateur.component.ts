import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-utilisateur',
  templateUrl: './delete-utilisateur.component.html',
  styleUrls: ['./delete-utilisateur.component.scss']
})
export class DeleteUtilisateurComponent implements OnInit {

  constructor(
    private matDialogRef:MatDialogRef<DeleteUtilisateurComponent>
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
