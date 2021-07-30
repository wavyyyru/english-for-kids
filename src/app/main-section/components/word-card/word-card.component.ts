import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { AppStyleService } from 'src/app/services/app-style.service';
import { CategoryWords } from 'src/models/category.interface';

@Component({
  selector: 'app-word-card',
  templateUrl: './word-card.component.html',
  styleUrls: ['./word-card.component.scss'],
  animations: [
    trigger('flipState', [
      state(
        'active',
        style({
          transform: 'rotateY(179deg)',
        })
      ),
      state(
        'inactive',
        style({
          transform: 'rotateY(0)',
        })
      ),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in')),
    ]),
  ],
})
export class WordCardComponent implements OnInit {
  constructor(private appStyleService: AppStyleService) {}

  @Input()
  categoryWords: CategoryWords;
  @Input()
  wordCounter: number;

  gameState: boolean;
  flipState: boolean = false;

  toggleFlip() {
    this.flipState = !this.flipState;
  }

  chooseCard(cardNum: number) {
    if (this.gameState) {
      alert('Card #' + cardNum);
    }
  }

  playSound(wordNum: number) {
    if (!this.gameState) {
      let audio = new Audio();
      audio.src = this.categoryWords.sounds[wordNum];
      audio.load();
      audio.play();
    }
  }

  ngOnInit(): void {
    this.appStyleService.gameIsStarted.subscribe((value) =>
      this.onGameStateChange(value)
    );
  }

  onGameStateChange(value: boolean) {
    this.gameState = value;
  }
}
