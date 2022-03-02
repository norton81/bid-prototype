import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFeature1Component } from './client-feature1.component';

describe('ClientFeature1Component', () => {
  let component: ClientFeature1Component;
  let fixture: ComponentFixture<ClientFeature1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientFeature1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFeature1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
