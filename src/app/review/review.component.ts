import { Component, Input } from '@angular/core';

@Component({
  selector: 'review-comp',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent {
  @Input() name;

  constructor() {
    console.log('CONSTRUCTOR');
  }
}
