import { Client } from './client';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private urlEndpoint: string = this.constants.URL_API+'/api/clientes/listar';
  private urlEndpointCreateClient: string = this.constants.URL_API+'/api/clientes/crear';
  private urlEndpointClientDetail: string = this.constants.URL_API+'/api/clientes/detalle';
  private urlEndpointClientEdit: string = this.constants.URL_API+'/api/clientes/editar';
  private urlEndpointClientDelete: string = this.constants.URL_API+'/api/clientes/eliminar';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private http: HttpClient,
    private constants: Constants
  ) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.urlEndpoint);
  }

  create(client: Client): Observable<Client>{
    return this.http.post<Client>(this.urlEndpointCreateClient, client, {headers: this.httpHeaders});
  }

  update(client: Client): Observable<Client>{
    return this.http.put<Client>(`${this.urlEndpointClientEdit}/${client.id}`, client, {headers: this.httpHeaders});
  }

  delete(id: number): Observable<Client>{
    return this.http.delete<Client>(`${this.urlEndpointClientDelete}/${id}`)
  }

  getClient(id: any): Observable<Client>{
    return this.http.get<Client>(`${this.urlEndpointClientDetail}/${id}`)
  }

}
