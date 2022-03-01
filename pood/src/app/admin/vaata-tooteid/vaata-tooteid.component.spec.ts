import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaataTooteidComponent } from './vaata-tooteid.component';

describe('VaataTooteidComponent', () => {
  let component: VaataTooteidComponent;
  let fixture: ComponentFixture<VaataTooteidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaataTooteidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaataTooteidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
