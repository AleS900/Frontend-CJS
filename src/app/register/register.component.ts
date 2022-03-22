import {Component, Input} from '@angular/core';

@Component({
  selector: 'register-comp',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent{
  @Input() name;

  constructor() {
    console.log('CONSTRUCTOR');
  }

}
