import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GestionarCitasComponent } from './gestionar-citas.component';

describe('GestionarCitasComponent', () => {
  let component: GestionarCitasComponent;
  let fixture: ComponentFixture<GestionarCitasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GestionarCitasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GestionarCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
