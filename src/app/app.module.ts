import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { FacturaComponent } from './pages/factura/factura.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { HttpClientModule } from '@angular/common/http';
import { AgregarproductoComponent } from './pages/producto/agregarproducto/agregarproducto.component';
import { AgregarfacturaComponent } from './pages/factura/agregarfactura/agregarfactura.component';
import { AgregarclienteComponent } from './pages/cliente/agregarcliente/agregarcliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    FacturaComponent,
    ProductoComponent,
    AgregarproductoComponent,
    AgregarfacturaComponent,
    AgregarclienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
