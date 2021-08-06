import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppStyleService } from 'src/app/services/app-style.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Disposable } from 'src/interfaces/disposable';

@Component({
  selector: 'app-mode-toggleswitch',
  templateUrl: './mode-toggleswitch.component.html',
  styleUrls: ['./mode-toggleswitch.component.scss'],
})
export class ModeToggleswitchComponent extends Disposable implements OnInit {
  gameState: boolean;

  constructor(private appStyleService: AppStyleService) {
    super();
  }

  ngOnInit(): void {
    this.appStyleService.gameIsStarted
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((value) => this.onGameStateChange);
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
