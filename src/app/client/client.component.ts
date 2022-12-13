import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { ClientService } from './client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  title: string = "Listado de clientes"

  clients: Client[] = [];

  constructor(
    private clientService: ClientService
    ){}

  ngOnInit() {
    this.clientService.getClients().subscribe(
      clients => this.clients = clients
    );  
  }

  delete(client: Client): void{
    Swal.fire({
      title: 'Está seguro?',
      text: `Desea eliminar al cliente ${client.name} ${client.lastname}!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clientService.delete(client.id).subscribe(
          response => {
            this.clients = this.clients.filter( resp => resp !== client)
            Swal.fire(
              'Eliminado!',
              `El cliente ${client.name} ha sido eliminado correctamente!`,
              'success'
            )
          }
        );
      }
    })
  }
}
