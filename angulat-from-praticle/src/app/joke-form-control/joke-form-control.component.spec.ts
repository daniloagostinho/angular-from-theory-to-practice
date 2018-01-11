import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeFormControlComponent } from './joke-form-control.component';

describe('JokeFormControlComponent', () => {
  let component: JokeFormControlComponent;
  let fixture: ComponentFixture<JokeFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokeFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
