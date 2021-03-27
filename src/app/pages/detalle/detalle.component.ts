import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalleService } from './../../_services/detalle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  displayedColumns: string[] = ['documento', 'nombre', 'apellido', 'correo'];

  constructor(private detalleService: DetalleService,
              public route: ActivatedRoute,
              private snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit(): void {
    this.detalleService.mensajeCambio.subscribe(data => {
      this.openSnackBar(data);
    });
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Información', {
      duration: 3000,
    });
  }

}
