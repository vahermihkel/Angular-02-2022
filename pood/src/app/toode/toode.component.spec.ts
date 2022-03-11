import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToodeComponent } from './toode.component';

describe('ToodeComponent', () => {
  let component: ToodeComponent;
  let fixture: ComponentFixture<ToodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
