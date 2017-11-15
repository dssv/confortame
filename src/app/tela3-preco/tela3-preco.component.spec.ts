import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tela3PrecoComponent } from './tela3-preco.component';

describe('Tela3PrecoComponent', () => {
  let component: Tela3PrecoComponent;
  let fixture: ComponentFixture<Tela3PrecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tela3PrecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tela3PrecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
