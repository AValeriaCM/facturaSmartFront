import { Producto } from './../_model/Producto';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url: any = `${environment.HOST}productos`;

  mensajeCambio = new Subject<string>();

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Producto[]>(`${this.url}listar`);
  }

  guardar(producto: Producto){
    return this.http.post(`${this.url}guardar`, producto);
  }

  editar(producto: Producto){
    return this.http.put(`${this.url}editar`, producto);
  }

  eliminar(idProducto: number){
    return this.http.delete<Producto>(`${this.url}eliminar/${idProducto}`);
  }
}
