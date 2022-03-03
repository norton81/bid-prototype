import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedFeatureSimpleColumnComponent } from './shared-feature-simple-column.component';

describe('SharedFeatureSimpleColumnComponent', () => {
  let component: SharedFeatureSimpleColumnComponent;
  let fixture: ComponentFixture<SharedFeatureSimpleColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedFeatureSimpleColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedFeatureSimpleColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
