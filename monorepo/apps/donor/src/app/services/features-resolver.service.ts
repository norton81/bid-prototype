import { Injectable } from '@angular/core';

@Injectable()
export class FeaturesResolverService {
  getDynamicComponents(components: any[]) {
    return components;
  };
}
