import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Entity1Component } from "./entity1.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: Entity1Component
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class Entity1RoutingModule { }
