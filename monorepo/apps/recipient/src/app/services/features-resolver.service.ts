import { Injectable } from '@angular/core';

@Injectable()
export class FeaturesResolverService {
  async getDynamicComponents(components: any[]) {
    const result = components
    return Promise.resolve(result);
  };
}
