import { TestBed } from '@angular/core/testing';

import { Entity1ColumnFeatureResolverService } from './entity1-colum-feature-resolver.service';

describe('Entity1ColumFeatureResolverService', () => {
  let service: Entity1ColumnFeatureResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Entity1ColumnFeatureResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
