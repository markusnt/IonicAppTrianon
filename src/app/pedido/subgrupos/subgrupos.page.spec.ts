import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubgruposPage } from './subgrupos.page';

describe('SubgruposPage', () => {
  let component: SubgruposPage;
  let fixture: ComponentFixture<SubgruposPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubgruposPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubgruposPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
