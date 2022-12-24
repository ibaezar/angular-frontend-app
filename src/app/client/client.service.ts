import { Client } from './client';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Constants } from '../utils/constants';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

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
    private constants: Constants,
    private router: Router
  ) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.urlEndpoint);
  }

  create(client: Client): Observable<Client>{
    return this.http.post<Client>(this.urlEndpointCreateClient, client, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        swal.fire('Error al crear al cliente', e.error.message, 'error');
        return throwError(() => {
          new Error(e);
        });
      })
    );
  }

  update(client: Client): Observable<Client>{
    return this.http.put<Client>(`${this.urlEndpointClientEdit}/${client.id}`, client, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        swal.fire('Error al editar al cliente', e.error.message, 'error');
        return throwError(() => {
          new Error(e);
        });
      })
    );
  }

  delete(id: number): Observable<Client>{
    return this.http.delete<Client>(`${this.urlEndpointClientDelete}/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/clientes']);
        swal.fire('Error al eliminar al cliente', e.error.message, 'error');
        return throwError(() => {
          new Error(e);
        });
      })
    );
  }

  getClient(id: any): Observable<Client>{
    return this.http.get<Client>(`${this.urlEndpointClientDetail}/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/clientes']);
        swal.fire('Error al obtener al cliente', e.error.message, 'error');
        return throwError(() => {
          new Error(e);
        });
      })
    );
  }

}
