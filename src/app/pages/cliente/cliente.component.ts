import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from './../../_services/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'apellido', 'telefono', 'email', 'direccion','acciones'];
  dataSource: any[];

  constructor(private clienteService: ClienteService,
              public route: ActivatedRoute,
              private snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit(): void {
    this.clienteService.mensajeCambio.subscribe(data => {
      this.openSnackBar(data);
    });
    /**
     * Listar automáticamente los datos
     */
    this.clienteService.listar().subscribe(res => {
      this.dataSource = res;
      console.log(res)
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

}
