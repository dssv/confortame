import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tela2LocalizacaoComponent } from './tela2-localizacao.component';

describe('Tela2LocalizacaoComponent', () => {
  let component: Tela2LocalizacaoComponent;
  let fixture: ComponentFixture<Tela2LocalizacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tela2LocalizacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tela2LocalizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
