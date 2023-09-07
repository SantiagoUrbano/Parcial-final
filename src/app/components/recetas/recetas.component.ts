import { Component } from '@angular/core';
import { InformacionCultura } from 'src/app/services/informacion.service';
import { ActivatedRoute } from '@angular/router';
import { InformacionService } from 'src/app/services/informacion.service';
import { RecetasinfoService } from 'src/app/services/recetasinfo.service';


@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent {

  receta:any = {};

  constructor ( private activatedRoute: ActivatedRoute, private _infoReceta: RecetasinfoService) {
    this.activatedRoute.params.subscribe( params => {
      this.receta = this._infoReceta.getReceta( params['id'] );
    });
  }
}
