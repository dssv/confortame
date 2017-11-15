import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tela6ConfContatoComponent } from './tela6-conf-contato.component';

describe('Tela6ConfContatoComponent', () => {
  let component: Tela6ConfContatoComponent;
  let fixture: ComponentFixture<Tela6ConfContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tela6ConfContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tela6ConfContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
