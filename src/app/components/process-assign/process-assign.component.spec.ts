import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessAssignComponent } from './process-assign.component';

describe('ProcessAssignComponent', () => {
  let component: ProcessAssignComponent;
  let fixture: ComponentFixture<ProcessAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessAssignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
