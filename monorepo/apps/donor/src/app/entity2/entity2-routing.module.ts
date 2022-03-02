import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { Entity2Component } from "./entity2.component";

const routes: Routes = [
  {
    path: '',
    component: Entity2Component
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Entity2RoutingModule { }
