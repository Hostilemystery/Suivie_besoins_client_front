import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorbeilleClientComponent } from './corbeille-client.component';

describe('CorbeilleClientComponent', () => {
  let component: CorbeilleClientComponent;
  let fixture: ComponentFixture<CorbeilleClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorbeilleClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorbeilleClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
