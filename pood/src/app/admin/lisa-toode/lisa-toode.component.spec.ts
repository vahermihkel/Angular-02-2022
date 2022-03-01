import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisaToodeComponent } from './lisa-toode.component';

describe('LisaToodeComponent', () => {
  let component: LisaToodeComponent;
  let fixture: ComponentFixture<LisaToodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LisaToodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LisaToodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
