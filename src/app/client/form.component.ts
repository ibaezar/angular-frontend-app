import { Component } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {

  public title: string = "Crear cliente";
  public client: Client = new Client();

  public create(): void {
    console.log("Data Client", this.client);
  }

}
