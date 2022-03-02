import { Injectable } from '@angular/core';

@Injectable()
export class FeaturesResolverService {
  async getDynamicComponents(components: any[]) {
    return Promise.resolve(components);
  };
}
