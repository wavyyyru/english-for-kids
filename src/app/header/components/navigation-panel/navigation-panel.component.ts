import { Component, Input, OnInit, Output } from '@angular/core';

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
export class NavigationPanelComponent implements OnInit {
  categories: Category[];
  menuState: boolean;

  constructor(
    private categoriesService: CategoriesService,
    private appStyleService: AppStyleService
  ) {}

  ngOnInit(): void {
    this.categories = this.categoriesService.getCategories();
    this.appStyleService.menuIsOpen.subscribe((value) =>
      this.onMenuOpen(value)
    );
  }

  toggleMenuState() {
    this.appStyleService.menuIsOpen.next(
      !this.appStyleService.menuIsOpen.value
    );
  }

  onMenuOpen(value: boolean) {
    this.menuState = value;
  }
}
