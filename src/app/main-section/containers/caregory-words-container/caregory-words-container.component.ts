import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppStyleService } from 'src/app/services/app-style.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { GameModeService } from 'src/app/services/game-mode.service';
import { CategoryWords } from 'src/models/category.interface';

@Component({
  selector: 'app-caregory-words-container',
  templateUrl: './caregory-words-container.component.html',
  styleUrls: ['./caregory-words-container.component.scss'],
})
export class CaregoryWordsContainerComponent implements OnInit, OnDestroy {
  categoryWords: CategoryWords;
  gameState: boolean;
  mistakesArray: number[] = [];
  componentDestroyed$: Subject<boolean> = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoriesService: CategoriesService,
    private appStyleService: AppStyleService,
    private gameModeService: GameModeService
  ) {
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
      });
  }

  ngOnInit(): void {
    this.appStyleService.gameIsStarted
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((value) => this.onGameStateChange(value));

    this.gameModeService.currentAnswer
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((value) => {
        this.compareAnswers(value);
      });
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete();
  }

  onGameStateChange(value: boolean) {
    this.gameState = value;
  }

  startGameRound() {
    if (this.gameModeService.questionCounter > 7) {
      return;
    }
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
    if (userAnswer === -1) {
      return;
    }

    if (userAnswer === this.gameModeService.questionAudio) {
      this.playSound('/assets/sounds/sound-correct.wav', 0.1);
      this.gameModeService.questionCounter++;
      this.startGameRound();
    } else if (userAnswer !== this.gameModeService.questionAudio) {
      this.playSound('/assets/sounds/sound-wrong.wav', 0.1);
      this.mistakesArray.push(userAnswer);
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
