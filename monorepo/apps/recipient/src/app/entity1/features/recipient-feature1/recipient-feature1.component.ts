import {
  Component, Inject, OnInit
} from '@angular/core';
import {
  FormControl, FormGroup, Validators
} from '@angular/forms';
import {
  DYNAMIC_FORM, DYNAMIC_FORM_CALLBACK, DYNAMIC_FORM_SYNC_BUS
} from '@monorepo/shared';

@Component({
  selector: 'monorepo-recipient-feature1',
  templateUrl: './recipient-feature1.component.html',
  styleUrls: ['./recipient-feature1.component.scss']
})
export class RecipientFeature1Component implements OnInit {
  constructor(
      @Inject(DYNAMIC_FORM) public form: FormGroup,
      @Inject(DYNAMIC_FORM_CALLBACK) private callback: Function,
      @Inject(DYNAMIC_FORM_SYNC_BUS) public bus: FormGroup,
  ) {
  }

  ngOnInit() {
    this.form?.removeControl('field5')
    this.form?.addControl('field5', new FormGroup({
      field7: new FormControl('', Validators.required),
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
