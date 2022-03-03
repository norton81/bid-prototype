import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'shared-header',
  templateUrl: './shared-header.component.html',
  styleUrls: ['./shared-header.component.scss']
})
export class SharedHeaderComponent implements OnInit {

  @Input() appName: string = '';
  @Input() color: 'accent' | 'warn' | 'primary' = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

}
