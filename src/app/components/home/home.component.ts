import { Component } from '@angular/core';
import { Culturas, CulturasService } from 'src/app/services/culturas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  culturas:Culturas[] = []

  constructor ( private _culturasService: CulturasService ) {
    this.culturas = this._culturasService.getCultura();
    console.log(this.culturas);
  }
}
