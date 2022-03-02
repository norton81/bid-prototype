import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Entity1Component } from './entity1.component';
import { Entity1RoutingModule } from "./entity1-routing.module";
import { Entity1FormComponent } from './components/entity1-form.component';
import { Entity1ListComponent } from './components/entity1-list.component';
import { RouterModule } from "@angular/router";
import { SharedModule } from "@monorepo/shared";


@NgModule({
  declarations: [
    Entity1Component,
    Entity1FormComponent,
    Entity1ListComponent
  ],
  imports: [
    CommonModule,
    Entity1RoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class Entity1Module { }
