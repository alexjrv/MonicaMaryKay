import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascarillaComponent } from './mascarilla.component';

describe('MascarillaComponent', () => {
  let component: MascarillaComponent;
  let fixture: ComponentFixture<MascarillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MascarillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MascarillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
