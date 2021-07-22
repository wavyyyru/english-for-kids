import { Component, Input, Output } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Category } from 'src/models/category.interface';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss'],
  animations: [
    trigger('moveLeft', [
      state(
        'stay',
        style({
          transform: 'translateX(-50%)',
          opacity: '0',
        })
      ),
      state(
        'move',
        style({
          transform: 'translateX(0)',
          opacity: '1',
        })
      ),
      transition('* => *', [animate('0.3s')]),
    ]),
  ],
})
export class NavigationPanelComponent {
  @Input()
  categories: Category[];
  menuIsOpen: boolean = false;
  constructor() {}
  handleMenuClick() {
    this.menuIsOpen = !this.menuIsOpen;
  }
  ngOnInit(): void {}
}
