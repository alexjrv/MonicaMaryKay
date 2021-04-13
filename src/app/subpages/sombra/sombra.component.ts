import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-sombra',
  templateUrl: './sombra.component.html',
  styleUrls: ['./sombra.component.scss']
})
export class SombraComponent implements OnInit {

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
  constructor(private infoService:InfoService,
              private router:Router) { }

  ngOnInit(): void {
    this.getAllSombras();
  }
  onTableSizeChange(event:any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    // this.obtenerProductos();
  }
  onTableDataChange(event:any){
    this.page = event;
    // this.obtenerProductos();
  }
  verProducto(id: number) {
    this.router.navigate(['/producto-detalle', id]);
  }
  getAllSombras(){
    this.loading = false;
    this.resultados = this.infoService.getSombras();
    this.loading = true;
  }
}
