import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'monorepo-recipient-feature1',
  templateUrl: './recipient-feature1.component.html',
  styleUrls: ['./recipient-feature1.component.scss']
})
export class RecipientFeature1Component implements OnInit {
  @Input() form: FormGroup = new FormGroup({});
  @Input() bus: FormGroup;
  @Input() model: any;
  @Output() changed = new EventEmitter<any>();

  ngOnInit() {
    this.form?.addControl('field1', new FormControl(''));
    this.form?.addControl('field2', new FormControl(''));
  }
}
