import { ComponentFixture, TestBed } from '@angular/core/testing';
import {RecipientFeatureCellCustomComponent} from "./recipient-feature-cell-custom.component";

describe('SharedFeatureSimpleCellComponent', () => {
  let component: RecipientFeatureCellCustomComponent;
  let fixture: ComponentFixture<RecipientFeatureCellCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipientFeatureCellCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientFeatureCellCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
