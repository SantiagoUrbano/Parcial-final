import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CultureDetailsComponent } from './components/culture-details/culture-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';
import { CulturasService } from './services/culturas.service';
import { ResturantDetailComponent } from './components/resturant-detail/resturant-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CultureDetailsComponent,
    ProductListComponent,
    ProductDetailComponent,
    RecetasComponent,
    RestaurantesComponent,
    ResturantDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CulturasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
