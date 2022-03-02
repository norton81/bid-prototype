import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMenuComponent } from "./shared-menu/shared-menu.component";
import { MatTreeModule } from "@angular/material/tree";
import { MatButtonModule } from "@angular/material/button";
import { SharedHeaderComponent } from "./shared-header/shared-header.component";
import { MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
    declarations: [SharedMenuComponent, SharedHeaderComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatTreeModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
    ],
    exports: [SharedMenuComponent, SharedHeaderComponent],
    providers: [],
})
export class SharedComponentsModule {}
