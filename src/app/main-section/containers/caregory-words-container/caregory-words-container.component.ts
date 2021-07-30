import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppStyleService } from 'src/app/services/app-style.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { CategoryWords } from 'src/models/category.interface';

@Component({
  selector: 'app-caregory-words-container',
  templateUrl: './caregory-words-container.component.html',
  styleUrls: ['./caregory-words-container.component.scss'],
})
export class CaregoryWordsContainerComponent implements OnInit {
  categoryId: number;
  categoryWords: CategoryWords;
  gameState: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoriesService: CategoriesService,
    private appStyleService: AppStyleService
  ) {
    activatedRoute.params.subscribe((value) => {
      debugger;
      this.categoryId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      this.categoriesService.getWordsByCategory(this.categoryId);
      this.categoriesService.chosenCategory.subscribe(
        (value) => (this.categoryWords = value)
      );
    });
  }

  ngOnInit(): void {
    this.appStyleService.gameIsStarted.subscribe((value) =>
      this.onGameStateChange(value)
    );
  }

  onGameStateChange(value: boolean) {
    this.gameState = value;
  }
}
