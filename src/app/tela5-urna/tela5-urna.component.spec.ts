import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tela5UrnaComponent } from './tela5-urna.component';

describe('Tela5UrnaComponent', () => {
  let component: Tela5UrnaComponent;
  let fixture: ComponentFixture<Tela5UrnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tela5UrnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tela5UrnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
