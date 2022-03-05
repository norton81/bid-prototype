import {Component, Input, EventEmitter, Output, Optional, Inject} from '@angular/core';
import {IFeature} from "../../IFeature";
import {FormControl, FormGroup} from "@angular/forms";
import {DYNAMIC_FORM, DYNAMIC_FORM_CALLBACK, DYNAMIC_FORM_MODEL, DYNAMIC_FORM_SYNC_BUS} from "../../constant";

@Component({
  selector: 'shared-feature1',
  templateUrl: './shared-feature1.component.html',
  styleUrls: ['./shared-feature1.component.scss']
})
export class SharedFeature1Component {
  constructor(
      @Optional() @Inject(DYNAMIC_FORM) public form: FormGroup,
      @Optional() @Inject(DYNAMIC_FORM_CALLBACK) private callback: Function,
      @Optional() @Inject(DYNAMIC_FORM_SYNC_BUS) public bus: FormGroup,
  ) {
  }

  ngOnInit() {
    this.form?.addControl('field2', new FormControl(''));
    this.form?.addControl('field3', new FormControl(''));
    this.form?.addControl('field4', new FormControl(''));
    this.bus.get('model')?.valueChanges.subscribe( (model)=> {
      this.form?.get('field2')?.patchValue(model.field2);
      this.form?.get('field3')?.patchValue(model.field3);
      this.form?.get('field4')?.patchValue(model.field4);
    });
  }
}
