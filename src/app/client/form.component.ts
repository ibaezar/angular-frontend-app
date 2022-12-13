import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from './client';
import { ClientService } from './client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit{

  public title: string = "Formulario de clientes";
  public subtitle: string = "Crear cliente";
  public client: Client = new Client();

  constructor(
    private clientService: ClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void{
    this.loadClient();
  }

  loadClient(): void{
    this.activatedRoute.params.subscribe(
      params => {
        let id = params['id']
        if(id){
          this.clientService.getClient(id).subscribe(
            client => this.client = client
          );
        }
      }
    );
  }

  public create(): void {
    this.clientService.create(this.client).subscribe(
      response => {
        this.router.navigate(['/clientes'])
        Swal.fire('Cliente creado', `Cliente ${this.client.name} creado con éxito`, 'success');
      }
    );
  }

  public update(){
    this.clientService.update(this.client).subscribe(
      response => Swal.fire('Cliente actualizado', `El cliente ${this.client.name} ha sido actualizado con éxito`, 'success')
    );
  }

}
