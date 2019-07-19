import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmolistComponent } from './immolist.component';

describe('ImmolistComponent', () => {
  let component: ImmolistComponent;
  let fixture: ComponentFixture<ImmolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
