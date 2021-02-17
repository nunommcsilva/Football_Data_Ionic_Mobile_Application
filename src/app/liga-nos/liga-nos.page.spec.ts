import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigaNosPage } from './liga-nos.page';

describe('LigaNosPage', () => {
  let component: LigaNosPage;
  let fixture: ComponentFixture<LigaNosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigaNosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigaNosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
