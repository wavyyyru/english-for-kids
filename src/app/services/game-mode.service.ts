import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameModeService {
  questionIndexes: number[] = [0, 1, 2, 3, 4, 5, 6, 7];
  questionAudio: number;
  questionCounter: number;
  currentAnswer: BehaviorSubject<number> = new BehaviorSubject<number>(-1);

  resetValues() {
    this.questionIndexes.sort((a, b) => 0.5 - Math.random());
    this.questionAudio = 0;
    this.questionCounter = 0;
    this.currentAnswer.next(-1);
  }
}
