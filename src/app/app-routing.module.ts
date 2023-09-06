import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CultureDetailsComponent } from './components/culture-details/culture-details.component';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ResturantDetailComponent } from './components/resturant-detail/resturant-detail.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent},
  { path: 'Culturas', component: CultureDetailsComponent},
  { path: 'Restaurantes', component: RestaurantesComponent},
  { path: 'Culturas/recetas/:id', component: RecetasComponent},
  { path: 'Culturas/producto/:id', component: ProductDetailComponent},
  { path: 'Culturas/restaurante/:id', component: ResturantDetailComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'Home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
