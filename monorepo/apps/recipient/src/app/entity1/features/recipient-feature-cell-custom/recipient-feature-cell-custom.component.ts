import {Component, Inject, OnInit, Optional} from '@angular/core';
import {DYNAMIC_TABLE_DESCRIPTOR, DYNAMIC_TABLE_ELEMENT, TableDescriptor} from "@monorepo/shared";


@Component({
  selector: 'monorepo-shared-feature-simple-cell',
  templateUrl: './recipient-feature-cell-custom.component.html',
  styleUrls: ['./recipient-feature-cell-custom.component.scss']
})
export class RecipientFeatureCellCustomComponent implements OnInit {

  constructor(
      @Optional() @Inject(DYNAMIC_TABLE_ELEMENT) public element: any,
      @Optional() @Inject(DYNAMIC_TABLE_DESCRIPTOR) public descriptor: TableDescriptor,
  ) { }

  ngOnInit(): void {
  }
}
