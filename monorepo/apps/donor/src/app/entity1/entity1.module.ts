import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Entity1Component } from './entity1.component';
import { Entity1RoutingModule } from "./entity1-routing.module";
import { Entity1FormComponent } from './components/form/entity1-form.component';
import { Entity1ListComponent } from './components/list/entity1-list.component';
import { RouterModule } from "@angular/router";
import { SharedModule } from "@monorepo/shared";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    Entity1Component,
    Entity1FormComponent,
    Entity1ListComponent,
  ],
  imports: [
    CommonModule,
    Entity1RoutingModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
  ]
})
export class Entity1Module { }
