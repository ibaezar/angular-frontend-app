import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  button: string = 'Ir al código fuente ';
  linkCode: string = 'https://github.com/ibaezar/angular-frontend-app';

}
