import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Entity3Component } from './entity3.component';

const routes: Routes = [
  {
    path: '',
    component: Entity3Component
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Entity3RoutingModule { }
