import {Component, Input, EventEmitter, Output} from '@angular/core';
import {IFeature} from "../../IFeature";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'shared-feature1',
  templateUrl: './shared-feature1.component.html',
  styleUrls: ['./shared-feature1.component.scss']
})
export class SharedFeature1Component implements IFeature {
  @Input() form: FormGroup = new FormGroup({});
  @Input() bus: FormGroup;
  @Input() model: any;
  @Output() changed = new EventEmitter<any>();

  ngOnInit() {
    this.form?.addControl('field1', new FormControl(''));
    this.form?.addControl('field2', new FormControl(''));
  }
}
