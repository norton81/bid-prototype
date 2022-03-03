import { Injectable } from '@angular/core';

@Injectable()
export class Entity1FeaturesResolverService {
  getDynamicFeatures(features: any[]) {
    return features;
  };
}
