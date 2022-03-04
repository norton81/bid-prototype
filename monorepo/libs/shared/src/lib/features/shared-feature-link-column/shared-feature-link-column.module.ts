import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedFeatureLinkColumnComponent} from "./shared-feature-link-column.component";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [SharedFeatureLinkColumnComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
  ],
  exports: []
})
export class SharedFeatureLinkColumnModule { }
