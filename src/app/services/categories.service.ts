import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category, CategoryWords } from 'src/models/category.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  categoryWords: CategoryWords[] = [
    {
      categoryId: 1,
      categoryName: 'Animals',
      englishWords: [
        'Chick',
        'Whale',
        'Pig',
        'Fox',
        'Tiger',
        'Crab',
        'Bull',
        'Hedgehog',
      ],
      russianWords: [
        'Цыпленок',
        'Кит',
        'Свинья',
        'Лиса',
        'Тигр',
        'Краб',
        'Бык',
        'Ёж',
      ],
      images: [
        './../../../../assets/images/categories/animals/chick.svg',
        './../../../../assets/images/categories/animals/whale.svg',
        './../../../../assets/images/categories/animals/pig.svg',
        './../../../../assets/images/categories/animals/fox.svg',
        './../../../../assets/images/categories/animals/tiger.svg',
        './../../../../assets/images/categories/animals/crab.svg',
        './../../../../assets/images/categories/animals/bull.svg',
        './../../../../assets/images/categories/animals/hedgehog.svg',
      ],
    },
    {
      categoryId: 2,
      categoryName: 'Food',
      englishWords: [
        'Apple',
        'Banana',
        'Bread',
        'Cheese',
        'Pumpkin',
        'Tomato',
        'Cabbage',
        'Orange',
      ],
      russianWords: [
        'Яблоко',
        'Банан',
        'Хлеб',
        'Сыр',
        'Тыква',
        'Помидор',
        'Капуста',
        'Апельсин',
      ],
      images: [
        './../../../../assets/images/categories/food/apple.svg',
        './../../../../assets/images/categories/food/banana.svg',
        './../../../../assets/images/categories/food/bread.svg',
        './../../../../assets/images/categories/food/cheese.svg',
        './../../../../assets/images/categories/food/pumpkin.svg',
        './../../../../assets/images/categories/food/tomato.svg',
        './../../../../assets/images/categories/food/cabbage.svg',
        './../../../../assets/images/categories/food/orange.svg',
      ],
    },
  ];
  chosenCategory: Observable<CategoryWords> = new Observable<CategoryWords>();
  constructor() {}
  getCategories(): Category[] {
    return [
      {
        id: 1,
        categoryName: 'Animals',
        cardsAmount: 8,
        image: './../../../../assets/images/categories/animals-category.png',
        path: 'animals-learning',
      },
      {
        id: 2,
        categoryName: 'Food',
        cardsAmount: 8,
        image: './../../../../assets/images/categories/food-category.png',
        path: 'food-learning',
      },
      {
        id: 3,
        categoryName: 'Body',
        cardsAmount: 8,
        image: './../../../../assets/images/categories/body-category.png',
        path: 'body-learning',
      },
      {
        id: 4,
        categoryName: 'Nature',
        cardsAmount: 8,
        image: './../../../../assets/images/categories/nature-category.png',
        path: 'nature-learning',
      },
      {
        id: 5,
        categoryName: 'City',
        cardsAmount: 8,
        image: './../../../../assets/images/categories/city-category.png',
        path: 'city-learning',
      },
      {
        id: 6,
        categoryName: 'Emotions',
        cardsAmount: 8,
        image: './../../../../assets/images/categories/emotions-category.png',
        path: 'emotions-learning',
      },
      {
        id: 7,
        categoryName: 'Colors',
        cardsAmount: 8,
        image: './../../../../assets/images/categories/colors-category.png',
        path: 'colors-learning',
      },
      {
        id: 8,
        categoryName: 'Home',
        cardsAmount: 8,
        image: './../../../../assets/images/categories/home-category.png',
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
