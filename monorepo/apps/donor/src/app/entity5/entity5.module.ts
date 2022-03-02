import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Entity5Component } from './entity5.component';
import { Entity5RoutingModule } from "./entity5-routing.module";



@NgModule({
  declarations: [
    Entity5Component
  ],
  imports: [
    CommonModule,
    Entity5RoutingModule
  ]
})
export class Entity5Module { }
