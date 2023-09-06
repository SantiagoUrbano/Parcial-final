import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecetasinfoService {

  private recetas:Recetasinfo[] = [
    {
    nombre: "",
    descripcion: "",
    imagenUrl: "",
    videoUrl: ""
    }
  ]
  
  
  
  constructor() { }
}

export interface Recetasinfo {
  nombre: string;
  descripcion: string;
  imagenUrl: string;
  videoUrl: string;
}