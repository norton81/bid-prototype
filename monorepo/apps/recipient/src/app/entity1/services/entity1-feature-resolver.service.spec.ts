import { TestBed } from '@angular/core/testing';

import { Entity1FeatureResolverService } from './entity1-feature-resolver.service';

describe('FeaturesResolverService', () => {
  let service: Entity1FeatureResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Entity1FeatureResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
