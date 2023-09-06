import { Component } from '@angular/core';
import { InformacionService } from 'src/app/services/informacion.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-resturant-detail',
  templateUrl: './resturant-detail.component.html',
  styleUrls: ['./resturant-detail.component.css']
})
export class ResturantDetailComponent {

  restauranteDetail:any = {};

  constructor ( private activatedRoute: ActivatedRoute, private _infoService: InformacionService ) {
    this.activatedRoute.params.subscribe( params => {
      this.restauranteDetail = this._infoService.getReceta( params['id'] );
    });
  }
}
