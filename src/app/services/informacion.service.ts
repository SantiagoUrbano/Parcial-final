import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  private informacion:InformacionCultura[] = [
    {
      imageUrl: "https://banderas.top/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/08/Bandera-de-Francia.png.webp",
      pais: "Francia",
      descripcion: "La cocina francesa está caracterizada por la variedad de platos que presenta debido a la gran diversidad de alimentos que hay en el país, así como por su refinamiento. Es una gastronomía que está en constante evolución gracias a sus profesionales, que siempre buscan sorprender. La compra de buenos productos, preferentemente locales, ha favorecido que la comida típica de Francia se haya hecho un hueco en el mundo gastronómico. Además, la elección cuidadosa de los platos ha creado un reflejo innato de la diversidad de las regiones, y la calidad, la estética y el matrimonio entre comida y vino han supuesto un antes y un después en la cocina. Por ello, y como se ha destacado anteriormente, desde el 16 de noviembre del año 2010 está incluida en la lista del Patrimonio Cultural Inmaterial de la Humanidad.",
      productos: "Flor de sal de Camargue, Caramelo de mantequilla salada en forma de dulce o pasta para untar, Nougat de Montélimar, Tapenade",
      descripcionProducto: "",
      ProductoImg: "",
      preparacion: ""
    },
    {
      imageUrl: "https://humanidades.com/wp-content/uploads/2017/05/bandera-de-mexico-e1567990939713.jpg",
      pais: "México",
      descripcion: "La gastronomía mexicana es muy especial, varía de región a región y depende de los alimentos básicos que se cosechan en sus tierras. Ha sido influenciada de diversas formas por los conquistadores, el clima y la geografía cambiante; esto ha jugado un papel importante en la selección de tradición del país. México es conocido por su maíz, tomates, chocolate, especias, aguacates, frijoles, papaya, vainilla y chiles; y la forma en que se utilizan estos alimentos refleja los verdaderos alimentos tradicionales de la tierra.",
      productos: "Maiz, Aguacate, Frijoles, Totopos",
      descripcionProducto: "",
      ProductoImg: "",
      preparacion: ""
    },
    {
      imageUrl: "https://img.asmedia.epimg.net/resizer/DjNn6nJuQoGIWgD7-S0cIcVge0A=/360x203/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/T3W5EEBTBBDWXMFBH7XV7JYPDM.jpg",
      pais: "Japón",
      descripcion: "En general aquello que siempre se busca cuando se cocina un plato es la armonía de todos los ingredientes y la presentación de los mismos. En ocasiones más informales lo habitual sería comer sopa y arroz junto con algo de pescado, marisco y/o carne.  Cuando preparamos comidas para llevar en las típicas cajas Bento, que se utilizan sobretodo para las escuelas o el trabajo, es habitual incluir pequeñas porciones de diferentes tipos de comida separadas en distintos compartimentos. La estética siempre juega un papel importante ya que forma parte de esta armonía. Los alimentos comienzan a disfrutarse con el sentido de la vista.",
      productos: "Wasabi, Cerdo, Arroz, Tofu, Algas",
      descripcionProducto: "",
      ProductoImg: "",
      preparacion: ""
    },
    {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/1280px-Flag_of_Colombia.svg.png",
      pais: "Colombia",
      descripcion: "La naturaleza ha bendecido a los colombianos con un país fértil: Pescados, plátanos en la costa; una asombrosa variedad de frutas tropicales, café, chocolate y productos lácteos en las montañas; verduras y carnes baratas y frescas por doquier. La cocina mayoritaria otorga primacía a los platos poco aderezados, sin especias ni picantes, sin adornos ni guarniciones copiosas; en resumen, preparados con sencillez. O quizá los colombianos prefieran la cocina sencilla porque así saborean mejor los ingredientes naturales. Aquí la calidad de la comida es elevada (como lo es la higiene en sus preparaciones), de modo que incluso aquellos con las papilas gustativas más fatigadas encontrarán algo que les tiente el paladar.",
      productos: "Maíz, Carne, Pescado, Papa",
      descripcionProducto: "",
      ProductoImg: "",
      preparacion: ""
    },
    {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
      pais: "EEUU",
      descripcion: "La gastronomía de Estados Unidos se caracteriza por ser una fusión variada de la gastronomía de otros países adaptadas a cada región. Un ejemplo es el espagueti de origen italiano y las salchichas alemanas, que juntas hacen el popular espagueti con salchichas. Lo mismo pasa con los perros calientes y las hamburguesas de procedencia alemana y populares en Estados Unidos. ",
      productos: "Maíz, papa, Bistec, Girasol",
      descripcionProducto: "El maíz es una especie de planta gramínea originaria de Mesoamérica. Su inflorescencia femenina se llama elote o choclo y allí crecen granos comestibles. Su domesticación se inició hace doce mil años aproximadamente en el eje neovolcánico de México",
      ProductoImg: "",
      preparacion: ""
    },
    {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png",
      pais: "España",
      descripcion: "Gastronomía española es una de las mejores del mundo por la calidad y variedad de los productos que se utilizan y es el orgullo del país. Es difícil hablar de la existencia de la cocina nacional de España en su conjunto. Más bien, la cocina tradicional se compone de muchas cocinas regionales. En cada uno de ellas influyeron el clima, la historia y los propios costumbres de la vida.",
      productos: "Mariscos, tomate, almeja, cerdo",
      descripcionProducto: "",
      ProductoImg: "",
      preparacion: ""
    }
  ]

  constructor() {
    console.log("Servicio para la información")
  }

  getInfo():InformacionCultura[] {
    return this.informacion
  }

  getReceta ( idx: any ) {
    return this.informacion[idx];
  }
}

export interface InformacionCultura {
  imageUrl: string;
  pais: string;
  descripcion: string;
  // Productos
  productos: string;
  descripcionProducto: string;
  ProductoImg: string;
  preparacion: string;
  // Recetas
}