import { Cliente } from './../_model/Cliente';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url: any = `${environment.HOST}clientes`;

  mensajeCambio = new Subject<string>();

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Cliente[]>(`${this.url}listar`);
  }

  guardar(cliente: Cliente){
    return this.http.post(`${this.url}guardar`, cliente);
  }

  editar(cliente: Cliente){
    return this.http.put(`${this.url}editar`, cliente);
  }

  eliminar(idCliente: number){
    return this.http.delete<Cliente>(`${this.url}eliminar/${idCliente}`);
  }
}
