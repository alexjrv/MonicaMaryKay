import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelineadorComponent } from './delineador.component';

describe('DelineadorComponent', () => {
  let component: DelineadorComponent;
  let fixture: ComponentFixture<DelineadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelineadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelineadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
