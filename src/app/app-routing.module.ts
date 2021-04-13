import { CategoriasComponent } from './pages/categorias/categorias.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';
import { CremasComponent } from './subpages/cremas/cremas.component';
import { BaseComponent } from './subpages/base/base.component';
import { BrochaComponent } from './subpages/brocha/brocha.component';
import { CorrectorComponent } from './subpages/corrector/corrector.component';
import { DelineadorComponent } from './subpages/delineador/delineador.component';
import { DesmaquilladorComponent } from './subpages/desmaquillador/desmaquillador.component';
import { FraganciaComponent } from './subpages/fragancia/fragancia.component';
import { GelComponent } from './subpages/gel/gel.component';
import { LabialComponent } from './subpages/labial/labial.component';
import { LocionComponent } from './subpages/locion/locion.component';
import { RuborComponent } from './subpages/rubor/rubor.component';
import { SombraComponent } from './subpages/sombra/sombra.component';
import { SprayComponent } from './subpages/spray/spray.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'producto-detalle/:id', component: ProductoDetalleComponent },
  { path: 'home', component: HomeComponent },
  {path:'categorias', component: CategoriasComponent,
children:[
  { path: 'cremas', component: CremasComponent },
  { path: 'gel', component: GelComponent },
  { path: 'lociones', component: LocionComponent },
  { path: 'sombras', component: SombraComponent },
  { path: 'brochas', component: BrochaComponent },
  { path: 'rubor', component: RuborComponent },
  { path: 'correctores', component: CorrectorComponent },
  { path: 'delineadores', component: DelineadorComponent },
  { path: 'labiales', component: LabialComponent },
  { path: 'bases', component: BaseComponent },
  { path: 'desmaquilladores', component: DesmaquilladorComponent },
  { path: 'sprays', component: SprayComponent },
  { path: 'fragancias', component: FraganciaComponent },

]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
