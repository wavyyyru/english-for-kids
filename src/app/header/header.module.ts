import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './containers/header.component';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { ModeToggleswitchComponent } from './components/mode-toggleswitch/mode-toggleswitch.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuButtonComponent,
    ModeToggleswitchComponent,
  ],
  imports: [CommonModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
