import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { Entity4Component } from "./entity4.component";

const routes: Routes = [
  {
    path: '',
    component: Entity4Component
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Entity4RoutingModule { }
