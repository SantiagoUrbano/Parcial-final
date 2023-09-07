import { Component } from '@angular/core';
import { RESTAURANTE } from '../restaurante';
import { Restaurante } from '../mock-restaurantes';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})

export class RestaurantesComponent {

  restaurantes = Restaurante;
}
