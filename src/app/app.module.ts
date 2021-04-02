import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/shared/header/header.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { CremasComponent } from './subpages/cremas/cremas.component';
import { PinturaLabiosComponent } from './subpages/pintura-labios/pintura-labios.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductoDetalleComponent,
    CategoriasComponent,
    CremasComponent,
    PinturaLabiosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgbModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
