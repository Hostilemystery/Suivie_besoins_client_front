import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjouterServiceComponent } from './ajouter-service/ajouter-service.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { DeleteServiceComponent } from './delete-service/delete-service.component';

@NgModule({
  declarations: [
    AjouterServiceComponent,
    UpdateServiceComponent,
    DeleteServiceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
  ]
})
export class GestionServiceModule { }
