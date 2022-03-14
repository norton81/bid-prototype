import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Entity4Component } from './entity4.component';
import { Entity4RoutingModule } from './entity4-routing.module';



@NgModule({
  declarations: [
    Entity4Component
  ],
  imports: [
    CommonModule,
    Entity4RoutingModule,
  ]
})
export class Entity4Module { }
