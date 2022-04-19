import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelMachineComponent } from './parcel-machine.component';

describe('ParcelMachineComponent', () => {
  let component: ParcelMachineComponent;
  let fixture: ComponentFixture<ParcelMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcelMachineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
