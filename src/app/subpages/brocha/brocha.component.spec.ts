import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrochaComponent } from './brocha.component';

describe('BrochaComponent', () => {
  let component: BrochaComponent;
  let fixture: ComponentFixture<BrochaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrochaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrochaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
