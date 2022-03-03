import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientFeature2Component } from './recipient-feature2.component';

describe('RecipientFeature2Component', () => {
  let component: RecipientFeature2Component;
  let fixture: ComponentFixture<RecipientFeature2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipientFeature2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientFeature2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
