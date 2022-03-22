import { Component,Input} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'main-comp, mat-toolbar-row,mat-toolbar',
  exportAs:'matToolbarRow,matToolbar',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent{
  @Input() name;

  constructor() {
    console.log('CONSTRUCTOR');
  }

}
