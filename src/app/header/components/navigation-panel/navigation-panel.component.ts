import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Category } from 'src/models/category.interface';
import { AppStyleService } from 'src/app/services/app-style.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss'],
  animations: [
    trigger('moveLeft', [
      state(
        'stay',
        style({
          transform: 'translateX(-100%)',
          opacity: '0',
        })
      ),
      state(
        'move',
        style({
          transform: 'translateX(0)',
          opacity: '1',
        })
      ),
      transition('* => *', [animate('0.4s')]),
    ]),
  ],
})
export class NavigationPanelComponent implements OnInit, OnDestroy {
  componentDestroyed$: Subject<boolean> = new Subject();
  categories: Category[];
  menuState: boolean;

  constructor(
    private categoriesService: CategoriesService,
    private appStyleService: AppStyleService
  ) {}

  ngOnInit(): void {
    this.categories = this.categoriesService.getCategories();
    this.appStyleService.menuIsOpen
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((value) => this.onMenuOpen);
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete();
  }

  toggleMenuState() {
    this.appStyleService.menuIsOpen.next(
      !this.appStyleService.menuIsOpen.value
    );
  }

  onMenuOpen = (value: boolean) => {
    this.menuState = value;
  };
}
