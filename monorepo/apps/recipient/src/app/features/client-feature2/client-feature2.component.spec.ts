import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFeature2Component } from './client-feature2.component';

describe('ClientFeature2Component', () => {
  let component: ClientFeature2Component;
  let fixture: ComponentFixture<ClientFeature2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientFeature2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFeature2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
