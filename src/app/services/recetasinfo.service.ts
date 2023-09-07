import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecetasinfoService {

  private recetas:Recetasinfo[] = [
    {
    nombre: "Ratatouille",
    descripcion: "es una especialidad culinaria de la región francesa de Provenza al sur de Francia. Es una receta que aprovecha al máximo las estrellas de la huerta veraniega ya que, entre sus ingredientes principales, cuenta con tomates, pimientos, calabacín y berenjena.",
    imagenUrl: "https://imag.bonviveur.com/ratatouille-confit-byaldi.webp",
    videoUrl: "https://www.youtube.com/watch?v=Dpbq9b4bWdI"
    },
    {
      nombre: "Tacos mexicanos",
      descripcion: "Como ya les conté en el ranking de las mejores comidas mexicanas, los tacos son el corazón de la comida mexicana.",
      imagenUrl: "https://www.paulinacocina.net/wp-content/uploads/2020/01/tacos-meat-food-mexican-lunch-dinner-800x600.jpg",
      videoUrl: "https://www.youtube.com/watch?v=ZJPpMSx3eSw"
    },
    {
      nombre: "Sushi",
      descripcion:"sushi es la especialidad gastronómica japonesa más conocida en todo el mundo. No obstante, aunque es uno de los estandartes de su cocina, su consumo está reservado para ocasiones especiales y normalmente se degusta preparado al momento con un cuidado extremo por la calidad y cuidado del producto.",
      imagenUrl:"https://imag.bonviveur.com/sushi-casero.webp",
      videoUrl:"https://www.youtube.com/watch?v=IGCIX3kLzLw"
    },
    {
      nombre:"Bandeja Paisa",
      descripcion:"La bandeja paisa es uno de los platos más representativos de Colombia y la insignia de la gastronomía antioqueña, y es propio de esta región,",
      imagenUrl:"https://cdn.colombia.com/gastronomia/2011/08/02/bandeja-paisa-1616.gif",
      videoUrl:"https://www.youtube.com/watch?v=fed_bdj-ZN4"
    },
    {
      nombre:"Hamburguesa",
      descripcion:"Una hamburguesa es un sándwich hecho a base de carne picada o de origen vegetal, ​ aglutinada en forma de filete cocinado a la parrilla o a la plancha, aunque también puede freírse u hornearse.",
      imagenUrl:"https://www.viveusa.mx/resizer/fiXxIZ1cGOopUll-YnG2TOzA0vc=/1200x740/cloudfront-us-east-1.images.arcpublishing.com/eluniversal/EQBNM45LKJDKZNGMKJFEQVMUQI.jpg",
      videoUrl:"https://www.youtube.com/watch?v=Jz0xATKgtLE"
    },
    {
      nombre:"Mariscos españoles",
      descripcion:"Los españoles aman el marisco hasta tal punto que lo disfrutan a diario. Como una gran variedad de criaturas marinas son arrastradas a las costas españolas, no hay escasez de opciones en esta gama de variantes de alimentos. ",
      imagenUrl:"https://hips.hearstapps.com/hmg-prod/images/seafood-platter-royalty-free-image-1639737138.jpg",
      videoUrl:"https://www.youtube.com/watch?v=nEGwOchFNJQ"
    }
  ]
  constructor() {
    console.log("Servicio para imprimir recetas")
  }

  getReceta ( idx: any ) {
    return this.recetas[idx];
  }
}

export interface Recetasinfo {
  nombre: string;
  descripcion: string;
  imagenUrl: string;
  videoUrl: string;
}