import { NgModule } from '@angular/core';
import { SharedMenuComponent } from "./shared-menu/shared-menu.component";
import { MatTreeModule } from "@angular/material/tree";
import { MatButtonModule } from "@angular/material/button";
import { SharedHeaderComponent } from "./shared-header/shared-header.component";
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";
import { SharedCellContextDirective } from './shared-cell-context/shared-cell-context.directive';


@NgModule({
    declarations: [SharedMenuComponent, SharedHeaderComponent, SharedCellContextDirective],
    imports: [
        CommonModule,
        MatTreeModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
    ],
    exports: [SharedMenuComponent, SharedHeaderComponent, SharedCellContextDirective],
    providers: [],
})
export class SharedComponentsModule {}
