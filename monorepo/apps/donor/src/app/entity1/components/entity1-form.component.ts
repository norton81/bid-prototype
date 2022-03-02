import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'monorepo-entity1-form',
  templateUrl: './entity1-form.component.html',
  styleUrls: ['./entity1-form.component.scss']
})
export class Entity1FormComponent implements OnInit {

  constructor(
      public route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
  }

}
