import { Component } from '@angular/core';
import { InformacionCultura } from 'src/app/services/informacion.service';
import { ActivatedRoute } from '@angular/router';
import { InformacionService } from 'src/app/services/informacion.service';


@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent {

  receta:any = {};

  constructor ( private activatedRoute: ActivatedRoute, private _infoService: InformacionService ) {
    this.activatedRoute.params.subscribe( params => {
      this.receta = this._infoService.getReceta( params['id'] );
    });
  }
}
