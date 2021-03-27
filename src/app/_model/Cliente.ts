import { Factura } from './Factura';
export class Cliente{
    id_cliente: number;
    nombre: string;
    apellido: string;
    direccion: string;
    fecha_nacimiento: Date;
    telefono: number;
    email: string;
    factura: Factura;
}