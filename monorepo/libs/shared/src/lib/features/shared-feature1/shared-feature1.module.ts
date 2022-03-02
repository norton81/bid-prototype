import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFeature1Component } from './shared-feature1.component';
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";



@NgModule({
  declarations: [
    SharedFeature1Component,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  exports: [SharedFeature1Component]
})
export class SharedFeature1Module { }
