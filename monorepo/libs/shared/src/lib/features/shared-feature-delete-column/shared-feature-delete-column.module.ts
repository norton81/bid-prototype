import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFeatureDeleteColumnComponent } from './shared-feature-delete-column.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    SharedFeatureDeleteColumnComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
  ],
  exports: []
})
export class SharedFeatureDeleteColumnModule { }
