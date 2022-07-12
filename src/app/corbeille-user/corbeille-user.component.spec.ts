import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorbeilleUserComponent } from './corbeille-user.component';

describe('CorbeilleUserComponent', () => {
  let component: CorbeilleUserComponent;
  let fixture: ComponentFixture<CorbeilleUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorbeilleUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorbeilleUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
