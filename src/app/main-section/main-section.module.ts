import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainSectionComponent } from './containers/main-section.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { WordCardComponent } from './components/word-card/word-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResultsScreenComponent } from './components/results-screen/results-screen.component';
import { CategoriesContainerComponent } from './containers/categories-container/categories-container.component';
import { CaregoryWordsContainerComponent } from './containers/caregory-words-container/caregory-words-container.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    MainSectionComponent,
    CategoriesContainerComponent,
    CaregoryWordsContainerComponent,
    CategoryCardComponent,
    WordCardComponent,
    ResultsScreenComponent,
    PageNotFoundComponent,
  ],
  imports: [CommonModule, BrowserAnimationsModule, RouterModule],
  exports: [MainSectionComponent],
})
export class MainSectionModule {}
