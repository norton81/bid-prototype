import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedFeature1Component } from './shared-feature1.component';

describe('Feature1Component', () => {
  let component: SharedFeature1Component;
  let fixture: ComponentFixture<SharedFeature1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedFeature1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedFeature1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
