import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverFormComponent } from './rover-form.component';

describe('RoverFormComponent', () => {
  let component: RoverFormComponent;
  let fixture: ComponentFixture<RoverFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoverFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoverFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
