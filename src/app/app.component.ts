import { Component } from '@angular/core';
import { AppStyleService } from './services/app-style.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('goTinted', [
      state(
        'stay',
        style({
          opacity: '0',
          zIndex: '-1',
        })
      ),
      state(
        'move',
        style({
          opacity: '1',
          zIndex: '3',
        })
      ),
      transition('on => off', [animate(500)]),
    ]),
  ],
})
export class AppComponent {
  title = 'english-for-kids';
  pageIsTinted: boolean;

  constructor(private appStyleService: AppStyleService) {}

  ngOnInit(): void {
    this.appStyleService.menuIsOpen.subscribe(
      (value) => (this.pageIsTinted = value)
    );
  }
}
