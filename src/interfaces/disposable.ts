import { Directive, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Directive()
export abstract class Disposable implements OnDestroy {
  componentDestroyed$: Subject<boolean> = new Subject();

  ngOnDestroy(): void {
    debugger;
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete();
  }
}
