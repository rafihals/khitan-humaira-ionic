/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TitlethreeComponent } from './titlethree.component';

describe('TitlethreeComponent', () => {
  let component: TitlethreeComponent;
  let fixture: ComponentFixture<TitlethreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitlethreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlethreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
