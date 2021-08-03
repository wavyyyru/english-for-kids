import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppStyleService } from 'src/app/services/app-style.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-mode-toggleswitch',
  templateUrl: './mode-toggleswitch.component.html',
  styleUrls: ['./mode-toggleswitch.component.scss'],
})
export class ModeToggleswitchComponent implements OnInit, OnDestroy {
  gameState: boolean;
  componentDestroyed$: Subject<boolean> = new Subject();

  constructor(private appStyleService: AppStyleService) {}

  ngOnInit(): void {
    this.appStyleService.gameIsStarted
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((value) => this.onGameStateChange);
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete();
  }

  toggleMode() {
    this.appStyleService.gameIsStarted.next(
      !this.appStyleService.gameIsStarted.value
    );
  }

  onGameStateChange = (value: boolean) => {
    this.gameState = value;
  };
}
