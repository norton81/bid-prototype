import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ENTITY1_COLUMN_FEATURE_RESOLVER, ENTITY1_FEATURE_RESOLVER, HOST_NAME, SharedModule} from "@monorepo/shared";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app.routing.module";
import {Entity1FeatureResolverService} from "./entity1/services/entity1-feature-resolver.service";
import {RecipientFeature1Module} from "./entity1/features/recipient-feature1/recipient-feature1.module";
import {Entity1ColumnFeatureResolverService} from "./entity1/services/entity1-column-feature-resolver.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    RecipientFeature1Module,
    HttpClientModule,
  ],
  providers: [
    {provide: ENTITY1_FEATURE_RESOLVER, useClass: Entity1FeatureResolverService},
    {provide: ENTITY1_COLUMN_FEATURE_RESOLVER, useClass: Entity1ColumnFeatureResolverService},
    {provide: HOST_NAME, useValue: 'http://localhost:3001'},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
