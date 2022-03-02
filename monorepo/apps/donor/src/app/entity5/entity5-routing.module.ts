import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { Entity5Component } from "./entity5.component";

const routes: Routes = [
  {
    path: '',
    component: Entity5Component
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Entity5RoutingModule { }
