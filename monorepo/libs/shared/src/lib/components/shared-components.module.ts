import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMenuComponent } from "./shared-menu/shared-menu.component";
import { MatTreeModule } from "@angular/material/tree";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    declarations: [SharedMenuComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatTreeModule,
        MatButtonModule,
    ],
    exports: [SharedMenuComponent],
    providers: [],
})
export class SharedComponentsModule {}
