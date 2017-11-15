import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tela7AguardeComponent } from './tela7-aguarde.component';

describe('Tela7AguardeComponent', () => {
  let component: Tela7AguardeComponent;
  let fixture: ComponentFixture<Tela7AguardeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tela7AguardeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tela7AguardeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
