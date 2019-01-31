import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPhotosListComponent } from './user-photos-list.component';

describe('UserPhotosListComponent', () => {
  let component: UserPhotosListComponent;
  let fixture: ComponentFixture<UserPhotosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPhotosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPhotosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
