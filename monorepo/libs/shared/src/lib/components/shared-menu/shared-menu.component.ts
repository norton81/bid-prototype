import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import { MatTreeNestedDataSource } from "@angular/material/tree";
import { NestedTreeControl } from '@angular/cdk/tree';
import { SharedMenuNode } from './shared-menu-node.interface';

@Component({
  selector: 'shared-menu',
  templateUrl: './shared-menu.component.html',
  styleUrls: ['./shared-menu.component.scss']
})
export class SharedMenuComponent implements OnInit {

  @Input() nodes: SharedMenuNode[] = [];
  @Output() navigate: EventEmitter<SharedMenuNode> = new EventEmitter();

  ngOnInit() {
    this.dataSource.data = this.nodes;
  }

  dataSource = new MatTreeNestedDataSource<SharedMenuNode>();
  treeControl = new NestedTreeControl<SharedMenuNode>(node => node.children);
  hasChild = (_: number, node: SharedMenuNode) => !!node.children && node.children.length > 0;
}
