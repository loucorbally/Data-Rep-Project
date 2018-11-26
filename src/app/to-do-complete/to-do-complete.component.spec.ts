import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoCompleteComponent } from './to-do-complete.component';

describe('ToDoCompleteComponent', () => {
  let component: ToDoCompleteComponent;
  let fixture: ComponentFixture<ToDoCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
