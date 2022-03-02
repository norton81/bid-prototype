import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from "@monorepo/shared";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app.routing.module";
import {FeaturesResolverService} from "./services/features-resolver.service";
import {RecipientFeature1Module} from "./features/recipient-feature1/recipient-feature1.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    RecipientFeature1Module
  ],
  providers: [
    {provide: 'DEPENDENCY_RESOLVER', useClass: FeaturesResolverService},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
