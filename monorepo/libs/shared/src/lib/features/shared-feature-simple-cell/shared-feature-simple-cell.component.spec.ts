import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedFeatureSimpleCellComponent } from './shared-feature-simple-cell.component';

describe('SharedFeatureSimpleCellComponent', () => {
  let component: SharedFeatureSimpleCellComponent;
  let fixture: ComponentFixture<SharedFeatureSimpleCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedFeatureSimpleCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedFeatureSimpleCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
