import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {SharedFeature3Component} from "./shared-feature3.component";

@NgModule({
  declarations: [
    SharedFeature3Component
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
  ],
  exports: [SharedFeature3Component]
})
export class SharedFeature3Module { }
