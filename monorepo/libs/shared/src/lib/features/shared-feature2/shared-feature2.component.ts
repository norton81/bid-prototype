import {Component, Inject, OnInit, Optional} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {
  DYNAMIC_FORM,
  DYNAMIC_FORM_CALLBACK,
  DYNAMIC_FORM_SYNC_BUS,
} from "@monorepo/shared";

@Component({
  selector: 'monorepo-shared-feature2',
  templateUrl: './shared-feature2.component.html',
  styleUrls: ['./shared-feature2.component.scss']
})
export class SharedFeature2Component implements OnInit {
  constructor(
      @Optional() @Inject(DYNAMIC_FORM) public form: FormGroup,
      @Optional() @Inject(DYNAMIC_FORM_CALLBACK) private callback: Function,
      @Optional() @Inject(DYNAMIC_FORM_SYNC_BUS) public bus: FormGroup,
  ) {
  }

  ngOnInit() {
    this.form?.addControl('field5', new FormGroup({
      field6: new FormControl(''),
      field7: new FormControl(''),
      field8: new FormControl(true),
    }));
    this.bus.get('model')?.valueChanges.subscribe( (model)=> {
      if(!model) {
        return;
      }
      this.form?.get('field5')?.patchValue(
          model.field5
      )
    });
  }
}
