import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppStyleService {
  menuIsOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  logMenuStatus() {
    console.log('menu status from service: ' + this.menuIsOpen.value);
  }
}
