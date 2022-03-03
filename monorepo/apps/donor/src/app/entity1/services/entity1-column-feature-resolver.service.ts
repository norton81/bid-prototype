import {Injectable, Type} from '@angular/core';
import {TableDescriptor} from "@monorepo/shared";

@Injectable({
  providedIn: 'root'
})
export class Entity1ColumnFeatureResolverService {
  getDynamicColumnFeatures(features: TableDescriptor[]) {
    return features;
  };
  getDisplayedColumns(): string[] {
    return ['column1', 'column2', 'column3', 'column4'];
  };
}
