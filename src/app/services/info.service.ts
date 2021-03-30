import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  items: any[] = [
    {
      id:0,
      name: "Crema Facial Nocturna prueba 1 texto largo largo ",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La línea TimeWise Repair™ Volu-Firm™ es un régimen del Cuidado de la Piel científicamente innovador que combina la investigación extensa, ingredientes innovadores y pruebas amplias para entregar los beneficios pensados para contrarrestar las señales avanzadas del envejecimiento de la piel.Reactiva la apariencia juvenil con retinol.",
      aplicacion:"Aplicar con los dedos en el rostro y cuello con generosos movimientos ascendentes y hacia afuera.",
      beneficios:"La piel recobra su firmeza y se restaura un tono de piel uniforme.Inmediatamente duplica la hidratación de la piel y aumenta la humectación de la piel hasta por 12 horas.El Complejo Volu-Firm contiene las células madre de plantas y péptidos especializados que ayudan a proporcionar el catalizador para la renovación de la piel.Da una tersura visible a la piel del área del cuello.Ayuda a acelerar la renovación celular para revelar una piel de apariencia radiante.",
      image:"assets/images/TimeWiseRepairVoluFirm.JPG"
    }
    ,
    {
      id:1,
      name: "Crema Facial Nocturna prueba 2",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La línea TimeWise Repair™ Volu-Firm™ es un régimen del Cuidado de la Piel científicamente innovador que combina la investigación extensa, ingredientes innovadores y pruebas amplias para entregar los beneficios pensados para contrarrestar las señales avanzadas del envejecimiento de la piel.Reactiva la apariencia juvenil con retinol.",
      aplicacion:"Aplicar con los dedos en el rostro y cuello con generosos movimientos ascendentes y hacia afuera.",
      beneficios:"La piel recobra su firmeza y se restaura un tono de piel uniforme.Inmediatamente duplica la hidratación de la piel y aumenta la humectación de la piel hasta por 12 horas.El Complejo Volu-Firm contiene las células madre de plantas y péptidos especializados que ayudan a proporcionar el catalizador para la renovación de la piel.Da una tersura visible a la piel del área del cuello.Ayuda a acelerar la renovación celular para revelar una piel de apariencia radiante.",
      image:"assets/images/TimeWiseRepairVoluFirm.JPG"
    }
    ,
    {
      id:2,
      name: "Crema Facial Nocturna prueba 3",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La línea TimeWise Repair™ Volu-Firm™ es un régimen del Cuidado de la Piel científicamente innovador que combina la investigación extensa, ingredientes innovadores y pruebas amplias para entregar los beneficios pensados para contrarrestar las señales avanzadas del envejecimiento de la piel.Reactiva la apariencia juvenil con retinol.",
      aplicacion:"Aplicar con los dedos en el rostro y cuello con generosos movimientos ascendentes y hacia afuera.",
      beneficios:"La piel recobra su firmeza y se restaura un tono de piel uniforme.Inmediatamente duplica la hidratación de la piel y aumenta la humectación de la piel hasta por 12 horas.El Complejo Volu-Firm contiene las células madre de plantas y péptidos especializados que ayudan a proporcionar el catalizador para la renovación de la piel.Da una tersura visible a la piel del área del cuello.Ayuda a acelerar la renovación celular para revelar una piel de apariencia radiante.",
      image:"assets/images/TimeWiseRepairVoluFirm.JPG"
    }
    ,
    {
      id:3,
      name: "Crema Facial Nocturna prueba 4",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La línea TimeWise Repair™ Volu-Firm™ es un régimen del Cuidado de la Piel científicamente innovador que combina la investigación extensa, ingredientes innovadores y pruebas amplias para entregar los beneficios pensados para contrarrestar las señales avanzadas del envejecimiento de la piel.Reactiva la apariencia juvenil con retinol.",
      aplicacion:"Aplicar con los dedos en el rostro y cuello con generosos movimientos ascendentes y hacia afuera.",
      beneficios:"La piel recobra su firmeza y se restaura un tono de piel uniforme.Inmediatamente duplica la hidratación de la piel y aumenta la humectación de la piel hasta por 12 horas.El Complejo Volu-Firm contiene las células madre de plantas y péptidos especializados que ayudan a proporcionar el catalizador para la renovación de la piel.Da una tersura visible a la piel del área del cuello.Ayuda a acelerar la renovación celular para revelar una piel de apariencia radiante.",
      image:"assets/images/TimeWiseRepairVoluFirm.JPG"
    }
    ,
    {
      id:4,
      name: "Crema prueba 5",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La línea TimeWise Repair™ Volu-Firm™ es un régimen del Cuidado de la Piel científicamente innovador que combina la investigación extensa, ingredientes innovadores y pruebas amplias para entregar los beneficios pensados para contrarrestar las señales avanzadas del envejecimiento de la piel.Reactiva la apariencia juvenil con retinol.",
      aplicacion:"Aplicar con los dedos en el rostro y cuello con generosos movimientos ascendentes y hacia afuera.",
      beneficios:"La piel recobra su firmeza y se restaura un tono de piel uniforme.Inmediatamente duplica la hidratación de la piel y aumenta la humectación de la piel hasta por 12 horas.El Complejo Volu-Firm contiene las células madre de plantas y péptidos especializados que ayudan a proporcionar el catalizador para la renovación de la piel.Da una tersura visible a la piel del área del cuello.Ayuda a acelerar la renovación celular para revelar una piel de apariencia radiante.",
      image:"assets/images/TimeWiseRepairVoluFirm.JPG"
    }
    ,
    {
      id:5,
      name: "Pinta labios Rouge prueba 6",
      type: "Pinta labios",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Prueba pintalabios",
      aplicacion:"se aplica sobre los labios",
      beneficios:"Labios mas rojos (?",
      image:"http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg"
    }
    ,
  ];
  constructor() { }

  getProducts() {
    return this.items;
  }
  getProduct(id:any){
    return this.items[id];
  }
}
