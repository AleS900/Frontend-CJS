import { Component, Input } from '@angular/core';

@Component({
  selector: 'main-comp',
  exportAs: 'matToolbarRow',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  @Input() name;

  constructor() {
    console.log('CONSTRUCTOR');
  }
}
