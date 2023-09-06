import { Component } from '@angular/core';
import { InformacionCultura } from 'src/app/services/informacion.service';
import { InformacionService } from 'src/app/services/informacion.service';

@Component({
  selector: 'app-culture-details',
  templateUrl: './culture-details.component.html',
  styleUrls: ['./culture-details.component.css']
})
export class CultureDetailsComponent {

  informacion:InformacionCultura[] = []

  constructor ( private _infoService: InformacionService) {
    this.informacion = this._infoService.getInfo();
    console.log(this.informacion);
  }

  
}
