import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'register-comp',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    OnDestroy,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  @Input() name;

  constructor() {
    console.log('CONSTRUCTOR');
  }

  myName = 'Default Name';
  myVarName = 'Nombre de Usuario o Correo';
  myVarLastName = 'Contraseña';

  ngOnChanges(changes: any) {
    console.log('ON CHANGES', changes);
  }

  ngOnInit() {
    console.log('ON INIT');
  }

  ngDoCheck() {
    console.log('DO CHECK');
  }

  ngOnDestroy() {
    console.log('ON DESTROY');
  }

  ngAfterContentInit() {
    console.log('CONTENT INIT');
  }

  ngAfterContentChecked() {
    console.log('CONTENT CHECKED');
  }

  ngAfterViewInit() {
    console.log('VIEW INIT');
  }

  ngAfterViewChecked() {
    console.log('VIEW CHECKED');
  }
}
