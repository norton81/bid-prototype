import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFeature1Component } from './shared-feature1.component';
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    SharedFeature1Component,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  exports: []
})
export class SharedFeature1Module { }
