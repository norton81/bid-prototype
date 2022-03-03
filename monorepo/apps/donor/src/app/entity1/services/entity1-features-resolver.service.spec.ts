import { TestBed } from '@angular/core/testing';
import {Entity1FeaturesResolverService} from "./entity1-features-resolver.service";


describe('FeaturesResolverService', () => {
  let service: Entity1FeaturesResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Entity1FeaturesResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
