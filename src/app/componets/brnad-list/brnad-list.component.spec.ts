import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrnadListComponent } from './brnad-list.component';

describe('BrnadListComponent', () => {
  let component: BrnadListComponent;
  let fixture: ComponentFixture<BrnadListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrnadListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrnadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
