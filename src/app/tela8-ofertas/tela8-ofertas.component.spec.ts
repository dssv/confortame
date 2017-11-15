import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tela8OfertasComponent } from './tela8-ofertas.component';

describe('Tela8OfertasComponent', () => {
  let component: Tela8OfertasComponent;
  let fixture: ComponentFixture<Tela8OfertasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tela8OfertasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tela8OfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
