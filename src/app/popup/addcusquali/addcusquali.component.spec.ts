import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcusqualiComponent } from './addcusquali.component';

describe('AddcusqualiComponent', () => {
  let component: AddcusqualiComponent;
  let fixture: ComponentFixture<AddcusqualiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcusqualiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcusqualiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
