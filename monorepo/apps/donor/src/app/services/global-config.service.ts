import { Injectable } from '@angular/core';
import { MENU_DATA } from "./menu";

@Injectable({
  providedIn: 'root'
})
export class GlobalConfigService {
  get config() {
    return {
      menu: {
        nodes: MENU_DATA
      },
      entityName: 'entities1'
    };
  }
}
