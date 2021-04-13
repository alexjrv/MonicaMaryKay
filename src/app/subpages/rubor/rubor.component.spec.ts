import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuborComponent } from './rubor.component';

describe('RuborComponent', () => {
  let component: RuborComponent;
  let fixture: ComponentFixture<RuborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuborComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
