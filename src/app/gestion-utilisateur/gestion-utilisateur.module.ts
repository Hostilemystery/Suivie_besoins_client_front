import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjouterUtilisateurComponent } from './ajouter-utilisateur/ajouter-utilisateur.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { ToastrModule } from 'ngx-toastr';
import { UpdateUtilisateurComponent } from './update-utilisateur/update-utilisateur.component';
import { DeleteUtilisateurComponent } from './delete-utilisateur/delete-utilisateur.component';



@NgModule({
  declarations: [
    AjouterUtilisateurComponent,
    UpdateUtilisateurComponent,
    DeleteUtilisateurComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSelectModule,
    ToastrModule.forRoot()
  ],
})
export class GestionUtilisateurModule { }
