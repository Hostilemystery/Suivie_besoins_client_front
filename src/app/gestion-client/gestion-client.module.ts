import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjouterClientComponent } from './ajouter-client/ajouter-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import { UpdateClientComponent } from './update-client/update-client.component';
import { NgxPrintModule } from 'ngx-print';
import { DeleteClientComponent } from './delete-client/delete-client.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [
    AjouterClientComponent,
    UpdateClientComponent,
    DeleteClientComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    NgxPrintModule,
    PdfViewerModule
  ],
  exports: [
    AjouterClientComponent
  ]
})
export class GestionClientModule { }
