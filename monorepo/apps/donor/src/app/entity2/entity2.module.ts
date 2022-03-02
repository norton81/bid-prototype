import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Entity2Component } from './entity2.component';
import { Entity2RoutingModule } from "./entity2-routing.module";



@NgModule({
  declarations: [
    Entity2Component
  ],
  imports: [
    CommonModule,
    Entity2RoutingModule
  ]
})
export class Entity2Module { }
