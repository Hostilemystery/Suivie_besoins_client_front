import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeClientServiceComponent } from './liste-client-service.component';

describe('ListeClientServiceComponent', () => {
  let component: ListeClientServiceComponent;
  let fixture: ComponentFixture<ListeClientServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeClientServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeClientServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
