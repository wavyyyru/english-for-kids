import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './containers/header.component';
import { ModeToggleswitchComponent } from './components/mode-toggleswitch/mode-toggleswitch.component';
import { NavigationPanelComponent } from './components/navigation-panel/navigation-panel.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavigationPanelComponent,
    ModeToggleswitchComponent,
  ],
  imports: [CommonModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
