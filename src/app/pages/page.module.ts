// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modules Imports
import { PageRoutingModule } from './page-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HomeComponent
  ]
})

export class PageModule { }
