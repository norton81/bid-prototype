import {Injectable, Type} from '@angular/core';
import {RecipientFeatureCellCustomComponent} from "../features/recipient-feature-cell-custom/recipient-feature-cell-custom.component";
import {SharedFeatureSimpleColumnComponent, TableDescriptor} from "@monorepo/shared";

@Injectable({
  providedIn: 'root'
})
export class Entity1ColumnFeatureResolverService {
  getDynamicColumnFeatures(features: TableDescriptor[]) {
    return [  {
      cellComponent: RecipientFeatureCellCustomComponent,
      columnComponent: SharedFeatureSimpleColumnComponent,
      columnText: 'Recipient Column1',
      columnDef: 'column1',
      propertyPath: '_id',
    },...features.slice(1)];
  };
  getDisplayedColumns(): string[] {
    return ['column1', 'column2', 'column3', 'column4', 'column5'];
  };
}
