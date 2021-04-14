import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';


import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/shared/header/header.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { CremasComponent } from './subpages/cremas/cremas.component';
import { GelComponent } from './subpages/gel/gel.component';
import { LocionComponent } from './subpages/locion/locion.component';
import { SombraComponent } from './subpages/sombra/sombra.component';
import { BrochaComponent } from './subpages/brocha/brocha.component';
import { RuborComponent } from './subpages/rubor/rubor.component';
import { CorrectorComponent } from './subpages/corrector/corrector.component';
import { DelineadorComponent } from './subpages/delineador/delineador.component';
import { LabialComponent } from './subpages/labial/labial.component';
import { BaseComponent } from './subpages/base/base.component';
import { DesmaquilladorComponent } from './subpages/desmaquillador/desmaquillador.component';
import { MascarillaComponent } from './subpages/mascarilla/mascarilla.component';
import { SprayComponent } from './subpages/spray/spray.component';
import { FraganciaComponent } from './subpages/fragancia/fragancia.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductoDetalleComponent,
    CategoriasComponent,
    CremasComponent,
    GelComponent,
    LocionComponent,
    SombraComponent,
    BrochaComponent,
    RuborComponent,
    CorrectorComponent,
    DelineadorComponent,
    LabialComponent,
    BaseComponent,
    DesmaquilladorComponent,
    MascarillaComponent,
    SprayComponent,
    FraganciaComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgbModule,
    NgxPaginationModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ShareButtonsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
