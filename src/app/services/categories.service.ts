import { Injectable } from '@angular/core';
import { Category } from 'src/models/category.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor() {}
  getCategories(): Category[] {
    return [
      { categoryName: 'Animals', cardsAmount: 8 },
      { categoryName: 'Food', cardsAmount: 8 },
      { categoryName: 'Body', cardsAmount: 8 },
      { categoryName: 'Nature', cardsAmount: 8 },
      { categoryName: 'City', cardsAmount: 8 },
      { categoryName: 'Emotions', cardsAmount: 8 },
      { categoryName: 'Colors', cardsAmount: 8 },
      { categoryName: 'Home', cardsAmount: 8 },
    ];
  }
}
