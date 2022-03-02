import { AbstractControl } from "@angular/forms";
import { EventEmitter } from "@angular/core";

export interface IFeature {
    form: AbstractControl;
    bus: AbstractControl;
    model: any;
    changed: EventEmitter<any>;
}
