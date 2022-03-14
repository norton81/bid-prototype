import { Type } from '@angular/core';

export interface TableDescriptor {
    cellComponent: Type<any>;
    columnComponent: Type<any>;
    columnText: string;
    columnDef: string;
    propertyPath: string;
}
