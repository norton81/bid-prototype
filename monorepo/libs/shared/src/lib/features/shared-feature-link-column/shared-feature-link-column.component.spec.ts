import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedFeatureLinkColumnComponent } from './shared-feature-link-column.component';

describe('SharedFeatureLinkColumnComponent', () => {
  let component: SharedFeatureLinkColumnComponent;
  let fixture: ComponentFixture<SharedFeatureLinkColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedFeatureLinkColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedFeatureLinkColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
