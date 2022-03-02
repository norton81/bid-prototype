import { Injectable } from '@angular/core';
import {ClientFeature2Component} from "../features/client-feature2/client-feature2.component";
import {ClientFeature1Component} from "../features/client-feature1/client-feature1.component";

@Injectable()
export class FeaturesResolverService {
  async getDynamicComponents(components: any[]) {
    const result = [...components, ClientFeature2Component, ClientFeature1Component]
    return Promise.resolve(result);
  };
}
