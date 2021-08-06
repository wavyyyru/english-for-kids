import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-results-screen',
  templateUrl: './results-screen.component.html',
  styleUrls: ['./results-screen.component.scss'],
})
export class ResultsScreenComponent {
  @Input()
  mistakesArray: number[];
}
