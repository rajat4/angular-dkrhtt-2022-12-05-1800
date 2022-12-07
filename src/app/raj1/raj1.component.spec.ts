import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Raj1Component } from './raj1.component';

describe('Raj1Component', () => {
  let component: Raj1Component;
  let fixture: ComponentFixture<Raj1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Raj1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Raj1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
