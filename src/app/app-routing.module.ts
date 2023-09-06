import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CultureDetailsComponent } from './components/culture-details/culture-details.component';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent},
  { path: 'Culturas', component: CultureDetailsComponent},
  { path: 'Restaurantes', component: RestaurantesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
