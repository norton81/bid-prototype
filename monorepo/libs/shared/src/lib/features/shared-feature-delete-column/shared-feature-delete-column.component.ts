import {Component, Inject, OnInit} from '@angular/core';
import {
  DYNAMIC_TABLE_CALLBACK_FN,
  DYNAMIC_TABLE_DESCRIPTOR,
  DYNAMIC_TABLE_ELEMENT,
  TableDescriptor
} from "@monorepo/shared";

@Component({
  selector: 'monorepo-shared-feature-delete-column',
  templateUrl: './shared-feature-delete-column.component.html',
  styleUrls: ['./shared-feature-delete-column.component.scss']
})
export class SharedFeatureDeleteColumnComponent implements OnInit {

  constructor(
      @Inject(DYNAMIC_TABLE_ELEMENT) public element: any,
      @Inject(DYNAMIC_TABLE_DESCRIPTOR) public descriptor: TableDescriptor,
      @Inject(DYNAMIC_TABLE_CALLBACK_FN) public callbackFn: Function,
  ) { }

  ngOnInit(): void {

  }

  delete() {
    this.callbackFn(this.element._id);
  }

}
