import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcusinfoComponent } from './addcusinfo.component';

describe('AddcusinfoComponent', () => {
  let component: AddcusinfoComponent;
  let fixture: ComponentFixture<AddcusinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcusinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcusinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
