import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipaNosPage } from './equipa-nos.page';

describe('EquipaNosPage', () => {
  let component: EquipaNosPage;
  let fixture: ComponentFixture<EquipaNosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipaNosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipaNosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
