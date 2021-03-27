import { ClienteService } from './../../_services/cliente.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Factura } from './../../_model/Factura';
import { Cliente } from './../../_model/Cliente';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { FacturaService } from './../../_services/factura.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent implements OnInit {

  selectedValue: any;
  form: FormGroup;
  dataSource: MatTableDataSource<Factura>;
  displayedColumns: string[] = ['fecha', 'cliente'];

  constructor(private facturaService: FacturaService,
    public route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.facturaService.mensajeCambio.subscribe(data => {
      this.openSnackBar(data);
    });
    /**
     * Listar automáticamente los datos
     */
    this.facturaService.listar().subscribe(res => {
      console.log(res);
      this.dataSource = new MatTableDataSource(res);
    });
  }
  /**
   * Mensaje de snackbar
   */
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Información', {
      duration: 3000,
    });
  }
}
