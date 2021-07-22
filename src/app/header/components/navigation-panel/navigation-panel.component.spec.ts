import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationPanelComponent } from './navigation-panel.component';

describe('MenuButtonComponent', () => {
  let component: NavigationPanelComponent;
  let fixture: ComponentFixture<NavigationPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationPanelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
