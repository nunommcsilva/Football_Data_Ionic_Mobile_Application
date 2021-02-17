import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigaChampionsPage } from './liga-champions.page';

describe('LigaChampionsPage', () => {
  let component: LigaChampionsPage;
  let fixture: ComponentFixture<LigaChampionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigaChampionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigaChampionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
