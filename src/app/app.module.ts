import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationPanelComponent } from './header/components/navigation-panel/navigation-panel.component';
import { ModeToggleswitchComponent } from './header/components/mode-toggleswitch/mode-toggleswitch.component';
import { HeaderComponent } from './header/containers/header.component';
import { CategoryCardComponent } from './main-section/components/category-card/category-card.component';
import { MainSectionComponent } from './main-section/containers/main-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    /*header components*/
    HeaderComponent,
    NavigationPanelComponent,
    ModeToggleswitchComponent,
    /*main section components*/
    MainSectionComponent,
    CategoryCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
