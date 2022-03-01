import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuudaToodeComponent } from './muuda-toode.component';

describe('MuudaToodeComponent', () => {
  let component: MuudaToodeComponent;
  let fixture: ComponentFixture<MuudaToodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuudaToodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuudaToodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
