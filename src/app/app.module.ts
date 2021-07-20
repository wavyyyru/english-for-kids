import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuButtonComponent } from './header/components/menu-button/menu-button.component';
import { ModeToggleswitchComponent } from './header/components/mode-toggleswitch/mode-toggleswitch.component';
import { HeaderComponent } from './header/containers/header.component';
import { CategoryCardComponent } from './main-section/components/category-card/category-card.component';
import { MainSectionComponent } from './main-section/containers/main-section.component';

@NgModule({
  declarations: [
    AppComponent,
    /*header components*/
    HeaderComponent,
    MenuButtonComponent,
    ModeToggleswitchComponent,
    /*main section components*/
    MainSectionComponent,
    CategoryCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
