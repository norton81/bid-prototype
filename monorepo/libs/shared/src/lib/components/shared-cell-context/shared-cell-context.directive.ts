import {Directive, Injector, Input} from '@angular/core';
import {DYNAMIC_TABLE_DESCRIPTOR, DYNAMIC_TABLE_ELEMENT} from "@monorepo/shared";

@Directive({
  selector: '[sharedCellContext]',
  exportAs: 'sharedCellContext'
})
export class SharedCellContextDirective {
  @Input() descriptor: any;
  @Input() element: any;
  @Input() holder: any;
  injector: Injector;

  constructor(
      private inj: Injector,
  ) {

  }

  ngOnInit() {
    debugger
    this.injector = Injector.create({
      providers: [
        {provide: DYNAMIC_TABLE_ELEMENT, useValue: this.element},
        {provide: DYNAMIC_TABLE_DESCRIPTOR, useValue: this.descriptor},
      ],
      parent: this.inj,
    });
    this.holder.currentInjector = this.injector;
  }
}
