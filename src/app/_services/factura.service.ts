import { Factura } from './../_model/Factura';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private url: any = `${environment.HOST}facturas/`;

  mensajeCambio = new Subject<string>();

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any>(`${this.url}listar`);
  }

  guardar(factura: Factura){
    return this.http.post(`${this.url}guardar`, factura);
  }

  editar(factura: Factura){
    return this.http.put(`${this.url}editar`, factura);
  }

  eliminar(idFactura: number){
    return this.http.delete<Factura>(`${this.url}eliminar/${idFactura}`);
  }
}
