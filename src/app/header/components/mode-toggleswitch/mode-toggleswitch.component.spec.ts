import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeToggleswitchComponent } from './mode-toggleswitch.component';

describe('ModeToggleswitchComponent', () => {
  let component: ModeToggleswitchComponent;
  let fixture: ComponentFixture<ModeToggleswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeToggleswitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeToggleswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
