import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/models/category.interface';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss'],
  providers: [CategoriesService],
})
export class MainSectionComponent {
  categories: Category[];
  constructor(private categoriesService: CategoriesService) {
    this.categories = categoriesService.getCategories();
  }
}
