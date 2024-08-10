/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TitletwoComponent } from './titletwo.component';

describe('TitletwoComponent', () => {
  let component: TitletwoComponent;
  let fixture: ComponentFixture<TitletwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitletwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitletwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
