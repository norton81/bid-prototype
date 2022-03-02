import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Entity1Component } from './entity1.component';
import { Entity1RoutingModule } from "./entity1-routing.module";


@NgModule({
  declarations: [
    Entity1Component
  ],
  imports: [
    CommonModule,
    Entity1RoutingModule,
  ]
})
export class Entity1Module { }
