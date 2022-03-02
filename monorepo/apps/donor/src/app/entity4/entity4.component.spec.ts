import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Entity4Component } from './entity4.component';

describe('Entity4Component', () => {
  let component: Entity4Component;
  let fixture: ComponentFixture<Entity4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Entity4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Entity4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
