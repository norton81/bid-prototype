import {Component, Inject, OnInit} from '@angular/core';
import {DYNAMIC_FORM_SYNC_BUS} from "@monorepo/shared";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'monorepo-recipient-feature2',
  templateUrl: './recipient-feature2.component.html',
  styleUrls: ['./recipient-feature2.component.scss']
})
export class RecipientFeature2Component implements OnInit {

  constructor(
      @Inject(DYNAMIC_FORM_SYNC_BUS) public bus: FormGroup,
  ) { }

  get isDisabled() {
    return (this.bus?.get('submitDisabled') as FormControl);
  }

  ngOnInit(): void {
    this.bus.get('timer')?.patchValue('');
    const getDigit = (number: number) => {
      return number <= 9 ? `0${number}` : number;
    }

    setInterval( () => {
      const date = (new Date());
      const clock = `${getDigit(date.getHours())}:${getDigit(date.getMinutes())}:${getDigit(date.getSeconds())}`;
      this.bus.get('timer')?.patchValue(clock);
      debugger
    }, 1000);
  }

}
