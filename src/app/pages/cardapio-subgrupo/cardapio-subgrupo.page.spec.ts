import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioSubgrupoPage } from './cardapio-subgrupo.page';

describe('CardapioSubgrupoPage', () => {
  let component: CardapioSubgrupoPage;
  let fixture: ComponentFixture<CardapioSubgrupoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardapioSubgrupoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardapioSubgrupoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
