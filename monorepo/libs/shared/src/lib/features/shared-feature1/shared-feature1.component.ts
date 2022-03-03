import {Component, Input, EventEmitter, Output, Optional, Inject} from '@angular/core';
import {IFeature} from "../../IFeature";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'shared-feature1',
  templateUrl: './shared-feature1.component.html',
  styleUrls: ['./shared-feature1.component.scss']
})
export class SharedFeature1Component {
  // @Input() form: FormGroup = new FormGroup({});
  // @Input() bus: FormGroup;
  //  @Input() model: any;
  // @Output() changed = new EventEmitter<any>();

  constructor(
      @Optional() @Inject('DYNAMIC_FORM') public form: FormGroup,
      @Optional() @Inject('DYNAMIC_FORM_CALLBACK') private callback: Function,
      @Optional() @Inject('DYNAMIC_FORM_MODEL') private model: Object,
      @Optional() @Inject('DYNAMIC_FORM_SYNC_BUS') public bus: FormGroup,
  ) {
    debugger
  }

  ngOnInit() {
    this.form?.addControl('field1', new FormControl(''));
    this.form?.addControl('field2', new FormControl(''));
  }
}
