import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ChartsModule, WavesModule } from 'angular-bootstrap-md';
import { ButtonsModule, InputsModule } from 'angular-bootstrap-md';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { CarouselModule,  } from 'angular-bootstrap-md'


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
]
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartsModule,
    WavesModule,
    ButtonsModule,
    InputsModule,
    IvyCarouselModule,
    CarouselModule
  ]
})
export class HomeModule { }
