import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Entity3Component } from './entity3.component';
import { Entity3RoutingModule } from './entity3-routing.module';



@NgModule({
  declarations: [
    Entity3Component
  ],
  imports: [
    CommonModule,
    Entity3RoutingModule,
  ]
})
export class Entity3Module { }
