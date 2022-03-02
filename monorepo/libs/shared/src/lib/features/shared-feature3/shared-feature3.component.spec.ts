import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedFeature3Component } from './shared-feature3.component';

describe('SharedFeature3Component', () => {
  let component: SharedFeature3Component;
  let fixture: ComponentFixture<SharedFeature3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedFeature3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedFeature3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
