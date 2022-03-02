import { NgModule } from '@angular/core';
import { SharedFeature1Module } from "./shared-feature1/shared-feature1.module";
import {SharedFeature2Module} from "./shared-feature2/shared-feature2.module";
import { SharedFeature3Component } from './shared-feature3/shared-feature3.component';

@NgModule({
    declarations: [],
    imports: [
        SharedFeature1Module, SharedFeature2Module
    ],
    exports: [SharedFeature1Module, SharedFeature2Module],
    providers: [],
})
export class SharedFeaturesModule {}
