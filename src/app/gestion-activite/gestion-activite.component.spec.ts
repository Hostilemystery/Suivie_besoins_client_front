import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionActiviteComponent } from './gestion-activite.component';

describe('GestionActiviteComponent', () => {
  let component: GestionActiviteComponent;
  let fixture: ComponentFixture<GestionActiviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionActiviteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
