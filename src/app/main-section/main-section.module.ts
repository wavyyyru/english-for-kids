import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSectionComponent } from './containers/main-section.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CaregoryWordsContainerComponent } from './containers/caregory-words-container/caregory-words-container.component';
import { WordCardComponent } from './components/word-card/word-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResultsScreenComponent } from './components/results-screen/results-screen.component';

@NgModule({
  declarations: [CategoryCardComponent, WordCardComponent, ResultsScreenComponent],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [MainSectionComponent],
})
export class MainSectionModule {}
