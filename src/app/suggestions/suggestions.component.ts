import { Component, Input } from '@angular/core';

@Component({
  selector: 'suggestions-comp',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css'],
})
export class SuggestionComponent {
  @Input() name;

  constructor() {
    console.log('CONSTRUCTOR');
  }
}
