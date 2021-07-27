import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { CategoryWords } from 'src/models/category.interface';

@Component({
  selector: 'app-caregory-words-container',
  templateUrl: './caregory-words-container.component.html',
  styleUrls: ['./caregory-words-container.component.scss'],
})
export class CaregoryWordsContainerComponent implements OnInit {
  categoryWords: CategoryWords;

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoriesService: CategoriesService
  ) {
    activatedRoute.params.subscribe((value) => {
      const categoryId = Number(
        this.activatedRoute.snapshot.paramMap.get('id')
      );
      this.categoriesService.getWordsByCategory(categoryId);
      this.categoriesService.chosenCategory.subscribe(
        (value) => (this.categoryWords = value)
      );
      console.log('in component from subscription', this.categoryWords);
    });
  }

  ngOnInit(): void {}
}
