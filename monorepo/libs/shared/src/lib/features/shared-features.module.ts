import { NgModule } from '@angular/core';
import { SharedFeature1Module } from "./shared-feature1/shared-feature1.module";
import {SharedFeature2Module} from "./shared-feature2/shared-feature2.module";
import {SharedFeature3Module} from "./shared-feature3/shared-feature3.module";
import {SharedFeatureLinkColumnModule} from "./shared-feature-link-column/shared-feature-link-column.module";
import {SharedFeatureDeleteColumnModule} from "./shared-feature-delete-column/shared-feature-delete-column.module";
import {SharedFeatureSimpleCellModule} from "./shared-feature-simple-cell/shared-feature-simple-cell.module";
import {SharedFeatureSimpleColumnModule} from "./shared-feature-simple-column/shared-feature-simple-column.module";

@NgModule({
    declarations: [],
    imports: [
        SharedFeature1Module,
        SharedFeature2Module,
        SharedFeature3Module,
        SharedFeatureLinkColumnModule,
        SharedFeatureDeleteColumnModule,
        SharedFeatureSimpleCellModule,
        SharedFeatureSimpleColumnModule,
    ],
    providers: [],
})
export class SharedFeaturesModule {}
