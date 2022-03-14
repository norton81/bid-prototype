import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedMenuNode } from '@monorepo/shared';
import { GlobalConfigService } from './services/global-config.service';

@Component({
  selector: 'monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'recipient';
  constructor(public configService: GlobalConfigService, private router: Router) {
  }

  navigate(node: SharedMenuNode) {
    this.router.navigate([node.rout])
  }
}
