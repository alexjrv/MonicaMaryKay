import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinturaLabiosComponent } from './pintura-labios.component';

describe('PinturaLabiosComponent', () => {
  let component: PinturaLabiosComponent;
  let fixture: ComponentFixture<PinturaLabiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinturaLabiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinturaLabiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
