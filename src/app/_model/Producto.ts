import { Detalle } from './Detalle';
export class Producto{
    id_producto: number;
    nombre: string;
    precio: number;
    stock: number;
    detalle: Detalle;
}