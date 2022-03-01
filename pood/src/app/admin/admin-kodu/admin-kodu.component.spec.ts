import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKoduComponent } from './admin-kodu.component';

describe('AdminKoduComponent', () => {
  let component: AdminKoduComponent;
  let fixture: ComponentFixture<AdminKoduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminKoduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKoduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
