import { Cliente } from './../../../_model/Cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClienteService } from './../../../_services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregarcliente',
  templateUrl: './agregarcliente.component.html',
  styleUrls: ['./agregarcliente.component.scss']
})
export class AgregarclienteComponent implements OnInit {

  selectedValue: any;
  form: FormGroup;
  valorSelect: string;
  ciudadSelect: string;
  private id: number;
  private edicion: boolean;

  constructor(private clienteService: ClienteService,
              private snackBar: MatSnackBar,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.inicializarFormularioVacio();
  }

  inicializarFormularioVacio(){
    /**
     * Inicializar campos vacíos
     */
    this.form = new FormGroup({
      'nombre': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      'apellido': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      'direccion': new FormControl('', [Validators.required]),
      'fecha_nacimiento': new FormControl('', [Validators.required]),
      'telefono': new FormControl('', [Validators.required, Validators.maxLength(10)]),
      'email': new FormControl('', [Validators.required, Validators.email]),
    });
  }
/**
 * Metodo para insertar datos
 */
  guardar() {
    let cliente = new Cliente();
    cliente.nombre = this.form.value['nombre'];
    cliente.apellido = this.form.value['apellido'];
    cliente.direccion = this.form.value['direccion'];
    cliente.telefono = this.form.value['telefono'];
    cliente.fecha_nacimiento = this.form.value['fecha_nacimiento'];
    cliente.email = this.form.value['email'];
/**
 * Implementar servicio guardar
 */
      this.clienteService.guardar(cliente).subscribe(() => {
        this.form.reset();
        this.clienteService.mensajeCambio.next('Cliente guardado satisfactoriamente');
        this.router.navigate(['/cliente']);
      });
      console.log('INGRESA GUARDAR');
    

  }
/**
 * Metodos get
 */
  get nombre() {
    return this.form.get('nombre');
  }
  get apellido() {
    return this.form.get('apellido');
  }
  get direccion() {
    return this.form.get('direccion');
  }
  get telefono() {
    return this.form.get('telefono');
  }
  get email() {
    return this.form.get('email');
  }
  get fecha_nacimiento() {
    return this.form.get('fecha_nacimiento');
  }
}
