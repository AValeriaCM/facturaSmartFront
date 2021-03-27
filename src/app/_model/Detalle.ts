import { Producto } from './Producto';
import { Factura } from './Factura';
export class Detalle {
    num_detalle: number;
    id_factura: Factura;
    id_producto: Producto;
    cantidad: number;
    precio: number;
}