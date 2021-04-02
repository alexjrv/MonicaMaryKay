import { PipeResolver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  items: any[] = [
    {
      id: 0,
      uso: "Cara",
      name: "Crema Facial Nocturna prueba 1 CARA ",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La línea TimeWise Repair™ Volu-Firm™ es un régimen del Cuidado de la Piel científicamente innovador que combina la investigación extensa, ingredientes innovadores y pruebas amplias para entregar los beneficios pensados para contrarrestar las señales avanzadas del envejecimiento de la piel.Reactiva la apariencia juvenil con retinol.",
      aplicacion: "Aplicar con los dedos en el rostro y cuello con generosos movimientos ascendentes y hacia afuera.",
      beneficios: "La piel recobra su firmeza y se restaura un tono de piel uniforme.Inmediatamente duplica la hidratación de la piel y aumenta la humectación de la piel hasta por 12 horas.El Complejo Volu-Firm contiene las células madre de plantas y péptidos especializados que ayudan a proporcionar el catalizador para la renovación de la piel.Da una tersura visible a la piel del área del cuello.Ayuda a acelerar la renovación celular para revelar una piel de apariencia radiante.",
      image: "assets/images/TimeWiseRepairVoluFirm.JPG"
    }
    ,
    {
      id: 1,
      uso: "Cara",
      name: "Crema Facial Nocturna prueba 2",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La línea TimeWise Repair™ Volu-Firm™ es un régimen del Cuidado de la Piel científicamente innovador que combina la investigación extensa, ingredientes innovadores y pruebas amplias para entregar los beneficios pensados para contrarrestar las señales avanzadas del envejecimiento de la piel.Reactiva la apariencia juvenil con retinol.",
      aplicacion: "Aplicar con los dedos en el rostro y cuello con generosos movimientos ascendentes y hacia afuera.",
      beneficios: "La piel recobra su firmeza y se restaura un tono de piel uniforme.Inmediatamente duplica la hidratación de la piel y aumenta la humectación de la piel hasta por 12 horas.El Complejo Volu-Firm contiene las células madre de plantas y péptidos especializados que ayudan a proporcionar el catalizador para la renovación de la piel.Da una tersura visible a la piel del área del cuello.Ayuda a acelerar la renovación celular para revelar una piel de apariencia radiante.",
      image: "assets/images/TimeWiseRepairVoluFirm.JPG"
    }
    ,
    {
      id: 2,
      uso: "Cara",
      name: "Crema Facial Nocturna prueba 3",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La línea TimeWise Repair™ Volu-Firm™ es un régimen del Cuidado de la Piel científicamente innovador que combina la investigación extensa, ingredientes innovadores y pruebas amplias para entregar los beneficios pensados para contrarrestar las señales avanzadas del envejecimiento de la piel.Reactiva la apariencia juvenil con retinol.",
      aplicacion: "Aplicar con los dedos en el rostro y cuello con generosos movimientos ascendentes y hacia afuera.",
      beneficios: "La piel recobra su firmeza y se restaura un tono de piel uniforme.Inmediatamente duplica la hidratación de la piel y aumenta la humectación de la piel hasta por 12 horas.El Complejo Volu-Firm contiene las células madre de plantas y péptidos especializados que ayudan a proporcionar el catalizador para la renovación de la piel.Da una tersura visible a la piel del área del cuello.Ayuda a acelerar la renovación celular para revelar una piel de apariencia radiante.",
      image: "assets/images/TimeWiseRepairVoluFirm.JPG"
    }
    ,
    {
      id: 3,
      uso: "Cara",
      name: "Crema Facial Nocturna prueba 4",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La línea TimeWise Repair™ Volu-Firm™ es un régimen del Cuidado de la Piel científicamente innovador que combina la investigación extensa, ingredientes innovadores y pruebas amplias para entregar los beneficios pensados para contrarrestar las señales avanzadas del envejecimiento de la piel.Reactiva la apariencia juvenil con retinol.",
      aplicacion: "Aplicar con los dedos en el rostro y cuello con generosos movimientos ascendentes y hacia afuera.",
      beneficios: "La piel recobra su firmeza y se restaura un tono de piel uniforme.Inmediatamente duplica la hidratación de la piel y aumenta la humectación de la piel hasta por 12 horas.El Complejo Volu-Firm contiene las células madre de plantas y péptidos especializados que ayudan a proporcionar el catalizador para la renovación de la piel.Da una tersura visible a la piel del área del cuello.Ayuda a acelerar la renovación celular para revelar una piel de apariencia radiante.",
      image: "assets/images/TimeWiseRepairVoluFirm.JPG"
    }
    ,
    {
      id: 4,
      uso: "Cara",
      name: "Crema prueba 5",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La línea TimeWise Repair™ Volu-Firm™ es un régimen del Cuidado de la Piel científicamente innovador que combina la investigación extensa, ingredientes innovadores y pruebas amplias para entregar los beneficios pensados para contrarrestar las señales avanzadas del envejecimiento de la piel.Reactiva la apariencia juvenil con retinol.",
      aplicacion: "Aplicar con los dedos en el rostro y cuello con generosos movimientos ascendentes y hacia afuera.",
      beneficios: "La piel recobra su firmeza y se restaura un tono de piel uniforme.Inmediatamente duplica la hidratación de la piel y aumenta la humectación de la piel hasta por 12 horas.El Complejo Volu-Firm contiene las células madre de plantas y péptidos especializados que ayudan a proporcionar el catalizador para la renovación de la piel.Da una tersura visible a la piel del área del cuello.Ayuda a acelerar la renovación celular para revelar una piel de apariencia radiante.",
      image: "assets/images/TimeWiseRepairVoluFirm.JPG"
    }
    ,
    {
      id: 5,
      uso: "Pies",
      name: "Pinta labios Rouge prueba 6",
      type: "Pinta labios",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Prueba pintalabios",
      aplicacion: "se aplica sobre los labios",
      beneficios: "Labios mas rojos (?",
      image: "http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg"
    }
    ,
    {
      id: 6,
      uso: "Cara",
      name: "Crema prueba 7",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La línea TimeWise Repair™ Volu-Firm™ es un régimen del Cuidado de la Piel científicamente innovador que combina la investigación extensa, ingredientes innovadores y pruebas amplias para entregar los beneficios pensados para contrarrestar las señales avanzadas del envejecimiento de la piel.Reactiva la apariencia juvenil con retinol.",
      aplicacion: "Aplicar con los dedos en el rostro y cuello con generosos movimientos ascendentes y hacia afuera.",
      beneficios: "La piel recobra su firmeza y se restaura un tono de piel uniforme.Inmediatamente duplica la hidratación de la piel y aumenta la humectación de la piel hasta por 12 horas.El Complejo Volu-Firm contiene las células madre de plantas y péptidos especializados que ayudan a proporcionar el catalizador para la renovación de la piel.Da una tersura visible a la piel del área del cuello.Ayuda a acelerar la renovación celular para revelar una piel de apariencia radiante.",
      image: "assets/images/TimeWiseRepairVoluFirm.JPG"
    }
    ,
    {
      id: 7,
      uso: "Cara",
      name: "Pinta labios Rouge prueba 8",
      type: "Pinta labios",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Prueba pintalabios",
      aplicacion: "se aplica sobre los labios",
      beneficios: "Labios mas rojos (?",
      image: "http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg"
    }
    ,
    {
      id: 8,
      uso: "Cara",
      name: "Crema prueba 9",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La línea TimeWise Repair™ Volu-Firm™ es un régimen del Cuidado de la Piel científicamente innovador que combina la investigación extensa, ingredientes innovadores y pruebas amplias para entregar los beneficios pensados para contrarrestar las señales avanzadas del envejecimiento de la piel.Reactiva la apariencia juvenil con retinol.",
      aplicacion: "Aplicar con los dedos en el rostro y cuello con generosos movimientos ascendentes y hacia afuera.",
      beneficios: "La piel recobra su firmeza y se restaura un tono de piel uniforme.Inmediatamente duplica la hidratación de la piel y aumenta la humectación de la piel hasta por 12 horas.El Complejo Volu-Firm contiene las células madre de plantas y péptidos especializados que ayudan a proporcionar el catalizador para la renovación de la piel.Da una tersura visible a la piel del área del cuello.Ayuda a acelerar la renovación celular para revelar una piel de apariencia radiante.",
      image: "assets/images/TimeWiseRepairVoluFirm.JPG"
    }
    ,
    {
      id: 9,
      uso: "Cara",
      name: "Pinta labios Rouge prueba 10",
      type: "Pinta labios",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Prueba pintalabios",
      aplicacion: "se aplica sobre los labios",
      beneficios: "Labios mas rojos (?",
      image: "http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg"
    }
    ,
    {
      id: 10,
      uso: "Cara",
      name: "Crema prueba 11",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La línea TimeWise Repair™ Volu-Firm™ es un régimen del Cuidado de la Piel científicamente innovador que combina la investigación extensa, ingredientes innovadores y pruebas amplias para entregar los beneficios pensados para contrarrestar las señales avanzadas del envejecimiento de la piel.Reactiva la apariencia juvenil con retinol.",
      aplicacion: "Aplicar con los dedos en el rostro y cuello con generosos movimientos ascendentes y hacia afuera.",
      beneficios: "La piel recobra su firmeza y se restaura un tono de piel uniforme.Inmediatamente duplica la hidratación de la piel y aumenta la humectación de la piel hasta por 12 horas.El Complejo Volu-Firm contiene las células madre de plantas y péptidos especializados que ayudan a proporcionar el catalizador para la renovación de la piel.Da una tersura visible a la piel del área del cuello.Ayuda a acelerar la renovación celular para revelar una piel de apariencia radiante.",
      image: "assets/images/TimeWiseRepairVoluFirm.JPG"
    }
    ,
    {
      id: 11,
      uso: "Cara",
      name: "Pinta labios Rouge prueba 12",
      type: "Pinta labios",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Prueba pintalabios",
      aplicacion: "se aplica sobre los labios",
      beneficios: "Labios mas rojos (?",
      image: "http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg"
    }
    ,
    {
      id: 12,
      uso: "Cara",
      name: "Crema prueba 13",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La línea TimeWise Repair™ Volu-Firm™ es un régimen del Cuidado de la Piel científicamente innovador que combina la investigación extensa, ingredientes innovadores y pruebas amplias para entregar los beneficios pensados para contrarrestar las señales avanzadas del envejecimiento de la piel.Reactiva la apariencia juvenil con retinol.",
      aplicacion: "Aplicar con los dedos en el rostro y cuello con generosos movimientos ascendentes y hacia afuera.",
      beneficios: "La piel recobra su firmeza y se restaura un tono de piel uniforme.Inmediatamente duplica la hidratación de la piel y aumenta la humectación de la piel hasta por 12 horas.El Complejo Volu-Firm contiene las células madre de plantas y péptidos especializados que ayudan a proporcionar el catalizador para la renovación de la piel.Da una tersura visible a la piel del área del cuello.Ayuda a acelerar la renovación celular para revelar una piel de apariencia radiante.",
      image: "assets/images/TimeWiseRepairVoluFirm.JPG"
    }
    ,
    {
      id: 13,
      uso: "Cara",
      name: "Pinta labios Rouge prueba 14",
      type: "Pinta labios",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Prueba pintalabios",
      aplicacion: "se aplica sobre los labios",
      beneficios: "Labios mas rojos (?",
      image: "http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg"
    }
    ,
    {
      id: 14,
      uso: "Cara",
      name: "Crema prueba 15",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La línea TimeWise Repair™ Volu-Firm™ es un régimen del Cuidado de la Piel científicamente innovador que combina la investigación extensa, ingredientes innovadores y pruebas amplias para entregar los beneficios pensados para contrarrestar las señales avanzadas del envejecimiento de la piel.Reactiva la apariencia juvenil con retinol.",
      aplicacion: "Aplicar con los dedos en el rostro y cuello con generosos movimientos ascendentes y hacia afuera.",
      beneficios: "La piel recobra su firmeza y se restaura un tono de piel uniforme.Inmediatamente duplica la hidratación de la piel y aumenta la humectación de la piel hasta por 12 horas.El Complejo Volu-Firm contiene las células madre de plantas y péptidos especializados que ayudan a proporcionar el catalizador para la renovación de la piel.Da una tersura visible a la piel del área del cuello.Ayuda a acelerar la renovación celular para revelar una piel de apariencia radiante.",
      image: "assets/images/TimeWiseRepairVoluFirm.JPG"
    }
    ,
    {
      id: 15,
      uso: "Cara",
      name: "Pinta labios Rouge prueba 16",
      type: "Pinta labios",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Prueba pintalabios",
      aplicacion: "se aplica sobre los labios",
      beneficios: "Labios mas rojos (?",
      image: "http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg"
    }
    ,
    {
      id: 16,
      uso: "Cara",
      name: "Crema prueba 17",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La línea TimeWise Repair™ Volu-Firm™ es un régimen del Cuidado de la Piel científicamente innovador que combina la investigación extensa, ingredientes innovadores y pruebas amplias para entregar los beneficios pensados para contrarrestar las señales avanzadas del envejecimiento de la piel.Reactiva la apariencia juvenil con retinol.",
      aplicacion: "Aplicar con los dedos en el rostro y cuello con generosos movimientos ascendentes y hacia afuera.",
      beneficios: "La piel recobra su firmeza y se restaura un tono de piel uniforme.Inmediatamente duplica la hidratación de la piel y aumenta la humectación de la piel hasta por 12 horas.El Complejo Volu-Firm contiene las células madre de plantas y péptidos especializados que ayudan a proporcionar el catalizador para la renovación de la piel.Da una tersura visible a la piel del área del cuello.Ayuda a acelerar la renovación celular para revelar una piel de apariencia radiante.",
      image: "assets/images/TimeWiseRepairVoluFirm.JPG"
    }
    ,
    {
      id: 17,
      uso: "Pies",
      name: "Pinta labios Rouge prueba 18",
      type: "Pintalabios",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Prueba pintalabios",
      aplicacion: "se aplica sobre los labios",
      beneficios: "Labios mas rojos (?",
      image: "http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg"
    }
    ,
  ];
  constructor() { }

  getProducts() {
    return this.items;
  }
  getProduct(id: any) {
    return this.items[id];
  }
  buscarProductos(termino: any) {
    const productosArr: any[] = [];
    termino = termino.toLowerCase();
    for (const producto of this.items) {
      const nombre = producto.name.toLowerCase();
      const uso = producto.uso.toLowerCase();
      const type = producto.type.toLowerCase();
      if ((nombre.indexOf(termino)) >= 0 || (uso.indexOf(termino)) >= 0 || (type.indexOf(termino)) >= 0) {
        productosArr.push(producto);
      }
    }
    return productosArr;
  }
  getCremas() {
    const cremasArr: any[] = [];
    const termino = 'Crema';
    for (const producto of this.items) {
      const type = producto.type;
      if ((type.indexOf(termino)) >= 0) {
        cremasArr.push(producto);
      }
    }
    return cremasArr;
  }
  getPinturaLabios() {
    const pinturaLabiosArr: any[] = [];
    const termino = 'Pintalabios';
    for (const producto of this.items) {
      const type = producto.type;
      if ((type.indexOf(termino)) >= 0) {
        pinturaLabiosArr.push(producto);
      }
    }
    return pinturaLabiosArr;
  }
}
