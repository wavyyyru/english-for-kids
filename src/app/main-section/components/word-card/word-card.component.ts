import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppStyleService } from 'src/app/services/app-style.service';
import { GameModeService } from 'src/app/services/game-mode.service';
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
export class WordCardComponent implements OnInit, OnDestroy {
  @Input()
  categoryWords: CategoryWords;
  @Input()
  wordCounter: number;

  gameState: boolean;
  flipState: boolean = false;
  componentDestroyed$: Subject<boolean> = new Subject();

  constructor(
    private appStyleService: AppStyleService,
    private gameModeService: GameModeService
  ) {}

  ngOnInit(): void {
    this.appStyleService.gameIsStarted
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((value) => this.onGameStateChange(value));
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete();
  }

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
    if (this.gameState) {
      this.gameModeService.currentAnswer.next(cardNum);
    }
  }

  onGameStateChange(value: boolean) {
    this.gameState = value;
  }
}
