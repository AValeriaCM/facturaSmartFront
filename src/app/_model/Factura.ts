import { Detalle } from './Detalle';
import { Cliente } from './Cliente';
export class Factura{
    num_factura: number;
    id_cliente: Cliente;
    fecha: Date;
    detalle: Detalle;
}