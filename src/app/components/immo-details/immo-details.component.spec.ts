import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmoDetailsComponent } from './immo-details.component';

describe('ImmoDetailsComponent', () => {
  let component: ImmoDetailsComponent;
  let fixture: ComponentFixture<ImmoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
