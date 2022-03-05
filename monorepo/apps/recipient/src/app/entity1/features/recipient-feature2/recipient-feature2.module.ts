import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipientFeature2Component } from './recipient-feature2.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    RecipientFeature2Component
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
  ]
})
export class RecipientFeature2Module { }
