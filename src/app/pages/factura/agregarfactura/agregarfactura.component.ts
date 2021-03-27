import { ProductoService } from './../../../_services/producto.service';
import { Producto } from './../../../_model/Producto';
import { Detalle } from './../../../_model/Detalle';
import { Factura } from './../../../_model/Factura';
import { Cliente } from './../../../_model/Cliente';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DetalleService } from './../../../_services/detalle.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from './../../../_services/cliente.service';
import { FacturaService } from './../../../_services/factura.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-agregarfactura',
  templateUrl: './agregarfactura.component.html',
  styleUrls: ['./agregarfactura.component.scss']
})
export class AgregarfacturaComponent implements OnInit {

  selectedValue: any;
  form: FormGroup;
  dataSource: MatTableDataSource<Cliente>;
  dataSourceProductos: MatTableDataSource<Producto>;
  displayedColumns: string[] = ['fecha','cliente'];
  //dataSource: any[];
  listaClientes: Cliente[];
  listaProductos: Producto[];
  clienteSelect: string;
  productoSelect: string;
  valorSelect: string;
  idFactura: number;

  constructor(private facturaService: FacturaService,
    private clienteService: ClienteService,
    private detalleService: DetalleService,
    private productoService: ProductoService,
    public route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.facturaService.mensajeCambio.subscribe(data => {
      this.openSnackBar(data);
    });
    this.inicializarFormularioVacio();
  }

  inicializarFormularioVacio(){
    /**
     * Inicializar campos vacíos
     */
    this.form = new FormGroup({
      'cliente': new FormControl('', [Validators.required]),
      'fecha': new FormControl('', [Validators.required]),
      'cantidad': new FormControl('', [Validators.required]),
      'precio': new FormControl('', [Validators.required]),
      'producto': new FormControl('', [Validators.required])
    });
    /**
     * Listar automáticamente los datos
     */
    this.clienteService.listar().subscribe(data => {
      this.listaClientes = data;
    });
    /**
     * Listar automáticamente los datos
     */
    this.productoService.listar().subscribe(data => {
      this.listaProductos = data;
    });
  }
  /**
   * Mensaje snackbar
   * @param message 
   */
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Información', {
      duration: 3000,
    });
  }

  /**
   * Metodo insertar factura
   */
  guardar(){
    let factura = new Factura();
    factura.fecha = this.form.value['fecha'];
    
    let cliente = new Cliente();
    cliente.id_cliente = this.form.value['cliente'];

    let detalle = new Detalle();
    detalle.cantidad = this.form.value['cantidad'];
    detalle.precio = this.form.value['precio'];
    detalle.id_factura = factura;
    
    let producto = new Producto();
    producto.id_producto = this.form.value['producto'];

    detalle.id_producto = producto;

    cliente.factura = factura;
    factura.detalle = detalle;

    /**
     * Implementacion servicio guardar
     */
    this.facturaService.guardar(factura).subscribe(() => {
      this.facturaService.mensajeCambio.next('Factura registrada satisfactoriamente');
      
    });
    console.log(detalle);
    /**
     * Implementacion servicio guardar
     */
    this.detalleService.guardar(detalle).subscribe(() => {
      this.detalleService.mensajeCambio.next('Factura registrada satisfactoriamente');
      
    });
    /**
     * Implementacion servicio guardar
     */
    this.facturaService.guardar(factura).subscribe(() => {
      this.form.reset();
      console.log(factura);
      this.facturaService.mensajeCambio.next('Factura registrada satisfactoriamente');
      this.router.navigate(['/factura']);
    });
    console.log(factura);
  }
  /**
   * 
   * @param event 
   */
  seleccionarCliente(event: Event) {
    this.clienteSelect = (event.target as HTMLSelectElement).value;
  }
/**
 * 
 * @param event 
 */
  seleccionarProducto(event: Event) {
    this.productoSelect = (event.target as HTMLSelectElement).value;
  }

/**
 * Metodos get
 */
  get fecha() {
    return this.form.get('fecha');
  }
  get cliente(){
    return this.form.get('cliente');
  }
  get producto(){
    return this.form.get('producto');
  }
  get cantidad(){
    return this.form.get('cantidad');
  }
  get precio(){
    return this.form.get('precio');
  }
}
