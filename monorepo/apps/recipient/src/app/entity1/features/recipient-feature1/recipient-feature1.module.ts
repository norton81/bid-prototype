import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipientFeature1Component } from './recipient-feature1.component';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";



@NgModule({
  declarations: [
    RecipientFeature1Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
  ]
})
export class RecipientFeature1Module { }
