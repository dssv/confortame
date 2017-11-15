import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tela4ServicosComponent } from './tela4-servicos.component';

describe('Tela4ServicosComponent', () => {
  let component: Tela4ServicosComponent;
  let fixture: ComponentFixture<Tela4ServicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tela4ServicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tela4ServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
