import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesmaquilladorComponent } from './desmaquillador.component';

describe('DesmaquilladorComponent', () => {
  let component: DesmaquilladorComponent;
  let fixture: ComponentFixture<DesmaquilladorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesmaquilladorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesmaquilladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
