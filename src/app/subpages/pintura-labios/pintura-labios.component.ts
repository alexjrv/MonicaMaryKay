import { Router } from '@angular/router';
import { InfoService } from 'src/app/services/info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pintura-labios',
  templateUrl: './pintura-labios.component.html',
  styleUrls: ['./pintura-labios.component.scss']
})
export class PinturaLabiosComponent implements OnInit {

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
  searching = false;
  constructor(private infoService:InfoService,
              private router:Router) { }

  ngOnInit(): void {
    this.getAllPinturaLabios();
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
  getAllPinturaLabios(){
    this.resultados = this.infoService.getPinturaLabios();
  }
}
