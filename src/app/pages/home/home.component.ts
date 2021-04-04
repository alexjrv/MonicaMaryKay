import { InfoService } from './../../services/info.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbNavConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
resultados:any[]=[]
  listaProductos: any[] = []
  term:any;
  nav: any;
  page = 1;
  count = 0;
  tableSize = 9;
  tableSizes = [3, 6, 9, 12];
  currentIndex:any
  active = 1;
  loading = false;


  constructor(private infoService: InfoService,
    private router: Router){}


  ngOnInit(): void {
    this.obtenerProductos();

  }
  obtenerProductos() {
    this.loading = false;
    this.resultados = this.infoService.getProducts();
    this.loading = true;
  }
  verProducto(id: number) {
    this.router.navigate(['/producto-detalle', id]);
  }
  onTableDataChange(event:any){
    this.page = event;
    this.loading = false;
    this.obtenerProductos();
    this.loading = true;
  }

  onTableSizeChange(event:any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.obtenerProductos();

  }
buscar(termino:string){
  this.loading = false;
 this.resultados = this.infoService.buscarProductos(termino);
  this.loading = true;
}

}