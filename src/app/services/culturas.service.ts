import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CulturasService {

  private culturas:Culturas[] = [
    {
      imageUrl: "https://turismo.org/wp-content/uploads/2015/05/5920980139_a4308eeaaa_z.jpg",
      cultura: "Francesa",
      descripcion: "La cultura gastronómica francesa es ampliamente reconocida en todo el mundo por su sofisticación y diversidad. La cocina francesa se caracteriza por su enfoque en ingredientes frescos y de alta calidad, así como por su atención al detalle en la presentación de los platos.",
      platosRepresentativos: "El Cassoulet, Foie Gras, La Mouclade de Charente, Crepes bretones"
    },
    {
      imageUrl: "https://www.estaentumundo.com/wp-content/imagenes/2020/12/comida-mexicana-749x500.jpg",
      cultura: "Mexicana",
      descripcion: "La cultura gastronómica mexicana es muy rica y diversa, reconocida a nivel mundial por su variedad de sabores, ingredientes y técnicas culinarias. La comida mexicana se caracteriza por ser colorida, picante y llena de sabores intensos.",
      platosRepresentativos: "Tacos, Burritos, Guacamole y pico de gallo, Enchiladas"
    },
    {
      imageUrl: "https://viajandoporjapon.com/wp-content/uploads/2017/10/34977741931_1515cfcd49_h-1024x684.jpg",
      cultura: "Japonesa",
      descripcion: "La cultura gastronómica japonesa es conocida por su variedad, elegancia y atención a los detalles. La comida japonesa se caracteriza por el uso de ingredientes frescos y de temporada, así como por técnicas de preparación cuidadosas. Algunos platos populares incluyen sushi, sashimi, ramen, tempura y okonomiyaki.",
      platosRepresentativos: "Ramen, Sushi, Tempura, Okonomiyaki"
    },
    {
      imageUrl: "https://arriendo.com/wp-content/uploads/2020/07/gastronomia-colombiana-scaled.jpg",
      cultura: "Colombiana",
      descripcion: "La cultura gastronómica colombiana es muy diversa y se caracteriza por la influencia de las diferentes regiones del país, así como por la mezcla de ingredientes indígenas, africanos y españoles. Algunos platos típicos incluyen la bandeja paisa, el ajiaco, el sancocho, las arepas, el arroz con coco, el lechón asado, entre otros.",
      platosRepresentativos: "Bandeja paisa, Empanada, Ajiaco, Arepa"
    },
    {
      imageUrl: "https://elviajerofeliz.com/wp-content/uploads/2021/10/cultura-de-estados-unidos-5.jpg",
      cultura: "Americana",
      descripcion: "La cultura gastronómica americana es extremadamente diversa debido a la influencia de diferentes grupos étnicos y regiones geográficas en los Estados Unidos. La cocina americana ha evolucionado a lo largo de los años y ha adoptado elementos de la cocina indígena, africana, europea, asiática y latinoamericana.",
      platosRepresentativos: "Barbacoa, donuts, pizza, hotdog"
    },
    {
      imageUrl: "https://www.tandemmadrid.com/es/wp-content/uploads/sites/4/gastronomia-espana-cabecera.jpg",
      cultura: "Española",
      descripcion: "La cultura gastronómica española es muy rica y variada, con una amplia diversidad de platos y sabores que varían según la región. La cocina española es conocida por su uso de ingredientes frescos y de calidad, así como por su enfoque en técnicas culinarias tradicionales.",
      platosRepresentativos: "Paella, Gaspacho, Jamon ibérico, tortilla española"
    },
  ]
  
  constructor() {
    console.log("Servicio para pintar los elementos")
  }

  getCultura() {
    return this.culturas;
  }
  
}

export interface Culturas {
  imageUrl: string;
  cultura: string;
  descripcion: string;
  platosRepresentativos: string;
}