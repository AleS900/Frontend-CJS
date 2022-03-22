import { Component, Input } from '@angular/core';

@Component({
  selector: 'login-comp',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @Input() name;

  constructor() {
    console.log('CONSTRUCTOR');
  }

  myName = 'Default Name';
  myVarName = 'Nombre de Usuario o Correo';
  myVarLastName = 'Contraseña';

  test3(event) {
    console.log('Event click: ', event);
    console.log('DATA: ', this.myVarName + ' ' + this.myVarLastName);
    this.myName = this.myVarName + ' ' + this.myVarLastName;
  }
}
