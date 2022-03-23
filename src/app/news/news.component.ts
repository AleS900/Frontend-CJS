import { Component, Input } from '@angular/core';

@Component({
  selector: 'news-comp',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {
  @Input() name;

  constructor() {
    console.log('CONSTRUCTOR');
  }
}
