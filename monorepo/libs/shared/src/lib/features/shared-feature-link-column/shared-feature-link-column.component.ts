import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import {
  DYNAMIC_TABLE_DESCRIPTOR,
  DYNAMIC_TABLE_ELEMENT,
  TableDescriptor
} from '@monorepo/shared';
import {
  ActivatedRoute,
  Router
} from '@angular/router';

@Component({
  selector: 'monorepo-shared-feature-link-column',
  templateUrl: './shared-feature-link-column.component.html',
  styleUrls: ['./shared-feature-link-column.component.scss']
})
export class SharedFeatureLinkColumnComponent implements OnInit {

  constructor(
      @Inject(DYNAMIC_TABLE_ELEMENT) public element: any,
      @Inject(DYNAMIC_TABLE_DESCRIPTOR) public descriptor: TableDescriptor,
      private router: Router,
      private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  click(
      element: any
  ) {
    this.router.navigate(['edit', element._id], {relativeTo: this.activatedRoute})
  }

}
