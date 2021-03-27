import { Detalle } from './../_model/Detalle';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {

    private url: any = `${environment.HOST}detalles`;

    mensajeCambio = new Subject<string>();
  
    constructor(private http: HttpClient) { }
  
    listar(){
      return this.http.get<Detalle[]>(`${this.url}listar`);
    }
  
    guardar(detalle: Detalle){
      return this.http.post(`${this.url}guardar`, detalle);
    }
  
    editar(detalle: Detalle){
      return this.http.put(`${this.url}editar`, detalle);
    }
  
    eliminar(idDetalle: number){
      return this.http.delete<Detalle>(`${this.url}eliminar/${idDetalle}`);
    }
}
