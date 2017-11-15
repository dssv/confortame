import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaSepultamentoComponent } from './tela-sepultamento.component';

describe('TelaSepultamentoComponent', () => {
  let component: TelaSepultamentoComponent;
  let fixture: ComponentFixture<TelaSepultamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaSepultamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaSepultamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
