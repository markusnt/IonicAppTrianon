import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioProdutoPage } from './cardapio-produto.page';

describe('CardapioProdutoPage', () => {
  let component: CardapioProdutoPage;
  let fixture: ComponentFixture<CardapioProdutoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardapioProdutoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardapioProdutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
