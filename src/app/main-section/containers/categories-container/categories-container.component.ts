import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppStyleService } from 'src/app/services/app-style.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/models/category.interface';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Disposable } from 'src/interfaces/disposable';

@Component({
  selector: 'app-categories-container',
  templateUrl: './categories-container.component.html',
  styleUrls: ['./categories-container.component.scss'],
})
export class CategoriesContainerComponent extends Disposable implements OnInit {
  categories: Category[];
  gameState: boolean;

  constructor(
    private categoriesService: CategoriesService,
    private appStyleService: AppStyleService
  ) {
    super();
    this.categories = categoriesService.getCategories();
  }

  ngOnInit(): void {
    this.appStyleService.gameIsStarted
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((value) => this.onGameStateChange(value));
  }

  onGameStateChange(value: boolean) {
    this.gameState = value;
  }
}
