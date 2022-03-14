import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFeature2Component } from './shared-feature2.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [
    SharedFeature2Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  exports: []
})
export class SharedFeature2Module { }
