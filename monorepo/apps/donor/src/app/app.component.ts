import { Component } from '@angular/core';
import { GlobalConfigService } from "./services/global-config.service";
import { Router } from "@angular/router";
import { SharedMenuNode } from "@monorepo/shared";

@Component({
  selector: 'monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'donor';
  constructor(public configService: GlobalConfigService, private router: Router) {
  }

  navigate(node: SharedMenuNode) {
    debugger
    this.router.navigate([node.rout])
  }
}
