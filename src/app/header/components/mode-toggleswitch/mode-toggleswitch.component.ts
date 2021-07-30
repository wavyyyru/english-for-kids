import { Component, OnInit } from '@angular/core';
import { AppStyleService } from 'src/app/services/app-style.service';
// import { Disposable } from 'src/interfaces/disposable.interface';
// import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-mode-toggleswitch',
  templateUrl: './mode-toggleswitch.component.html',
  styleUrls: ['./mode-toggleswitch.component.scss'],
})
//extends Disposable
export class ModeToggleswitchComponent implements OnInit {
  gameState: boolean;

  constructor(private appStyleService: AppStyleService) {}

  ngOnInit(): void {
    this.appStyleService.gameIsStarted.subscribe((value) =>
      this.onGameStateChange(value)
    );
  }

  toggleMode() {
    this.appStyleService.gameIsStarted.next(
      !this.appStyleService.gameIsStarted.value
    );
  }

  onGameStateChange(value: boolean) {
    this.gameState = value;
  }
}
