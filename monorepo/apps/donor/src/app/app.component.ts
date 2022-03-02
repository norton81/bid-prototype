import { Component } from '@angular/core';
import { NestedTreeControl } from "@angular/cdk/tree";
import {MatTreeNestedDataSource} from "@angular/material/tree";

interface Node {
  name: string;
  children?: Node[];
}

const TREE_DATA: Node[] = [
  {
    name: 'Fruit',
    children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        /*children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],*/
      },
      {
        name: 'Orange',
        /*children: [{name: 'Pumpkins'}, {name: 'Carrots'}],*/
      },
    ],
  },
];

@Component({
  selector: 'monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    this.dataSource.data = TREE_DATA;
  }
  title = 'donor';
  dataSource = new MatTreeNestedDataSource<Node>();
  treeControl = new NestedTreeControl<Node>(node => node.children);
  hasChild = (_: number, node: Node) => !!node.children && node.children.length > 0;
}
