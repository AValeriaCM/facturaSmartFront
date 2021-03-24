import { AgregarproductoComponent } from './pages/producto/agregarproducto/agregarproducto.component';
import { AgregarclienteComponent } from './pages/cliente/agregarcliente/agregarcliente.component';
import { AgregarfacturaComponent } from './pages/factura/agregarfactura/agregarfactura.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { FacturaComponent } from './pages/factura/factura.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'factura', component: FacturaComponent,  children : [
    {path: 'agregarfactura', component: AgregarfacturaComponent},
  ] },
  { path: 'cliente', component: ClienteComponent, children : [
    {path: 'agregarcliente', component: AgregarclienteComponent},
  ] },
  { path: 'producto', component: ProductoComponent, children : [
    {path: 'agregarproducto', component: AgregarproductoComponent},
  ] },
  { path: '', component: FacturaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
