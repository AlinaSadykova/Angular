import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnepetComponent } from './onepet.component';

describe('OnepetComponent', () => {
  let component: OnepetComponent;
  let fixture: ComponentFixture<OnepetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnepetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnepetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
