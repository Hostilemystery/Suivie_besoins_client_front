

import { GestionUtilisateurModule } from './gestion-utilisateur/gestion-utilisateur.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AgendaService, DayService, MonthAgendaService, MonthService, RecurrenceEditorModule, ScheduleModule, TimelineMonthService, TimelineViewsService, WeekService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { HeaderComponent } from './navigation/header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MegaMenuModule } from 'primeng/megamenu';
import { GestionClientComponent } from './gestion-client/gestion-client.component';
import { MatDialogModule } from '@angular/material/dialog';
import { GestionClientModule } from './gestion-client/gestion-client.module';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './navigation/footer/footer.component';
import { GestionUtilisateurComponent } from './gestion-utilisateur/gestion-utilisateur.component';
import {MatSelectModule} from '@angular/material/select';
import { ToastrModule } from 'ngx-toastr';
import { GestionServiceComponent } from './gestion-service/gestion-service.component';
import { DashboardComponent } from './navigation/dashboard/dashboard.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { GestionServiceModule } from './gestion-service/gestion-service.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { CorbeilleUserComponent } from './corbeille-user/corbeille-user.component';
import { CorbeilleClientComponent } from './corbeille-client/corbeille-client.component';
import { ListeClientServiceComponent } from './liste-client-service/liste-client-service.component';
import { MailComponent } from './mail/mail.component';
import { GestionActiviteComponent } from './gestion-activite/gestion-activite.component';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { NgxPrintModule } from 'ngx-print';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ChartsModule, WavesModule } from 'angular-bootstrap-md';
import { DetailClientComponent } from './detail-client/detail-client.component';
import { DashboardUserComponent } from './navigation/dashboard-user/dashboard-user.component';
import { SideNavUserComponent } from './navigation/side-nav-user/side-nav-user.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    GestionClientComponent,
    FooterComponent,
    GestionUtilisateurComponent,
    GestionServiceComponent,
    DashboardComponent,
    CorbeilleUserComponent,
    CorbeilleClientComponent,
    ListeClientServiceComponent,
    MailComponent,
    GestionActiviteComponent,
    DetailClientComponent,
    DashboardUserComponent,
    SideNavUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GestionClientModule,
    BrowserAnimationsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MegaMenuModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    HomeModule,
    LoginModule,
    MatSelectModule,
    GestionUtilisateurModule,
    ToastrModule.forRoot(),
    DragDropModule,
    GestionServiceModule,
    FlexLayoutModule,
    MatCardModule,
    ScheduleModule,
    RecurrenceEditorModule,
    NgxPrintModule,
    MatSnackBarModule,
    ToastrModule.forRoot(),
    ChartsModule,
    WavesModule,

  ],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
