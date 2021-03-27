import { ProductoService } from './../../_services/producto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'precio', 'stock'];
  dataSource: any[];

  constructor(private productoService: ProductoService,
              public route: ActivatedRoute,
              private snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit(): void {
    this.productoService.mensajeCambio.subscribe(data => {
      this.openSnackBar(data);
    });
    /**
     * Listar automaticamente los datos
     */
    this.productoService.listar().subscribe(res => {
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
