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
        'Свинка',
        'Лиса',
        'Тигр',
        'Краб',
        'Бык',
        'Ёж',
      ],
      images: [
        'assets/images/categories/animals/chick.svg',
        'assets/images/categories/animals/whale.svg',
        'assets/images/categories/animals/pig.svg',
        'assets/images/categories/animals/fox.svg',
        'assets/images/categories/animals/tiger.svg',
        'assets/images/categories/animals/crab.svg',
        'assets/images/categories/animals/bull.svg',
        'assets/images/categories/animals/hedgehog.svg',
      ],
      sounds: [
        'assets/images/categories/animals/sounds/chick.mp3',
        'assets/images/categories/animals/sounds/whale.mp3',
        'assets/images/categories/animals/sounds/pig.mp3',
        'assets/images/categories/animals/sounds/fox.mp3',
        'assets/images/categories/animals/sounds/tiger.mp3',
        'assets/images/categories/animals/sounds/crab.mp3',
        'assets/images/categories/animals/sounds/bull.mp3',
        'assets/images/categories/animals/sounds/hedgehog.mp3',
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
        'assets/images/categories/food/apple.svg',
        'assets/images/categories/food/banana.svg',
        'assets/images/categories/food/bread.svg',
        'assets/images/categories/food/cheese.svg',
        'assets/images/categories/food/pumpkin.svg',
        'assets/images/categories/food/tomato.svg',
        'assets/images/categories/food/cabbage.svg',
        'assets/images/categories/food/orange.svg',
      ],
      sounds: [
        'assets/images/categories/food/sounds/apple.mp3',
        'assets/images/categories/food/sounds/banana.mp3',
        'assets/images/categories/food/sounds/bread.mp3',
        'assets/images/categories/food/sounds/cheese.mp3',
        'assets/images/categories/food/sounds/pumpkin.mp3',
        'assets/images/categories/food/sounds/tomato.mp3',
        'assets/images/categories/food/sounds/cabbage.mp3',
        'assets/images/categories/food/sounds/orange.mp3',
      ],
    },
    {
      categoryId: 3,
      categoryName: 'Body',
      englishWords: [
        'Head',
        'Neck',
        'Hand',
        'Nose',
        'Ear',
        'Foot',
        'Hair',
        'Eye',
      ],
      russianWords: [
        'Голова',
        'Шея',
        'Рука',
        'Нос',
        'Ухо',
        'Нога',
        'Волосы',
        'Глаз',
      ],
      images: [
        'assets/images/categories/body/head.svg',
        'assets/images/categories/body/neck.svg',
        'assets/images/categories/body/hand.svg',
        'assets/images/categories/body/nose.svg',
        'assets/images/categories/body/ear.svg',
        'assets/images/categories/body/foot.svg',
        'assets/images/categories/body/hair.svg',
        'assets/images/categories/body/eye.svg',
      ],
      sounds: [
        'assets/images/categories/body/sounds/head.mp3',
        'assets/images/categories/body/sounds/neck.mp3',
        'assets/images/categories/body/sounds/hand.mp3',
        'assets/images/categories/body/sounds/nose.mp3',
        'assets/images/categories/body/sounds/ear.mp3',
        'assets/images/categories/body/sounds/foot.mp3',
        'assets/images/categories/body/sounds/hair.mp3',
        'assets/images/categories/body/sounds/eye.mp3',
      ],
    },
    {
      categoryId: 4,
      categoryName: 'Nature',
      englishWords: [
        'Forest',
        'Beach',
        'Lake',
        'Volcano',
        'Rainbow',
        'Desert',
        'Snow',
        'Mountain',
      ],
      russianWords: [
        'Лес',
        'Пляж',
        'Озеро',
        'Вулкан',
        'Радуга',
        'Пустыня',
        'Снег',
        'Гора',
      ],
      images: [
        'assets/images/categories/nature/forest.svg',
        'assets/images/categories/nature/beach.svg',
        'assets/images/categories/nature/lake.svg',
        'assets/images/categories/nature/volcano.svg',
        'assets/images/categories/nature/rainbow.svg',
        'assets/images/categories/nature/desert.svg',
        'assets/images/categories/nature/snow.svg',
        'assets/images/categories/nature/mountain.svg',
      ],
      sounds: [
        'assets/images/categories/nature/sounds/forest.mp3',
        'assets/images/categories/nature/sounds/beach.mp3',
        'assets/images/categories/nature/sounds/lake.mp3',
        'assets/images/categories/nature/sounds/volcano.mp3',
        'assets/images/categories/nature/sounds/rainbow.mp3',
        'assets/images/categories/nature/sounds/desert.mp3',
        'assets/images/categories/nature/sounds/snow.mp3',
        'assets/images/categories/nature/sounds/mountain.mp3',
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
