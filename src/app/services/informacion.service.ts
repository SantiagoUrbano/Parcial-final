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
      productos: "Flor de sal de Camargue, Nougat de Montélimar",
      descripcionProducto: "Flor de sal de Camargue: es un tipo de sal marina que se produce en la región de Camargue, en el sur de Francia. Nougat de Montélimar: es un delicioso dulce tradicional de Francia, específicamente de la ciudad de Montélimar.",
      ProductoImg1: "https://www.laselecta.com/images/stories/virtuemart/product/PT75_LaSelecta.jpg",
      ProductoImg2: "https://images.france.fr/zeaejvyq9bhj/Tbb4cPVmcC0lmCS5Is5up/6cf0ecf32599dabd2fb231e561b9c1be/nougat-illustr-header.jpeg?w=1120&h=490&q=70&fl=progressive&fit=fill",
      preparacion1: "https://www.youtube.com/watch?v=S8k21at3oQc",
      preparacion2: "https://www.youtube.com/watch?v=Tix0CYH9Qpw"
    },
    {
      imageUrl: "https://humanidades.com/wp-content/uploads/2017/05/bandera-de-mexico-e1567990939713.jpg",
      pais: "México",
      descripcion: "La gastronomía mexicana es muy especial, varía de región a región y depende de los alimentos básicos que se cosechan en sus tierras. Ha sido influenciada de diversas formas por los conquistadores, el clima y la geografía cambiante; esto ha jugado un papel importante en la selección de tradición del país. México es conocido por su maíz, tomates, chocolate, especias, aguacates, frijoles, papaya, vainilla y chiles; y la forma en que se utilizan estos alimentos refleja los verdaderos alimentos tradicionales de la tierra.",
      productos: "Aguacate, Frijoles",
      descripcionProducto: "Aguacate: Persea americana, llamado popularmente aguacate, ​​​ palto, ​​curo ​o aguacatero, ​ es una especie arbórea del género Persea perteneciente a la familia Lauraceae. Frijoles:  Los frijoles son una leguminosa muy común en la cocina, especialmente en América Latina.",
      ProductoImg1: "https://exoticfruitbox.com/wp-content/uploads/2015/10/aguacate.jpg",
      ProductoImg2: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Painted_Pony_Bean.JPG/1200px-Painted_Pony_Bean.JPG",
      preparacion1: "https://www.youtube.com/watch?v=umTLyoZJzu8",
      preparacion2: "https://www.youtube.com/watch?v=jy5NeI2K4ZQ&t=29s"
    },
    {
      imageUrl: "https://img.asmedia.epimg.net/resizer/DjNn6nJuQoGIWgD7-S0cIcVge0A=/360x203/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/T3W5EEBTBBDWXMFBH7XV7JYPDM.jpg",
      pais: "Japón",
      descripcion: "En general aquello que siempre se busca cuando se cocina un plato es la armonía de todos los ingredientes y la presentación de los mismos. En ocasiones más informales lo habitual sería comer sopa y arroz junto con algo de pescado, marisco y/o carne.  Cuando preparamos comidas para llevar en las típicas cajas Bento, que se utilizan sobretodo para las escuelas o el trabajo, es habitual incluir pequeñas porciones de diferentes tipos de comida separadas en distintos compartimentos. La estética siempre juega un papel importante ya que forma parte de esta armonía. Los alimentos comienzan a disfrutarse con el sentido de la vista.",
      productos: "Wasabi, Tofu",
      descripcionProducto: "Wasabi: El wasabi es una especia o condimento picante de la cocina japonesa, que se usa a menudo en sushi y otros platos con pescado. Tofu: El tofu es una comida de origen oriental, preparada con semillas de soja, agua y solidificante o coagulante. Se destaca por el valor nutritivo de la proteína de soja",
      ProductoImg1: "https://www.recetasderechupete.com/wp-content/uploads/2021/01/wasabi.jpg",
      ProductoImg2: "https://i.blogs.es/a3b59e/tofu-min/450_1000.jpg",
      preparacion1: "https://www.youtube.com/watch?v=kde3mx64SI4",
      preparacion2: "https://www.youtube.com/watch?v=5t-EejBwxkU"
    },
    {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/1280px-Flag_of_Colombia.svg.png",
      pais: "Colombia",
      descripcion: "La naturaleza ha bendecido a los colombianos con un país fértil: Pescados, plátanos en la costa; una asombrosa variedad de frutas tropicales, café, chocolate y productos lácteos en las montañas; verduras y carnes baratas y frescas por doquier. La cocina mayoritaria otorga primacía a los platos poco aderezados, sin especias ni picantes, sin adornos ni guarniciones copiosas; en resumen, preparados con sencillez. O quizá los colombianos prefieran la cocina sencilla porque así saborean mejor los ingredientes naturales. Aquí la calidad de la comida es elevada (como lo es la higiene en sus preparaciones), de modo que incluso aquellos con las papilas gustativas más fatigadas encontrarán algo que les tiente el paladar.",
      productos: "Pescado, Papa",
      descripcionProducto: "Pescado: El término pescado se refiere a los peces extraídos de su hábitat para servir como alimento​. Estos peces pueden ser pescados en el agua —océanos, mares, ríos, lagos. Papa: Solanum tuberosum, de nombre común papa ​ o patata, ​​ es una especie herbácea perteneciente al género Solanum de la familia de las solanáceas",
      ProductoImg1: "https://www.naturalcastello.com/wp-content/uploads/2019/08/pescados-tipos-propiedades.jpg",
      ProductoImg2: "https://www.lavanguardia.com/files/og_thumbnail/uploads/2018/10/29/5e9982ef4f2c2.jpeg",
      preparacion1: "https://www.youtube.com/watch?v=KU_jeixPT4w",
      preparacion2: "https://www.youtube.com/watch?v=UhomMhp_QtI"
    },
    {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
      pais: "EEUU",
      descripcion: "La gastronomía de Estados Unidos se caracteriza por ser una fusión variada de la gastronomía de otros países adaptadas a cada región. Un ejemplo es el espagueti de origen italiano y las salchichas alemanas, que juntas hacen el popular espagueti con salchichas. Lo mismo pasa con los perros calientes y las hamburguesas de procedencia alemana y populares en Estados Unidos. ",
      productos: "Maíz, Bistec",
      descripcionProducto: "El maíz es una especie de planta gramínea originaria de Mesoamérica. Su inflorescencia femenina se llama elote o choclo y allí crecen granos comestibles. Su domesticación se inició hace doce mil años aproximadamente en el eje neovolcánico de México. Bistec: El bistec es un término que se utiliza para referirse a un filete de carne, generalmente de res.",
      ProductoImg1: "https://humanidades.com/wp-content/uploads/2018/10/maiz-2-1-e1581908276964.jpg",
      ProductoImg2: "https://assets.unileversolutions.com/recipes-v2/216415.jpg",
      preparacion1: "https://www.youtube.com/watch?v=NuxakiIp_b8",
      preparacion2: "https://www.youtube.com/watch?v=CV7uxs20kqE"
    },
    {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png",
      pais: "España",
      descripcion: "Gastronomía española es una de las mejores del mundo por la calidad y variedad de los productos que se utilizan y es el orgullo del país. Es difícil hablar de la existencia de la cocina nacional de España en su conjunto. Más bien, la cocina tradicional se compone de muchas cocinas regionales. En cada uno de ellas influyeron el clima, la historia y los propios costumbres de la vida.",
      productos: "Mariscos, almeja",
      descripcionProducto: "Mariscos: El marisco, en gastronomía, son los animales marinos invertebrados comestibles​. En esta definición se incluyen normalmente los crustáceos. Almeja es el nombre con que comúnmente se conoce a varios moluscos bivalvos que viven enterrados en arenas o barros de las orillas de los ríos y mares.",
      ProductoImg1: "https://hips.hearstapps.com/hmg-prod/images/plato-de-mariscos-1595505096.jpg?crop=1xw:0.8048076923076923xh;center,top&resize=1200:*",
      ProductoImg2: "https://imagenes.muyinteresante.es/files/article_social/uploads/2023/03/08/6408b23ed4532.jpeg",
      preparacion1: "https://www.youtube.com/watch?v=oJ1Qw8GjbgI",
      preparacion2: "https://www.youtube.com/watch?v=ddyezDqr_uA"
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
  ProductoImg1: string;
  ProductoImg2: string;
  preparacion1: string;
  preparacion2: string;
  // Recetas
}

export interface receta {
  nombre: string;
  descripcion: string;
  fotoUrl: string;
  preparacion: string;
}