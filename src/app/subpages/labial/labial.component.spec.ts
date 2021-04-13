import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabialComponent } from './labial.component';

describe('LabialComponent', () => {
  let component: LabialComponent;
  let fixture: ComponentFixture<LabialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
