import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Entity1FormComponent } from './entity1-form.component';

describe('Entity1FormComponent', () => {
  let component: Entity1FormComponent;
  let fixture: ComponentFixture<Entity1FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Entity1FormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Entity1FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
