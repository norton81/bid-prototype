import {EventEmitter, Component, Inject, Injector, OnInit, Optional, Output, Type} from '@angular/core';
import {
  ENTITY1_COLUMN_FEATURE_RESOLVER, HOST_NAME,
  SharedFeatureLinkColumnComponent,
  SharedFeatureSimpleCellComponent,
  TableDescriptor
} from "@monorepo/shared";
import {SharedFeatureSimpleColumnComponent} from "@monorepo/shared";
import {Entity1ColumnFeatureResolverService} from "../../services/entity1-column-feature-resolver.service";
import {GlobalConfigService} from "../../../services/global-config.service";
import {SharedFeatureDeleteColumnComponent} from "@monorepo/shared";
import {Entity1Service} from "../../services/entity1.service";
import {Store} from "@ngrx/store";
import {selectEntities} from "../../store/entity1.selector";
import {filter} from "rxjs";
import {DeleteEntity1Action, LoadEntities1Action} from "../../store/entity1.action";


const TABLE_DESCRIPTORS = [
  {
    cellComponent: SharedFeatureSimpleCellComponent,
    columnComponent: SharedFeatureSimpleColumnComponent,
    columnText: 'Column1',
    columnDef: 'column1',
    propertyPath: 'field1',
  },
  {
    cellComponent: SharedFeatureLinkColumnComponent,
    columnComponent: SharedFeatureSimpleColumnComponent,
    columnText: 'Column2',
    columnDef: 'column2',
    propertyPath: 'field2',
  },
  {
    cellComponent: SharedFeatureSimpleCellComponent,
    columnComponent: SharedFeatureSimpleColumnComponent,
    columnText: 'Column3',
    columnDef: 'column3',
    propertyPath: 'field3',
  },
  {
    cellComponent: SharedFeatureSimpleCellComponent,
    columnComponent: SharedFeatureSimpleColumnComponent,
    columnText: 'Column4',
    columnDef: 'column4',
    propertyPath: 'field4',
  },
  {
    cellComponent: SharedFeatureDeleteColumnComponent,
    columnComponent: SharedFeatureSimpleColumnComponent,
    columnText: 'Column5',
    columnDef: 'column5',
    propertyPath: 'field5',
  },
];

@Component({
  selector: 'monorepo-entity1-list',
  templateUrl: './entity1-list.component.html',
  styleUrls: ['./entity1-list.component.scss']
})
export class Entity1ListComponent implements OnInit {
  dataSource: any;
  dynamicComponents: TableDescriptor[];
  displayedColumns: string[];
  currentInjector: Injector;
  featureCallbackFn: Function;

  constructor(
      private injector: Injector,
      @Inject(ENTITY1_COLUMN_FEATURE_RESOLVER)
      private dynamicResolver: Entity1ColumnFeatureResolverService,
      public configService: GlobalConfigService,
      private entity1: Entity1Service,
      private store: Store,
  ) {
    this.dynamicComponents = this.dynamicResolver
        .getDynamicColumnFeatures(TABLE_DESCRIPTORS);
    this.displayedColumns = this.dynamicResolver
        .getDisplayedColumns();

    this.featureCallbackFn = (id: number) => {
      this.store.dispatch(new DeleteEntity1Action(id));
    }
  }

  ngOnInit() {
    this.store.dispatch(new LoadEntities1Action())
    this.store.select(selectEntities).pipe(filter(Boolean))
        .subscribe((model)=>{
          debugger
      this.dataSource = model;
    });
  }
}
