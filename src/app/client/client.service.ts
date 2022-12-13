import { Client } from './client';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private urlEndpoint: string = 'http://localhost:8080/api/clientes/listar';
  private urlEndpointCreateClient: string = 'http://localhost:8080/api/clientes/crear';
  private urlEndpointClientDetail: string = 'http://localhost:8080/api/clientes/detalle';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private http: HttpClient
  ) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.urlEndpoint);
  }

  create(client: Client): Observable<Client>{
    return this.http.post<Client>(this.urlEndpointCreateClient, client, {headers: this.httpHeaders});
  }

  getClient(id: any): Observable<Client>{
    return this.http.get<Client>(`${this.urlEndpointClientDetail}/${id}`)
  }

}
