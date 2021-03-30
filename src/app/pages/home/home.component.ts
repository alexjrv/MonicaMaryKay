import { InfoService } from './../../services/info.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private infoService:InfoService,
              private router: Router) { }
listaProductos:any[]=[]
term:any;
  ngOnInit(): void {
    this.obtenerProductos();

  }
  obtenerProductos(){
  this.listaProductos = this.infoService.getProducts();
  console.log(this.listaProductos);
}
verProducto(id:number){
this.router.navigate(['/producto-detalle',id]);
}
}
