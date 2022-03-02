import { TestBed } from '@angular/core/testing';

import { FeaturesResolverService } from './features-resolver.service';

describe('FeaturesResolverService', () => {
  let service: FeaturesResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturesResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
