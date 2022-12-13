import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from './client';
import { ClientService } from './client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {

  public title: string = "Formulario de clientes";
  public subtitle: string = "Crear cliente";
  public client: Client = new Client();

  constructor(
    private clientService: ClientService,
    private router: Router
  ){}

  public create(): void {
    this.clientService.create(this.client).subscribe(
      response => {
        this.router.navigate(['/clientes'])
        Swal.fire('Cliente creado', `Cliente ${this.client.name} creado con éxito`, 'success');
      }
    );
  }

}
