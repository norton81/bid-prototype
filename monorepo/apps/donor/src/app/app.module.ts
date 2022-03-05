import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ENTITY1_COLUMN_FEATURE_RESOLVER, ENTITY1_FEATURE_RESOLVER, HOST_NAME, SharedModule} from "@monorepo/shared";
import { AppRoutingModule } from "./app.routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {Entity1FeaturesResolverService} from "./entity1/services/entity1-features-resolver.service";
import {Entity1ColumnFeatureResolverService} from "./entity1/services/entity1-column-feature-resolver.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {provide: ENTITY1_FEATURE_RESOLVER, useClass: Entity1FeaturesResolverService},
    {provide: ENTITY1_COLUMN_FEATURE_RESOLVER, useClass: Entity1ColumnFeatureResolverService},
    {provide: HOST_NAME, useValue: 'http://localhost:5001'},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
