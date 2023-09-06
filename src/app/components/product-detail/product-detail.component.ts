import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InformacionService } from 'src/app/services/informacion.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  productDetail:any = {};

  constructor ( private activatedRoute: ActivatedRoute, private _infoService: InformacionService ) {
    this.activatedRoute.params.subscribe( params => {
      this.productDetail = this._infoService.getReceta( params['id'] );
    });
  }
}
