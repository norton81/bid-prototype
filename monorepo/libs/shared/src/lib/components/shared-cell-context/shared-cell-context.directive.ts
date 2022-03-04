import {Directive, Injector, Input} from '@angular/core';
import {DYNAMIC_TABLE_CALLBACK_FN, DYNAMIC_TABLE_DESCRIPTOR, DYNAMIC_TABLE_ELEMENT} from "@monorepo/shared";

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
    this.injector = Injector.create({
      providers: [
        {provide: DYNAMIC_TABLE_ELEMENT, useValue: this.element},
        {provide: DYNAMIC_TABLE_DESCRIPTOR, useValue: this.descriptor},
        {provide: DYNAMIC_TABLE_CALLBACK_FN, useValue: this.holder.featureCallbackFn},
      ],
      parent: this.inj,
    });
    this.holder.currentInjector = this.injector;
  }
}
