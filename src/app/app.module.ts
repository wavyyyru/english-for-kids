import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavigationPanelComponent } from './header/components/navigation-panel/navigation-panel.component';
import { ModeToggleswitchComponent } from './header/components/mode-toggleswitch/mode-toggleswitch.component';
import { HeaderComponent } from './header/containers/header.component';
import { CategoryCardComponent } from './main-section/components/category-card/category-card.component';
import { MainSectionComponent } from './main-section/containers/main-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesContainerComponent } from './main-section/containers/categories-container/categories-container.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CaregoryWordsContainerComponent } from './main-section/containers/caregory-words-container/caregory-words-container.component';
import { WordCardComponent } from './main-section/components/word-card/word-card.component';

const routes: Routes = [
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: 'categories', component: CategoriesContainerComponent },
  {
    path: 'category/:id',
    component: CaregoryWordsContainerComponent,
    pathMatch: 'full',
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    /*header components*/
    HeaderComponent,
    NavigationPanelComponent,
    ModeToggleswitchComponent,
    /*main section components*/
    MainSectionComponent,
    CategoriesContainerComponent,
    CaregoryWordsContainerComponent,
    CategoryCardComponent,
    WordCardComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
