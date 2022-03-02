import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipientFeature1Component } from './recipient-feature1.component';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    RecipientFeature1Component
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
  ]
})
export class RecipientFeature1Module { }
