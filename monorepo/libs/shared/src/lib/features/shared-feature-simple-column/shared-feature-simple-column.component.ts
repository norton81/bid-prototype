import {
  Component,
  Inject,
  OnInit} from '@angular/core';
import { TableDescriptor } from '../table-desriptor';
import { DYNAMIC_TABLE_DESCRIPTOR, DYNAMIC_TABLE_ELEMENT } from '../../constant';

@Component({
  selector: 'monorepo-shared-feature-simple-column',
  templateUrl: './shared-feature-simple-column.component.html',
  styleUrls: ['./shared-feature-simple-column.component.scss']
})
export class SharedFeatureSimpleColumnComponent implements OnInit {
  constructor(
      @Inject(DYNAMIC_TABLE_ELEMENT) public element: any,
      @Inject(DYNAMIC_TABLE_DESCRIPTOR) public descriptor: TableDescriptor,
  ) { }

  ngOnInit(): void {
  }

}
