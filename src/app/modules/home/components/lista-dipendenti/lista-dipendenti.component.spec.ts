import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDipendentiComponent } from './lista-dipendenti.component';

describe('ListaPersoneComponent', () => {
  let component: ListaDipendentiComponent;
  let fixture: ComponentFixture<ListaDipendentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDipendentiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDipendentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
