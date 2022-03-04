import { TestBed } from '@angular/core/testing';

import { Entity1Service } from './entity1.service';

describe('Entity1Service', () => {
  let service: Entity1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Entity1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
