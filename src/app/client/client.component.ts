import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { ClientService } from './client.service';

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
}
