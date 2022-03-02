import { NgModule } from '@angular/core';
import { SharedFeature1Module } from "./shared-feature1/shared-feature1.module";
import {SharedFeature2Module} from "./shared-feature2/shared-feature2.module";
import {SharedFeature3Module} from "./shared-feature3/shared-feature3.module";

@NgModule({
    declarations: [],
    imports: [
        SharedFeature1Module, SharedFeature2Module, SharedFeature3Module
    ],
    exports: [SharedFeature1Module, SharedFeature2Module, SharedFeature3Module],
    providers: [],
})
export class SharedFeaturesModule {}
