import { DetailClientComponent } from './detail-client/detail-client.component';
import { GestionClientComponent } from './gestion-client/gestion-client.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GestionUtilisateurComponent } from './gestion-utilisateur/gestion-utilisateur.component';
import { DashboardComponent } from './navigation/dashboard/dashboard.component';
import { GestionServiceComponent } from './gestion-service/gestion-service.component';
import { CorbeilleUserComponent } from './corbeille-user/corbeille-user.component';
import { CorbeilleClientComponent } from './corbeille-client/corbeille-client.component';
import { ListeClientServiceComponent } from './liste-client-service/liste-client-service.component';
import { GestionActiviteComponent } from './gestion-activite/gestion-activite.component';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { DashboardUserComponent } from './navigation/dashboard-user/dashboard-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent , canActivate:[AuthGuardGuard],
  children: [
    {path:'Gestion-client', component:GestionClientComponent},
    {path:'Gestion-activite', component:GestionActiviteComponent},
    {path:'Gestion-utilisateur', component: GestionUtilisateurComponent},
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'Gestion-service', component: GestionServiceComponent },
    { path: 'corbeille', component: CorbeilleUserComponent },
    { path: 'corbeilleClient', component: CorbeilleClientComponent },
    { path: 'liste/:id', component: ListeClientServiceComponent, },
    { path: 'client/:id', component: DetailClientComponent,  },
  ]
  },
  {path:'dashboarduser', component: DashboardUserComponent , canActivate:[AuthGuardGuard],
  children: [
    {path:'Gestion-client', component:GestionClientComponent},
    {path:'Gestion-activite', component:GestionActiviteComponent},
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'Gestion-service', component: GestionServiceComponent },
    { path: 'corbeilleClient', component: CorbeilleClientComponent },
    { path: 'liste/:id', component: ListeClientServiceComponent, },
    { path: 'client/:id', component: DetailClientComponent,  },
  ]
  },
];


// {path:'login', component: LoginComponent,canActivate: [AuthguardService]},
// {path:'dashboard', component: DashboardComponent,canActivate: [AuthGuardService] ,
// const routes: Routes = [
//   {
//     path: '/',
//     loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
//   },
//   {
//     path: 'login',
//     loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 export const routingComponents = [
  LoginComponent,
  DashboardComponent,
  GestionClientComponent,
  GestionUtilisateurComponent
 ]
