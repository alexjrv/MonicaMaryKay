import { InfoService } from './../../services/info.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.scss']
})
export class ProductoDetalleComponent implements OnInit {
producto:any = {};
  constructor(private actRoute: ActivatedRoute,
              private info: InfoService) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe(params =>{
      this.producto = this.info.getProduct(params.id);
      console.log(this.producto)
    });
  }

}
