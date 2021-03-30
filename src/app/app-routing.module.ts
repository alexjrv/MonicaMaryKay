import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'producto-detalle/:id', component: ProductoDetalleComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
