import {Component, EventEmitter, Inject, Input, OnInit, Optional, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {IFeature} from "@monorepo/shared";

@Component({
  selector: 'monorepo-shared-feature2',
  templateUrl: './shared-feature2.component.html',
  styleUrls: ['./shared-feature2.component.scss']
})
export class SharedFeature2Component implements OnInit {
  constructor(
      @Optional() @Inject('DYNAMIC_FORM') public form: FormGroup,
      @Optional() @Inject('DYNAMIC_FORM_CALLBACK') private callback: Function,
      @Optional() @Inject('DYNAMIC_FORM_MODEL') private model: Object,
      @Optional() @Inject('DYNAMIC_FORM_SYNC_BUS') public bus: FormGroup,
  ) {
    debugger
  }

  ngOnInit() {
    this.form?.addControl('group', new FormGroup({
      field1: new FormControl('Field1'),
      field2: new FormControl('Field2'),
      field3: new FormControl(true),
    }));
  }
}
