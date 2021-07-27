import { Component, Input, OnInit } from '@angular/core';
import { CategoryWords } from 'src/models/category.interface';

@Component({
  selector: 'app-word-card',
  templateUrl: './word-card.component.html',
  styleUrls: ['./word-card.component.scss'],
})
export class WordCardComponent implements OnInit {
  @Input()
  categoryWords: CategoryWords;
  @Input()
  wordCounter: number;
  constructor() {}

  ngOnInit(): void {}
}
