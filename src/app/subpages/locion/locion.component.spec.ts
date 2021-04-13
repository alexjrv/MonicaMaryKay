import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocionComponent } from './locion.component';

describe('LocionComponent', () => {
  let component: LocionComponent;
  let fixture: ComponentFixture<LocionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
