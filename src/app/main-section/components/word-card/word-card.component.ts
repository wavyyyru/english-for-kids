import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GameModeService } from 'src/app/services/game-mode.service';
import { CategoryWords } from 'src/models/category-words.interface';

@Component({
  selector: 'app-word-card',
  templateUrl: './word-card.component.html',
  styleUrls: ['./word-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
export class WordCardComponent {
  @Input()
  categoryWords: CategoryWords;
  @Input()
  wordCounter: number;
  @Input()
  rightAnswersArray: number[];
  @Input()
  roundState: boolean;
  @Input()
  gameState: boolean;

  flipState: boolean = false;

  constructor(private gameModeService: GameModeService) {}

  playSound(wordNum: number) {
    if (!this.gameState) {
      let audio = new Audio();
      audio.src = this.categoryWords.sounds[wordNum];
      audio.load();
      audio.play();
    }
  }

  toggleFlip() {
    this.flipState = !this.flipState;
  }

  chooseCard(cardNum: number) {
    if (this.gameState && this.roundState) {
      this.gameModeService.currentAnswer.next(cardNum);
    }
  }

  checkIfAnswerIsRight(cardNum: number) {
    return this.rightAnswersArray.find((element) => {
      cardNum === element;
    });
  }
}
