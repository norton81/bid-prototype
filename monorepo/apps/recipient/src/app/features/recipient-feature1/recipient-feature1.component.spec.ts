import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientFeature1Component } from './recipient-feature1.component';

describe('RecipientFeature1Component', () => {
  let component: RecipientFeature1Component;
  let fixture: ComponentFixture<RecipientFeature1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipientFeature1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientFeature1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
