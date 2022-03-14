import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'monorepo-entity1',
  templateUrl: './entity1.component.html',
  styleUrls: ['./entity1.component.scss']
})
export class Entity1Component implements OnInit {

  constructor(
      private store: Store,
  ) { }

  ngOnInit(): void {
    this.store.subscribe((model)=> {
      console.log(model);
    })
  }
}
