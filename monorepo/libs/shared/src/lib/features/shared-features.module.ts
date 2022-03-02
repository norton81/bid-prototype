import { NgModule } from '@angular/core';
import { SharedFeature1Module } from "./shared-feature1/shared-feature1.module";

@NgModule({
    declarations: [],
    imports: [
        SharedFeature1Module,
    ],
    exports: [SharedFeature1Module],
    providers: [],
})
export class SharedFeaturesModule {}
