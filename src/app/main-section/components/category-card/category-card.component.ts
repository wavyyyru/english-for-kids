import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Category } from 'src/models/category.interface';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryCardComponent {
  @Input()
  category: Category;
  @Input()
  gameState: boolean;
}
