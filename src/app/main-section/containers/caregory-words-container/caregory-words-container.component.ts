import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppStyleService } from 'src/app/services/app-style.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { GameModeService } from 'src/app/services/game-mode.service';
import { CategoryWords } from 'src/models/category.interface';
import { Router } from '@angular/router';

import { trigger, style, animate, transition } from '@angular/animations';
import { Disposable } from 'src/interfaces/disposable';

@Component({
  selector: 'app-caregory-words-container',
  templateUrl: './caregory-words-container.component.html',
  styleUrls: ['./caregory-words-container.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('.3s ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('.1s ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class CaregoryWordsContainerComponent
  extends Disposable
  implements OnInit
{
  categoryWords: CategoryWords;
  gameState: boolean;
  roundState: boolean;
  resultsAreShown: boolean;
  mistakesArray: number[] = [];
  rightAnswersArray: number[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private categoriesService: CategoriesService,
    private appStyleService: AppStyleService,
    private gameModeService: GameModeService
  ) {
    super();
    activatedRoute.params
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((value) => {
        const categoryId = Number(
          this.activatedRoute.snapshot.paramMap.get('id')
        );

        this.categoriesService.getWordsByCategory(categoryId);

        this.categoriesService.chosenCategory
          .pipe(takeUntil(this.componentDestroyed$))
          .subscribe((value) => (this.categoryWords = value));

        this.gameModeService.resetValues();
        this.mistakesArray = [];
        this.rightAnswersArray = [];
      });
  }

  ngOnInit(): void {
    this.appStyleService.gameIsStarted
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((value) => this.onGameStateChange(value));

    this.gameModeService.roundState
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((newRoundState) => {
        this.roundState = newRoundState;
      });

    this.gameModeService.currentAnswer
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((value) => {
        this.compareAnswers(value);
      });
  }

  onGameStateChange(value: boolean) {
    if (!value) {
      this.gameModeService.resetValues();
      this.mistakesArray = [];
      this.rightAnswersArray = [];
    }
    this.gameState = value;
  }

  showAndHideResults() {
    this.resultsAreShown = !this.resultsAreShown;
    setTimeout(() => {
      this.resultsAreShown = !this.resultsAreShown;
    }, 7000);
  }

  redirectToHome() {
    setTimeout(() => {
      this.router.navigateByUrl('/');
    }, 7000);
  }

  startGameRound() {
    if (this.gameModeService.questionCounter > 7) {
      this.showAndHideResults();
      this.redirectToHome();
      return;
    }
    this.gameModeService.roundState.next(true);
    this.gameModeService.questionAudio =
      this.gameModeService.questionIndexes[
        this.gameModeService.questionCounter
      ];
    this.playSound(
      this.categoryWords.sounds[this.gameModeService.questionAudio],
      1
    );
  }

  compareAnswers(userAnswer: number) {
    if (userAnswer === -1 || this.rightAnswersArray.includes(userAnswer)) {
      return;
    }

    if (userAnswer === this.gameModeService.questionAudio) {
      this.playSound('/assets/sounds/sound-correct.wav', 0.1);
      this.rightAnswersArray.push(userAnswer);
      this.gameModeService.questionCounter++;
      this.startGameRound();
    } else if (userAnswer !== this.gameModeService.questionAudio) {
      if (this.mistakesArray[this.mistakesArray.length - 1] === userAnswer) {
        this.playSound(
          this.categoryWords.sounds[this.gameModeService.questionAudio],
          1
        );
      } else {
        this.playSound('/assets/sounds/sound-wrong.wav', 0.1);
        this.mistakesArray.push(userAnswer);
      }
    }
  }

  playSound(audioSource: string, audioVolume: number) {
    let audio = new Audio();
    audio.src = audioSource;
    audio.volume = audioVolume;
    audio.load();
    setTimeout(() => audio.play(), 300);
  }
}
