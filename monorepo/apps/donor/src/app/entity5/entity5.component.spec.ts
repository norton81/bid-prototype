import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Entity5Component } from './entity5.component';

describe('Entity5Component', () => {
  let component: Entity5Component;
  let fixture: ComponentFixture<Entity5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Entity5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Entity5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
