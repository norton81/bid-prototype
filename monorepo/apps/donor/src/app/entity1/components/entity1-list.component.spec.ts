import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Entity1ListComponent } from './entity1-list.component';

describe('Entity1ListComponent', () => {
  let component: Entity1ListComponent;
  let fixture: ComponentFixture<Entity1ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Entity1ListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Entity1ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
