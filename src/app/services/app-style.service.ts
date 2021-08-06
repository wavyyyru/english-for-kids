import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppStyleService {
  menuIsOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  gameIsStarted: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}
