import { CategoriasComponent } from './pages/categorias/categorias.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';
import { CremasComponent } from './subpages/cremas/cremas.component';
import { PinturaLabiosComponent } from './subpages/pintura-labios/pintura-labios.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'producto-detalle/:id', component: ProductoDetalleComponent },
  { path: 'home', component: HomeComponent },
  {path:'categorias', component: CategoriasComponent,
children:[
  { path: 'cremas', component: CremasComponent },
  { path: 'pinturaDeLabios', component: PinturaLabiosComponent },
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
