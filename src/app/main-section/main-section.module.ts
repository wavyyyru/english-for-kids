import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSectionComponent } from './containers/main-section.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CaregoryWordsContainerComponent } from './containers/caregory-words-container/caregory-words-container.component';
import { WordCardComponent } from './components/word-card/word-card.component';

@NgModule({
  declarations: [CategoryCardComponent, WordCardComponent],
  imports: [CommonModule],
  exports: [MainSectionComponent],
})
export class MainSectionModule {}
