import {Component, EventEmitter, Inject, Input, OnInit, Optional, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DYNAMIC_FORM, DYNAMIC_FORM_CALLBACK, DYNAMIC_FORM_SYNC_BUS} from "@monorepo/shared";

@Component({
  selector: 'monorepo-recipient-feature1',
  templateUrl: './recipient-feature1.component.html',
  styleUrls: ['./recipient-feature1.component.scss']
})
export class RecipientFeature1Component implements OnInit {
  constructor(
      @Optional() @Inject(DYNAMIC_FORM) public form: FormGroup,
      @Optional() @Inject(DYNAMIC_FORM_CALLBACK) private callback: Function,
      @Optional() @Inject(DYNAMIC_FORM_SYNC_BUS) public bus: FormGroup,
  ) {
  }

  ngOnInit() {
    debugger
    this.form?.removeControl('field5')
    this.form?.addControl('field5', new FormGroup({
      field7: new FormControl('', Validators.required),
      field8: new FormControl(true),
    }));
    this.bus.get('model')?.valueChanges.subscribe( (model)=> {
      debugger
      if(!model) {
        return;
      }
      this.form?.get('field5')?.patchValue(
          model.field5
      )
    });
  }
}
