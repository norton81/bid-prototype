import { Injectable } from '@angular/core';
import {RecipientFeature2Component} from "../features/recipient-feature2/recipient-feature2.component";
import {RecipientFeature1Component} from "../features/recipient-feature1/recipient-feature1.component";

@Injectable()
export class FeaturesResolverService {
  async getDynamicComponents(components: any[]) {
    const result = [RecipientFeature1Component, components[1], components[2], RecipientFeature2Component]
    return Promise.resolve(result);
  };
}
