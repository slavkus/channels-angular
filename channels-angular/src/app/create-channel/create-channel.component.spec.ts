/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreateChannelComponent } from './create-channel.component';

describe('CreateChannelComponent', () => {
  let component: CreateChannelComponent;
  let fixture: ComponentFixture<CreateChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});