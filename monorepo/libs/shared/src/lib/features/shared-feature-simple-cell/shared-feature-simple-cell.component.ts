import {Component, Inject, OnInit, Optional} from '@angular/core';
import {DYNAMIC_TABLE_DESCRIPTOR, DYNAMIC_TABLE_ELEMENT} from "../../constant";
import {TableDescriptor} from "../table-desriptor";


@Component({
  selector: 'monorepo-shared-feature-simple-cell',
  templateUrl: './shared-feature-simple-cell.component.html',
  styleUrls: ['./shared-feature-simple-cell.component.scss']
})
export class SharedFeatureSimpleCellComponent implements OnInit {

  constructor(
      @Inject(DYNAMIC_TABLE_ELEMENT) public element: any,
      @Inject(DYNAMIC_TABLE_DESCRIPTOR) public descriptor: TableDescriptor,
  ) { }

  ngOnInit(): void {
  }

}
