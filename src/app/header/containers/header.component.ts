import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/models/category.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [CategoriesService],
})
export class HeaderComponent {
  categories: Category[];
  constructor(private categoriesService: CategoriesService) {
    this.categories = categoriesService.getCategories();
  }
}
