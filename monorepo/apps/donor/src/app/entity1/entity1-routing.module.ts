import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Entity1Component } from "./entity1.component";
import { RouterModule, Routes } from "@angular/router";
import { Entity1ListComponent } from "./components/entity1-list.component";
import {Entity1FormComponent} from "./components/entity1-form.component";

const routes: Routes = [
  {
    path: '',
    component: Entity1Component,
    children: [
      {
        path: '',
        component: Entity1ListComponent,
      },
      {
        path: ':mode',
        component: Entity1FormComponent,
      },
    ]
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
