import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedFeatureDeleteColumnComponent } from './shared-feature-delete-column.component';

describe('SharedFeatureDeleteColumnComponent', () => {
  let component: SharedFeatureDeleteColumnComponent;
  let fixture: ComponentFixture<SharedFeatureDeleteColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedFeatureDeleteColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedFeatureDeleteColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
