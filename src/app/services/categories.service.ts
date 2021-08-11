import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from 'src/models/category.interface';
import { CategoryWords } from 'src/models/category-words.interface';
import { mockData } from './categories';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  categoryWords: CategoryWords[] = mockData;
  chosenCategory: Observable<CategoryWords> = new Observable<CategoryWords>();
  constructor() {}
  getCategories(): Category[] {
    return [
      {
        id: 1,
        categoryName: 'Animals',
        cardsAmount: 8,
        image: 'assets/images/categories/animals-category.png',
        path: 'animals-learning',
      },
      {
        id: 2,
        categoryName: 'Food',
        cardsAmount: 8,
        image: 'assets/images/categories/food-category.png',
        path: 'food-learning',
      },
      {
        id: 3,
        categoryName: 'Body',
        cardsAmount: 8,
        image: 'assets/images/categories/body-category.png',
        path: 'body-learning',
      },
      {
        id: 4,
        categoryName: 'Nature',
        cardsAmount: 8,
        image: 'assets/images/categories/nature-category.png',
        path: 'nature-learning',
      },
      {
        id: 5,
        categoryName: 'City',
        cardsAmount: 8,
        image: 'assets/images/categories/city-category.png',
        path: 'city-learning',
      },
      {
        id: 6,
        categoryName: 'Emotions',
        cardsAmount: 8,
        image: 'assets/images/categories/emotions-category.png',
        path: 'emotions-learning',
      },
      {
        id: 7,
        categoryName: 'Colors',
        cardsAmount: 8,
        image: 'assets/images/categories/colors-category.png',
        path: 'colors-learning',
      },
      {
        id: 8,
        categoryName: 'Home',
        cardsAmount: 8,
        image: 'assets/images/categories/home-category.png',
        path: 'home-learning',
      },
    ];
  }

  getWordsByCategory(categoryId: number): void {
    this.categoryWords.filter((element) => {
      if (element.categoryId === categoryId) {
        this.chosenCategory = of(element);
      }
    });
  }
}
