import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSectionComponent } from './containers/main-section.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';

@NgModule({
  declarations: [
    CategoryCardComponent
  ],
  imports: [CommonModule],
  exports: [MainSectionComponent],
})
export class MainSectionModule {}
