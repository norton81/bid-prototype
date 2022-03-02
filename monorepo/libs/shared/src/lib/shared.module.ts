import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from "./components/shared-components.module";
import { SharedFeaturesModule } from "./features/shared-features.module";

@NgModule({
  imports: [CommonModule, SharedComponentsModule, SharedFeaturesModule],
    exports: [SharedComponentsModule, SharedFeaturesModule]
})
export class SharedModule {}
