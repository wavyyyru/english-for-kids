import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesContainerComponent } from './main-section/containers/categories-container/categories-container.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CaregoryWordsContainerComponent } from './main-section/containers/caregory-words-container/caregory-words-container.component';
import { HeaderModule } from './header/header.module';
import { MainSectionModule } from './main-section/main-section.module';
// import { PageNotFoundModule } from './page-not-found/page-not-found.module';

const routes: Routes = [
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: 'categories', component: CategoriesContainerComponent },
  {
    path: 'category/:id',
    component: CaregoryWordsContainerComponent,
    pathMatch: 'full',
  },
  { path: '**', component: PageNotFoundComponent },
  // {
  //   path: '**',
  //   loadChildren: () =>
  //     import('./page-not-found/page-not-found.module').then(
  //       (module) => module.PageNotFoundModule
  //     ),
  // },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HeaderModule,
    MainSectionModule,
    // PageNotFoundModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
