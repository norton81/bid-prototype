import {Component, Injector, OnInit, Type} from '@angular/core';
import {SharedFeatureSimpleCellComponent} from "@monorepo/shared";
import {SharedFeatureSimpleColumnComponent} from "@monorepo/shared";
import {DYNAMIC_TABLE_DESCRIPTOR, DYNAMIC_TABLE_ELEMENT} from "@monorepo/shared";

export interface TableDescriptor {
  cellComponent: Type<any>;
  columnComponent: Type<any>;
  columnText: string;
  columnDef: string;
  propertyPath: string;
}

const ELEMENT_DATA: any[] = [
  {field1: 1, field2: 'Hydrogen', field3: 1.0079, field4: 'H'},
  {field1: 2, field2: 'Helium', field3: 4.0026, field4: 'He'},
  {field1: 3, field2: 'Lithium', field3: 6.941, field4: 'Li'},
  {field1: 4, field2: 'Beryllium', field3: 9.0122, field4: 'Be'},
  {field1: 5, field2: 'Boron', field3: 10.811, field4: 'B'},
  {field1: 6, field2: 'Carbon', field3: 12.0107, field4: 'C'},
  {field1: 7, field2: 'Nitrogen', field3: 14.0067, field4: 'N'},
  {field1: 8, field2: 'Oxygen', field3: 15.9994, field4: 'O'},
  {field1: 9, field2: 'Fluorine', field3: 18.9984, field4: 'F'},
  {field1: 10, field2: 'Neon', field3: 20.1797, field4: 'Ne'},
];

@Component({
  selector: 'monorepo-entity1-list',
  templateUrl: './entity1-list.component.html',
  styleUrls: ['./entity1-list.component.scss']
})
export class Entity1ListComponent implements OnInit {
  displayedColumns: string[] = ['column1', 'column2', 'column3', 'column4'];
  dataSource = ELEMENT_DATA;

  dynamicComponents: TableDescriptor[] = [
      {
        cellComponent: SharedFeatureSimpleCellComponent,
        columnComponent: SharedFeatureSimpleColumnComponent,
        columnText: 'Column1',
        columnDef: 'column1',
        propertyPath: 'field1',
      },
    {
      cellComponent: SharedFeatureSimpleCellComponent,
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
  ];
  dynamicInjector: Injector;

  constructor(
      private injector: Injector,
  ) {

  }

  getInjector(descriptor: TableDescriptor, element: any) {
    return Injector.create({
      providers: [
        {provide: DYNAMIC_TABLE_ELEMENT, useValue: element},
        {provide: DYNAMIC_TABLE_DESCRIPTOR, useValue: descriptor},
      ],
      parent: this.injector,
    });

  }

  ngOnInit(): void {
  }

}
