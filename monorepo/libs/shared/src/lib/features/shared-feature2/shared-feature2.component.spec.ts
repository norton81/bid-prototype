import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedFeature2Component } from './shared-feature2.component';

describe('SharedFeature2Component', () => {
  let component: SharedFeature2Component;
  let fixture: ComponentFixture<SharedFeature2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedFeature2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedFeature2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
