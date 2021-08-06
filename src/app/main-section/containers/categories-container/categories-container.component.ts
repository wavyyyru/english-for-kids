import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/models/category.interface';

@Component({
  selector: 'app-categories-container',
  templateUrl: './categories-container.component.html',
  styleUrls: ['./categories-container.component.scss'],
})
export class CategoriesContainerComponent {
  categories: Category[];
  constructor(private categoriesService: CategoriesService) {
    this.categories = categoriesService.getCategories();
  }
}
