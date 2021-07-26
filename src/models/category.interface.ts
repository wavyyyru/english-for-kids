export interface Category {
  id: number;
  categoryName: string;
  cardsAmount: number;
  image: string;
  path: string;
}

export interface CategoryWords {
  categoryId: number;
  categoryName: string;
  englishWords: string[];
  russianWords: string[];
}
