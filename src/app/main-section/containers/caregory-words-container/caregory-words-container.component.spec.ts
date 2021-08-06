import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaregoryWordsContainerComponent } from './caregory-words-container.component';

describe('CaregoryWordsContainerComponent', () => {
  let component: CaregoryWordsContainerComponent;
  let fixture: ComponentFixture<CaregoryWordsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaregoryWordsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaregoryWordsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
