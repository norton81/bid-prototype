import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {IFeature} from "@monorepo/shared";

@Component({
  selector: 'monorepo-shared-feature2',
  templateUrl: './shared-feature2.component.html',
  styleUrls: ['./shared-feature2.component.scss']
})
export class SharedFeature2Component implements OnInit, IFeature {
  @Input() form: FormGroup = new FormGroup({});
  @Input() bus: FormGroup;
  @Input() model: any;
  @Output() changed = new EventEmitter<any>();

  ngOnInit() {
    this.form?.addControl('group', new FormGroup({
      field1: new FormControl('Field1'),
      field2: new FormControl('Field2'),
      field3: new FormControl(true),
    }));
  }
}
