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
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'main-comp, mat-toolbar-row,mat-toolbar',
  exportAs:'matToolbarRow,matToolbar',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent
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

  test3(event) {
    console.log('Event click: ', event);
    console.log('DATA: ', this.myVarName + ' ' + this.myVarLastName);
    this.myName = this.myVarName + ' ' + this.myVarLastName;
  }

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
