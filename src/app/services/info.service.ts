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
      name: "Set Milagroso TimeWise® Age Minimize 3D™",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "El Set Milagroso TimeWise® Age Minimize 3D defiende, demora y demuestra resultados para una piel que luce más joven. Esta estrategia tridimensional ayuda a minimizar la apariencia del envejecimiento de la piel. El Set incluye: Limpiadora Facial 4 en 1 TimeWise® Age Minimize 3D™, Crema Facial Diurna con FPS 30 TimeWise® Age Minimize 3D™. Crema Facial Nocturna TimeWise® Age Minimize 3D™, Crema para el Contorno de Ojos TimeWise® Age Minimize 3D™. Cada producto contiene el complejo Age Minimize 3D™ pendiente de patente. Este complejo posee tres ingredientes clave que desafían la edad: Resveratrol Encapsulado, Vitamina B3 y Péptidos Antiarrugas.",
      aplicacion: "* Rutina del Cuidado de la Piel para el día: - Paso 1 Limpiadora Facial 4 en 1 TimeWise® Age Minimize 3D™, - Paso 2 Crema Facial Diurna con FPS 30 TimeWise® Age Minimize 3D™, - Paso 3 Crema para el Contorno de Ojos TimeWise® Age Minimize 3D™. * Rutina del Cuidado de la Piel para la noche: - Paso 1 Limpiadora Facial 4 en 1 TimeWise® Age Minimize 3D™, - Paso 2 Crema Facial Nocturna TimeWise® Age Minimize 3D™, - Paso 3 Crema para el Contorno de Ojos TimeWise® Age Minimize 3D™",
      beneficios: "El Set Milagroso TimeWise Age Minimize 3D demuestra mejoras visibles en la piel en tan solo 4 semanas, incluidas:Líneas finas, Arrugas, Resistencia, Luminosidad, Tersura, Suavidad, Apariencia en general",
      image: "assets/product_images/SetMilagrosoTimewise.JPG"
    }
    ,
    {
      id: 1,
      uso: "Cara",
      name: "Mascarilla Renovadora en Gel TimeWise",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Este producto multifuncional da nueva vida a una piel cansada y estresada. La Mascarilla Renovadora en Gel TimeWise® hidrata profundamente, humecta al contacto y brinda otros beneficios adicionales. 10 minutos de mimos. 10 beneficios renovadores para tu piel.",
      aplicacion: "Luego de limpiar la piel del rostro, aplicar una capa abundante y uniforme de Mascarilla, dejar actuar de 5 a 10 minutos. Enjuagar con agua tibia o quitar con una toallita humedecida con agua tibia.Utilizar de 2 a 3 veces por semana. NO utilizar el mismo día que otra mascarilla o el Set de Microexfoliación.Dejar pasar al menos un día para volver a utilizarla.Tener en cuenta que para un tratamiento más intenso, se puede aplicar la Mascarilla antes de irse a dormir y dejar actuar durante la noche, sin removerla lo que permitirá que la misma actúe durante más horas. Retirarla por la mañana con el Limpiador 3 en 1 TimeWise.",
      beneficios: "Hidrata instantáneamente, a la vez que bloquea la pérdida de humedad. La piel luce más relajada, se siente más nutrida y fresca. Ayuda a la piel a lucir más firme, con apariencia saludable, suave y con mejor textura. Ayuda a reducir la apariencia de los poros, como así también de líneas finas y arrugas. 10 minutos de mimos. 10 beneficios renovadores para la piel: - 1 Hidrata instantáneamente. - 2 Sella la humedad. - 3 Relaja. - 4 Purifica. - 5 Nutre. - 6 Refresca. - 7 Reafirma. - 8 Empareja. - 9 Suaviza. - 10 Minimiza los poros",
      image: "assets/product_images/MascarillaRenovadoraGelTimewise.JPG"
    }
    ,
    {
      id: 2,
      uso: "Cara",
      name: "Set de Microexfoliación Plus TimeWise®",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Obtené la apariencia de piel más suave, joven y poros visiblemente más pequeños.",
      aplicacion: "Después de limpiar el rostro, aplicar una pequeña cantidad del Paso 1 Microexfoliante Refinador TimeWise con la punta de los dedos en el rostro húmedo. Exfoliar la piel realizando suaves movimientos circulares ascendentes, evitando el área de los ojos y los labios. Enjuagar a la perfección con agua tibia y secar la piel con palmaditas (cerrar los ojos al enjuagar). Usar la yema de los dedos para aplicar gentilmente el Paso 2. Minimizador de Poros TimeWise®. IMPORTANTE: Usar dos o tres veces a la semana, dejando pasar dos días entre cada aplicación. No utilizar el mismo día que una mascarilla. El Paso 2 se puede usar de modo independiente todos los días por las mañanas y las noches. La frecuencia de uso debe ser menor en las pieles delicadas.",
      beneficios: "Beneficios inmediatos: Inmediatamente tu piel luce más joven y los poros más pequeños. Mejora dramáticamente la textura de la piel. Visiblemente mejora la apariencia de finas líneas de expresión. Da un efecto de alta definición a tu piel. Incluye: Microexfoliante Refinador TimeWise® 70g y Minimizador de Poros TimeWise ® 29ml. La transformación de tu piel comienza con el Microexfoliante Refinador. Su suave exfoliación refina de inmediato la textura de la piel a la vez que elimina de la superficie, las células de piel muerta y la acumulación en los poros. Los poros congestionados hacen que la pared de los mismos se dilate y cause que los poros luzcan distendidos y más grandes. Eliminar las impurezas atrapadas en los poros es un primer paso importante hacia mejorar su apariencia. Formulado con el ingrediente clave para exfoliar que utilizan los dermatólogos, el Microexfoliante refinador revela al instante un cutis de apariencia saludable con una sensación suave y revitalizada. Utilizarlo dos o tres veces por semana para un cutis bellamente refinado. Este suero nutritivo ayuda a calmar y reconfortar la piel al instante. Es el paso perfecto para después del Microexfoliante Refinador para reducir la apariencia de enrojecimiento y aliviar la piel delicada. Se puede utilizar todos los días, dos veces por día, para refinar la apariencia de poros dilatados con el tiempo y lograr un cutis visiblemente más terso y de apariencia impecable. Paso 1. Microexfoliante Refinador TimeWise®: Toda transformación de la piel comienza con una suave exfoliación. Ayuda a reducir la apariencia de líneas finas de expresión. Ayuda a refinar la textura de la piel al instante.Remueve las células muertas de la piel y la acumulación de suciedad en los poros.Paso 2. Minimizador de Poros TimeWise®:Ayuda a reducir significativamente los poros visibles para una piel con apariencia más suave.Deja una piel visiblemente más lisa. Con el uso continuo obtendrás mejores resultados.Reconforta la piel y ayuda a reducir el enrojecimeinto.Después de usar el Set de Microexfoliación Plus TimeWise® por sólo una semana: 87% notaron una mejoría notable en la piel. 82% Observaron significativamente la reducción de la apariencia de los poros. 78% Sintieron un cambio inmediato en la piel. 77% Observaron que su piel lucía una apariencia más joven.",
      image: "assets/product_images/SetMicroexfoliacionPlusTimewise.JPG"
    }
    ,
    {
      id: 3,
      uso: "Cara",
      name: "Suero Corrector de Tono Facial TimeWise®",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Iguala visiblemente la apariencia del tono de la piel y ha demostrado clínicamente una mejora considerable en la luminosidad de la piel. • Se trata del primer e innovador avance para iluminar la piel con nuestro complejo Perfectly Bright™ (patente pendiente). • El 95% de las mujeres experimentó una reducción en el aspecto de las manchas oscuras después de 12 semanas*. *Los resultados son en base a las observaciones realizadas por un experto independiente en medición de la piel que evaluó la mejoría experimentada por 60 mujeres que usaron el producto 2 veces al día como parte de un estudio clínico independiente de 12 semanas",
      aplicacion: "Si usás el Set Milagroso TimeWise®: DÍA . - 1 Limpiador 3 en 1 TimeWise. - 2 Líquido Refrescante Renovador TimeWise. - 3 Suero Corrector de Tono Facial TimeWise. - 4 Solución Diurna con FPS 35 AM TimeWise. - 5 Humectante Anti-Edad TimeWise. NOCHE . 1 - Demaquillador de Ojos Libre de Aceite. - 2 Limpiador 3 en 1 TimeWise. - 3 Líquido Refrescante Renovador TimeWise. - 4 Suero Corrector de Tono Facial TimeWise. - 5 Solución Nocturna PM TimeWise. Humectante Anti-Edad TimeWise. Si usás TimeWise Repair®: DÍA - 1 Espuma Limpiadora Facial Volu-Firm. - 2 Suero Corrector de Tono Facial TimeWise. - 3 Loción Facial Efecto Reafirmante Volu-Firm. - 4 Crema Facial para el Día Efecto Reparador FPS 30. - 5 Crema de Acción Renovadora para el Contorno de Ojos. NOCHE: - 1 Espuma Limpiadora Facial Volu-Firm. - 2 Suero Corrector de Tono Facial TimeWise. - 3 Loción Facial Efecto Reafirmante Volu-Firm. - 4 Crema Facial para Nocturna Efecto Reparador con Retinol Volu-Firm. - 5 Crema de Acción Renovadora para el Contorno de Ojos",
      beneficios: "¡3 BENEFICIOS EN UN SOLO PRODUCTO! Ayuda a reducir la apariencia de manchas oscuras.Ayuda a restaurar el tono natural de la piel para un color más uniforme.Brinda luminosidad a la piel gracias a su complejo Perfectly Bright™.",
      image: "assets/product_images/SueroCorrectorTonoFacialTimewise.JPG"
    }
    ,
    {
      id: 4,
      uso: "Cara",
      name: "Humectante anti-edad Timewise",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Reducí la apariencia de líneas finas con esta crema humectante libre de aceite que hidrata tu piel hasta por 10 horas, y acelera el proceso natural de renovación de la piel para brindarte resultados visibles. Disponible para piel Combinada a Grasa.",
      aplicacion: "Utilizar todos los días por la mañana y la noche. Aplicar en el rostro limpio y seco con suaves movimientos circulares ascendentes. Orden de aplicación: - 1 Limpiar, - 2 Exfoliar, - 3 Refrescar, - 4 Productos Complementarios, -5 Humectar, -6 Proteger",
      beneficios: "Su complejo patentado reduce la apariencia de líneas finas de expresión al acelerar el proceso natural de renovación de la piel, para mostrar una piel más firme, tersa y con menos finas líneas de expresión. Una mezcla especial de agentes hidratantes ayuda a mantener la piel hidratada hasta por 10 horas. Se absorbe rápidamente dejando una piel suave, flexible, firme y siempre fresca. La Crema Humectante Anti-Edad para piel Combinada a Grasa, es una loción tipo gel ligera y sin aceites que ayuda a controlar el exceso de grasitud.",
      image: "assets/product_images/HumectanteAntiedadTimewise.JPG"
    }
    ,
    {
      id: 5,
      uso: "Cara",
      name: "Limpiador 3 en 1 Timewise",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "El Limpiador 3 en 1 TimeWise® combate los efectos del paso del tiempo sobre la piel, además de limpiar, exfoliar y refrescar, revelando una piel más joven. Disponible para piel normal a seca y combinada a grasa.",
      aplicacion: "Utilizar todos los días por la mañana y la noche. Aplicar en el rostro húmedo con suaves movimientos circulares ascendentes, evitando el área de los ojos y los labios. Retirar todos los restos de producto con agua tibia o una toalla húmeda.",
      beneficios: "Combina el antienvejecimiento con 3 funciones esenciales: limpia, exfolia y refresca, revelando una piel de apariencia más joven, lista para recibir los nutrientes de los siguientes productos. Esferas limpiadoras remueven las células muertas de la piel mediante la exfoliación y su complejo patentado reduce la apariencia de líneas finas de expresión al acelerar el proceso natural de renovación de la piel. El Limpiador 3 en 1 para piel Normal a Seca es un líquido cremoso con microesferas rosadas. El Limpiador 3 en 1 para piel Combinada a Grasa es un gel transparente, espumoso y sin aceites, con microesferas lilas, que deja la piel sintiéndose fresca, mientras controla el exceso de grasitud.",
      image: "assets/product_images/Limpiaron3en1Timewise.JPG"
    }
    ,
    {
      id: 6,
      uso: "Cara",
      name: "Agua Micelar",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Disfrutá de una piel fresca y limpia en segundos, estés donde estés, después de hacer ejercicio, cuando estés apurada o ¡cuando quieras! Su fórmula está compuesta de agua purificada y bajas cantidades de tensioactivos suaves. Estos se agrupan formando pequeñas esferas llamadas micelas que actúan como imanes para atraer la acumulación de impurezas en la piel del rostro.",
      aplicacion: "Agregá el Agua Micelar Mary Kay® a tu rutina diaria, y logra una piel libre de impurezas. Limpieza Profunda | Paso a paso: - 1. Desmaquillante para Ojos Mary Kay® perfecto para eliminar el maquillaje de tus ojos, incluso el que es a prueba de agua. - 2 Agua Micelar Mary Kay® ayuda a desmaquillar la cara, eliminar impurezas, refrescar la piel durante el día y prepararla para el resto de la rutina diaria de cuidado de la piel. Limpiá el rostro con la Crema Limpiadora Mary Kay® favorita.Tónico Facial Refrescante Botanical Effects™ minimiza el tamaño de los poros y ayuda a controlar el brillo. Limpieza en Segundos | Paso a paso: - 1 Desmaquillante para Ojos Mary Kay® perfecto para eliminar el maquillaje de tus ojos, incluso el que es a prueba de agua. - 2 Agua Micelar Mary Kay® ayuda a desmaquillar la cara, eliminar impurezas, refrescar la piel durante el día y prepararla para el resto de la rutina diaria de cuidado de la piel.Tónico Facial Refrescante Botanical Effects™ minimiza el tamaño de los poros y ayuda a controlar el brillo. *Tip de Aplicación: Aplicá sobre un algodón el Agua Micelar Mary Kay®, delicadamente deslizá sobre el rostro. Limpiá, evitando el área de los ojos y los labios.",
      beneficios: `Remueve las impurezas de la superficie de la piel. Limpia suavemente la piel del rostro. Elimina el maquillaje. No necesita enjuague. Deja la piel hidratada.`,
      image: "assets/product_images/HumectanteAntiedadTimewise.JPG"
    }
    ,
    {
      id: 7,
      uso: "Cara",
      name: "Suero Regenerador C+E TimeWise",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "El Suero Regenerador C + E TimeWise™ incluye la combinación extraordinaria de las vitaminas C + E. La vitamina E, es un antioxidante reconocido, que al mezclarse con la vitamina C, ayudan a defender la piel de los radicales libres que provocan el envejecimiento prematuro. Su uso diario le aporta a la piel firmeza, luminosidad y la protege de los radicales libres que generan el envejecimiento prematuro.",
      aplicacion: "",
      beneficios: "Ayuda en la firmeza y elasticidad de la piel. Mejora su luminosidad y textura. Reduce la apariencia de arrugas y finas líneas de expresión. Ayuda unificar el tono de la piel. Protege del estrés oxidativo. Para todo tipo de piel, incluso aquellas que son sensibles.",
      image: "assets/product_images/HumectanteAntiedadTimewise.JPG"
    }
    ,
    {
      id: 8,
      uso: "Contorno ojos",
      name: "Crema Renovadora para el Contorno de los Ojos Volufirm™",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La línea TimeWise Repair™ Volu-Firm™ es un régimen del Cuidado de la Piel científicamente innovador que combina la investigación extensa, ingredientes innovadores y pruebas amplias para entregar los beneficios pensados para contrarrestar las señales avanzadas del envejecimiento de la piel. La Crema de Acción Renovadora para el  Contorno de los Ojos Volu- Firm™ revive los ojos cansados y brinda una apariencia más estirada (“efecto lifting”).",
      aplicacion: "Presionar el tubo hasta que salga un poco de producto, deslizar el aplicador dando suaves masajes en el área de alrededor de los ojos, con movimientos hacia afuera. Su aplicador exclusivo fue diseñado para que se acople perfectamente a la forma del ojo. La suave punta de metal está diseñada para ayudar a influenciar la microcirculación al ofrecerle un suave masaje al área debajo de los ojos y ayudar a reducir la hinchazón. Tecnología de cristal líquido: La Crema de Acción Renovadora para el Contorno de los Ojos Volu-Firm™ ofrece un sistema único de entrega de cristal líquido que ayuda a mejorar la efectividad del producto. Se seleccionó este innovador sistema de entrega ya que la estructura de los cristales líquidos es parecida a la barrera de la piel y esto podría ayudar a que la piel sea más receptiva a los beneficios del producto.",
      beneficios: "Se concentra en las líneas y arrugas profundas y la piel flácida. Se concentra en las bolsas, la hinchazón y las ojeras debajo de los ojos. Se concentra en la piel rugosa y reseca. Incrementa la humectación de la piel durante 12 horas. Cuenta con una innovadora tecnología de cristal líquido que mejora su efectividad. Después de una semana: Ayuda a reducir la apariencia de la piel rugosa: 74%. Ayuda a minimizar la apariencia de las ojeras y las bolsas debajo de los ojos: 68%. Después de dos semanas: Reafirma y tonifica la apariencia de piel flácida alrededor de los ojos:73%. Minimiza la apariencia de las arrugas profundas:70%. Restaura la apariencia de un (“efecto lifting”) juvenil: 71%. Después de cuatro semanas: Ayuda a reparar la apariencia de la piel: 85%. Reduce la apariencia de párpados caídos: 67% Resultados basados en un estudio independiente de cuatro semanas con consumidoras. Los resultados reflejan el porcentaje de mujeres que estuvo de acuerdo con la aseveración.",
      image: "assets/product_images/HumectanteAntiedadTimewise.JPG"
    }
    ,
    {
      id: 9,
      uso: "Cara",
      name: "Crema Facial Nocturna Efecto Reparador Con Retinol Volu-Firm™",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La línea TimeWise Repair™ Volu-Firm™ es un régimen del Cuidado de la Piel científicamente innovador que combina la investigación extensa, ingredientes innovadores y pruebas amplias para entregar los beneficios pensados para contrarrestar las señales avanzadas del envejecimiento de la piel. Reactiva la apariencia juvenil con retinol.",
      aplicacion: "Aplicar con los dedos en el rostro y cuello con generosos movimientos ascendentes y hacia afuera.",
      beneficios: "La piel recobra su firmeza y se restaura un tono de piel uniforme.Inmediatamente duplica la hidratación de la piel y aumenta la humectación de la piel hasta por 12 horas.El Complejo Volu-Firm contiene las células madre de plantas y péptidos especializados que ayudan a proporcionar el catalizador para la renovación de la piel.Da una tersura visible a la piel del área del cuello.Ayuda a acelerar la renovación celular para revelar una piel de apariencia radiante.*.(*) Basado en datos científicos. Durante un estudio independiente con consumidoras†, la mayoría de las mujeres estuvieron de acuerdo en que las manchas de la edad eran menos notables, la textura de la piel mejoró drásticamente y el área del cuello lució visiblemente más tersa con líneas y arrugas visiblemente más suaves. Esto fue lo que dijeron: Ayuda a mejorar las señales avanzadas del envejecimiento: 76%. La piel recupera su firmeza: 71%. El área de la mandíbula tiene una apariencia más definida: 67%. Restaura la elasticidad juvenil: 81%. Restaura la uniformidad en el tono de la piel: 86%. Realza la apariencia general de la piel: 90%. Resultados basados en un estudio independiente de 4 semanas con consumidoras. Los resultados reflejan el porcentaje de mujeres que estuvieron de acuerdo con la afirmación. Además, la Crema Facial Nocturna Efecto Reparador con Retinol Volu-Firm: Ayuda a acelerar la renovación celular para revelar piel de apariencia radiante, de manera que las células más nuevas y juveniles suban a la superfice. Ayuda a proteger la integridad de la piel**. El retinol es conocido por influir en la síntesis del colágeno y la elastina, y por fomentar la comunicación celular. Ayuda a reducir la glicación*. La glicación es una reacción química que ocurre cuando moléculas de azúcar se adhieren a una proteína de la piel, como el colágeno y la elastina, y forman una proteína glicosilada. A medida que la piel envejece, el proceso de glicación se acelera y puede ocasionar flacidez, piel rugosa y arrugas más pronunciadas asociadas al envejecimiento avanzado de la piel.Ayuda a reponer la hidratación vital. Está formulada con un ingrediente botánico marino que se ha demostrado aumenta los niveles de AQP3 (Aquaporin 3)*. Las aquaporinas son proteínas de la piel que crean canales que permiten que el agua se conduzca a donde más se necesita para ayudar a mantener la piel hidratada.Ayuda a minimizar la actividad de las enzimas que producen pigmentos*. Está formulada con un extracto de regaliz que minimiza la actividad de la tirosinasa, la enzima crítica para la síntesis de melanina que puede causar manchas oscuras y un tono desparejo en la piel. *Basado en testeos in vitro de los ingredientes claves. ** Basado en datos científicos publicados.",
      image: "http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg"
    }
    ,
    {
      id: 10,
      uso: "Cara",
      name: "Crema Facial para el día Efecto Reparador con Fps 30",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La línea TimeWise Repair™ Volu-Firm™ es un régimen del Cuidado de la Piel científicamente innovador que combina la investigación extensa, ingredientes innovadores y pruebas amplias para entregar los beneficios pensados para contrarrestar las señales avanzadas del envejecimiento de la piel. La Crema Facial para el Día Efecto Reparador con FPS 30 resiste el envejecimiento como nunca antes.",
      aplicacion: "Aplicar con los dedos en el rostro y cuello con generosos movimientos ascendentes y hacia afuera.",
      beneficios: "Ayuda a minimizar la apariencia de arrugas profundas.Ayuda a minimizar la reacción de la piel a agentes externos. *Después de 4 semanas† la mayoría de las mujeres estuvo de acuerdo con que la crema ayudó a mejorar la apariencia de la piel.El Complejo Volu-Firm contiene las células madre de plantas y péptidos especializados que ayudan a proporcionar el catalizador para la renovación de la piel.Inmediatamente triplica la hidratación de la piel y aumenta la humectación hasta por 12 horas.(*) Basado en pruebas in-vitro para ingredientes clave. Durante un estudio independiente con consumidoras†, la mayoría de las mujeres acordaron que la Crema Facial para el Día Efecto Reparador con FPS 30 Volu-Firm ayudó a que su piel se sintiera instantáneamente hidratada y aliviada; restauró la elasticidad juvenil de la piel y el área del cuello lució más firme. Esto fue lo que dijeron: Ayuda a minimizar la apariencia de arrugas profundas: 70%. Suaviza la apariencia rugosa del cuello: 74%. Restaura la elasticidad juvenil: 80%. Restaura la uniformidad en el tono de la piel: 82%. Resultados basados en un estudio independiente de 4 semanas con consumidoras. Los resultados reflejan el porcentaje de mujeres que estuvieron de acuerdo con la afirmación. Además, la Crema Facial para el Día Efecto Reparador con FPS 30 Volu-Firm: Ayuda a reducir la glicación. La glicación es una reacción química que ocurre cuando moléculas de azúcar se adhieren a una proteína de la piel, como el colágeno y la elastina, y forman una proteína glicosilada. A medida que la piel envejece, el proceso de glicación se acelera y puede ocasionar flacidez, piel rugosa y arrugas más pronunciadas asociadas al envejecimiento avanzado de la pielAyuda a minimizar la reacción de la piel a irritantes externos. A medida que la piel envejece, se torna más delgada y frágil y, por lo tanto, es más susceptible al daño y la resequedad. Esta crema está formulada con ingredientes diseñados para ayudar a reducir las proteínas asociadas al enrojecimiento para poder normalizar las reacciones de la piel a los agentes estresantes de la vida diaria.Ayuda a minimizar la actividad de las enzimas que producen pigmentos. Esta suntuosa crema está formulada con un ingrediente que minimiza la actividad de la tirosinasa*, la enzima crítica para la síntesis de melanina que puede causar manchas oscuras y un tono desparejo en la piel.Brinda protección de amplio espectro contra los daños causados por los rayos ultravioleta A y B. Los expertos concuerdan en que la exposición solar es la causa principal del envejecimiento en la piel. Esta fórmula ayuda a proteger contra los rayos ultravioleta A y B que causan quemaduras y envejecimiento en la piel y también es fotoestable, lo cual significa que la fórmula mantiene su integridad y poder protector aun después de exponerse a la luz solar. *Basado en testeos in vitro de los ingredientes claves.",
      image: "assets/images/TimeWiseRepairVoluFirm.JPG"
    }
    ,
    {
      id: 11,
      uso: "Cara y Cuello",
      name: "Espuma Limpiadora Facial Volu-Firm",
      type: "Pinta labios",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La línea TimeWise Repair™ Volu-Firm™ es un régimen del Cuidado de la Piel científicamente innovador que combina la investigación extensa, ingredientes innovadores y pruebas amplias para entregar los beneficios pensados para contrarrestar las señales avanzadas del envejecimiento de la piel. La Espuma Limpiadora Facial Volu-Firm revitaliza, renueva y va más allá de limpiar la piel.",
      aplicacion: "Aplicar un poco de la fórmula en las manos y mezclar con agua hasta crear espuma. Emplear en el rostro y cuello masajeando suavemente. Evitar el área de los ojos y la boca. Después de unos minutos enjuagar la piel con agua tibia.",
      beneficios: "La espuma rica en humectación ayuda a renovar el resplandor de la piel y su textura. La piel se siente suave como la de un bebé, nutrida y lista para el siguiente paso del régimen TimeWise RepairTM. El Complejo Volu-Firm contiene las células madre de plantas y péptidos especializados que ayudan a proporcionar el catalizador para la renovación de la piel. Mantiene el balance de humectación y deja los poros con una apariencia menos visible. Deja la piel sintiéndose elástica. Además, Limpia la piel profundamente sin dejarla sintiéndose despojada. Ayuda a brindarle una limpieza profunda al cutis y a la vez lo trata con la suavidad que necesita y merece. Está diseñado para ayudar a la piel a retener sus lípidos naturales para que la piel se sienta suave, tersa y maravillosamente humectada.Ayuda a proteger la barrera de la piel. Ayuda a eliminar las células muertas que se acumula, tapan los poros y disminuyen su resplandor. Al eliminar las células muertas de la capa externa de la piel, las células nuevas y más jóvenes pueden subir a la superficie. De esta manera, ayuda a proteger la barrera de la piel, un beneficio crítico a medida que la piel envejece y es cuando la superficie externa de la piel puede estar en peligro más fácilmente. Luego de una semana de usar la Espuma Limpiadora Facial Volu-Firm, la mayoría de las mujeres estuvieron de acuerdo en que ilumina la piel, se siente rica y suave y deja la piel perfectamente preparada para el paso siguiente. A continuación, comentarios adicionales que hicieron: Mantiene el balance de humectación: 86%. Renueva el resplandor de la piel: 87%. La piel se siente más elástica: 89%. Deja la piel sintiéndose consentida: 90%. Resultados basados en un estudio independiente de 1 semana con consumidoras. Los resultados reflejan el porcentaje de mujeres que estuvo de acuerdo con la afirmación.",
      image: "http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg"
    }
    ,
    {
      id: 12,
      uso: "Cara",
      name: "Mascarilla de Biocelulosa TimeWise Repair",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Observa un efecto lifting en solo dos semanas* con esta lujosa e innovadora mascarilla inspirada en el mundo de la belleza coreana.¡Ideal para complementar con tu rutina del Cuidado de la Piel de TimeWise Repair!",
      aplicacion: "Para mejores beneficios, usá la mascarilla dos veces por semana como parte de tu régimen TimeWise Repair®. Retirá la mascarilla del empaque y desenvuélvela. La mascarilla está entre dos capas de malla que la protegen; retirá una de las capas y aplicá la mascarilla sobre el rostro limpio y secoColocá la mascarilla en la frente, mejillas, nariz, boca y alrededor de los ojos para una aplicación perfectaLas solapas para los párpados pueden doblarse o dejarse sobre los ojos. Aplicá suavemente la mascarilla de modo que quede totalmente adherida a la piel. Retirá cuidadosamente la capa de malla que quedó sobre la mascarilla. Dejá la mascarilla en tu rostro de 20 o 30 minutos y después retirala. Masajeá suavemente la piel; no la enjuagues. La mascarilla no es reutilizable.",
      beneficios: "La mayoría de las mujeres que probaron este producto estuvieron de acuerdo en que:*Después de usarla una sola vez:La mascarilla incrementa los niveles de humectación de la piel durante 24 horas.La piel luce visiblemente más radiante, suave y tersa. Después de dos semanas de uso: La piel luce más firme. La piel tiene un aspecto más juvenil. La piel se ve más luminosa. Después de cuatro semanas de uso: Se reduce la apariencia de líneas finas y arrugas. Revitalizador de belleza: el suplemento ideal para el régimen TimeWise Repair®. Estupendo para usarse antes de un evento especial o una noche glamurosa. * Los resultados son en base a un estudio independiente de 4 semanas con consumidoras en el cual 300 mujeres usaron el producto 2 veces por semana.",
      image: "assets/images/TimeWiseRepairVoluFirm.JPG"
    }
    ,
    {
      id: 13,
      uso: "Cara",
      name: "Gel Facial Efecto Peeling TimeWise Repair®",
      type: "Gel",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "",
      aplicacion: "Limpiar profundamente y secar la piel. Aplicar una capa fina del Gel Facial Efecto Peeling TimeWise Repair® en el rostro, evitando el área de los ojos, y masajea suavemente la piel. Después de 10 minutos, enjuaga bien con agua tibia y seca con palmaditas. Aplicalo dos veces por semana en la noche, después de lavarte el rostro y antes de aplicar cualquier suero o humectante, y deja que pasen tres días entre cada aplicación. El Gel Facial Efecto Peeling TimeWise Repair® está formulado para usarlo durante 10 minutos y continúes con los próximos pasos de tu Rutina del Cuidado de la Piel. No se debe dejar puesto toda la noche.",
      beneficios: "Gracias al poder del Ácido Glicólico, el proceso de renovación de la piel se mejora a medida que una piel de aspecto más radiante y juvenil se revela. El Ácido Glicólico que contiene el Gel Facial Efecto Peeling TimeWise Repair® funciona de inmediato para eliminar las células muertas de la capa más superficial de la piel. También impacta a las demás capas de la superficie, rompiendo los lazos que mantienen unidos a otros miles de células muertas que opacan la piel para que estas se desprendan de ella. La luminosidad de la piel se revela, la tersura mejora considerablemente, las líneas finas y arrugas lucen reducidas y la piel cobra un aspecto rejuvenecido y revitalizado con un tono más uniforme. Esta fórmula no solo es efectiva sino también lo suficientemente suave para usarse dos veces por semana. Esto se debe a que el Ácido Glicólico es combinado con una mezcla exclusiva de extractos botánicos calmantes, incluido un extracto marino que ha mostrado ayudar a brindar hidratación esencial.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/repair/producto7.jpg"
    }
    ,
    {
      id: 14,
      uso: "Cara",
      name: "Loción Facial Efecto Reafimante TimeWise Repair® Volu-Firm",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La Loción Facial Efecto Reafimante TimeWise Repair® Volu-Firm® contiene el mismo Complejo Volu-Firm® que se encuentra en la Rutina de Cuidado de la Piel de todos los productos TimeWise® Repair. Además, tiene dos nuevas generaciones de ingredientes con elementos enfocados en mantener el aspecto joven, la firmeza, elasticidad y el volumen de la piel. El innovador envase incluye una función de bloqueo giratorio y dosificador al vacío, ¡para asegurar que obtengas hasta la última gota de este poderoso suero! También tiene una ventana en el envase para que sepas cuándo es tiempo de renovar el producto.",
      aplicacion: "MAÑANA: -1 Espuma Limpiadora Facial TimeWise Repair® Volu-Firm®. -2  Loción Facial Efecto Reafimante TimeWise Repair® Volu-Firm® -3 Crema de Día Timewise Repair® Volu-Firm® con FPS 30 (SIN PROTECCION ALTA) -4 Crema de Acción Renovadora de Ojos TimeWise Repair® Volu-Firm®. NOCHE: -1 Espuma Limpiadora Facial TimeWise Repair® Volu-Firm® -2 Loción Facial Efecto Reafimante TimeWise Repair® Volu-Firm® -3 Tratamiento de Noche con Retinol TimeWise Repair® Volu-Firm® -4 Crema de Noche con Retinol TimeWise Repair® Volu-Firm®. (CREMA NO TRATAMIENTO)",
      beneficios: "Mediante el uso de múltiples métodos de pruebas, incluyendo imagen facial 3D de vanguardia, probamos la Loción Facial Efecto Reafimante TimeWise Repair® Volu-Firm®desde cada ángulo para mostrar cómo ayuda a recuperar tu triángulo de la juventud. Los resultados hablan por sí mismos; estos impresionantes números reflejan el porcentaje de panelistas que mostraron mejoría:Mostró una mejora en la piel de las mejillas y la mandíbula* 100%. La piel luce visiblemente más radiante: 98%. Mostró una mejoría en la firmeza de la piel: 82%. Mostró una reducción visible en las líneas profundas y arrugas: 98%. Mostró una mejoría en la elasticidad de la piel: 78%. Mostró un incremento en la humectación de la piel: 100%. *Según un estudio clínico independiente de 12 semanas en el cual 45 mujeres usaron el suero dos veces al día. Los porcentajes reflejan la cantidad de mujeres que mostraron mejoría. *Según pruebas bio-instrumentales. El número refleja el porcentaje de panelistas que mostraron mejoría.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/repair/producto8.jpg"
    }
    ,
    {
      id: 15,
      uso: "Cara y cuello",
      name: "Gel Limpiador Mary Kay® Botanical Effects®",
      type: "Gel",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La línea del Cuidado de la Piel Botanical Effects® es el primer paso para conseguir una piel radiante y nutrida. - Ingredientes que proporcionan beneficios esenciales. Extractos de Pitaya se unen al Aloe Vera, famosa desde hace siglos, aportando antioxidantes a cada uno de los productos. - Un cuidado de la piel simple y fácil de utilizar, que no frenará tu estilo de vida. - Resultados increíbles.",
      aplicacion: "Limpiar el rostro diariamente con el Gel Limpiador Botanical Effects® por las mañanas y las noches. Aplicarlo en el cuello y en el rostro con movimientos ascendentes. Enjuagar bien.",
      beneficios: "Contiene ingredientes de origen natural derivados del coco para limpiar la piel.Limpia en profundidad y de forma efectiva, y además elimina restos de grasitud.No deja sensación de tirantez. Deja la piel suave, nutrida y limpia.Contiene una cantidad mínima de ácido salicílico que se ha mezclado con otros ingredientes para ayudar a preservar el producto. El Gel Limpiador no se ha formulado con ácido salicílico para ayudar a prevenir o reducir brotes de acné.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/botanical/producto1.jpg"
    }
    ,
    {
      id: 16,
      uso: "Cara",
      name: "Mascarilla Exfoliante Mary Kay Botanical Effects",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La línea del Cuidado de la Piel Botanical Effects® es el primer paso para conseguir una piel radiante y nutrida. - Ingredientes que proporcionan beneficios esenciales. Extractos de Pitaya se unen al Aloe Vera, famosa desde hace siglos, aportando antioxidantes a cada uno de los productos. - Un cuidado de la piel simple y fácil de utilizar, que no frenará tu estilo de vida. - Resultados increíbles. ",
      aplicacion: "Exfoliar el rostro con la Mascarilla Exfoliante Botanical Effects®. Aplicar y masajear suavemente en el rostro con movimientos circulares, evitando el área alrededor de los ojos. Enjuagar bien. Se recomienda hacerlo 2 ó 3 veces por semana, de preferencia por las noches.",
      beneficios: "La Mascarilla Exfoliante elimina las células muertas y acaba con la piel apagada, limpiando los poros en profundidad.Formulado con semillas de frutas naturales que ayudan a desobstruir los poros.Contiene ingredientes naturales derivados del coco y la manzana. (*)El exfoliante despierta las pieles cansadas y aporta luminosidad a tu rostro",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/botanical/producto2.jpg"
    }
    ,
    {
      id: 17,
      uso: "Cara",
      name: "Tónico Facial Refrescante Mary Kay Botanical Effects",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La línea del Cuidado de la Piel Botanical Effects® es el primer paso para conseguir una piel radiante y nutrida. - Ingredientes que proporcionan beneficios esenciales. Extractos de Pitaya se unen al Aloe Vera, famosa desde hace siglos, aportando antioxidantes a cada uno de los productos. - Un cuidado de la piel simple y fácil de utilizar, que no frenará tu estilo de vida. - Resultados increíbles. ",
      aplicacion: "Después de limpiar, aplicar una pequeña cantidad del Tónico Facial Refrescante Botanical Effects® en un algodón y aplicarlo en el rostro y cuello, evitando el área de los ojos.",
      beneficios: "El Tónico Facial Refrescante disminuye la apariencia de los poros mientras elimina el exceso de grasitud.Elimina restos de impurezas – como pueden ser células muertas – para una limpieza completa.Contiene extracto de hamamelis, utilizado tradicionalmente como astringente.Ayuda a controlar el brillo, dejando la piel con un aspecto saludable y una sensación refrescante.",
      image: "http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg"
    }
    ,
    {
      id: 18,
      uso: "Cara",
      name: "Gel Humectante Mary Kay Botanical Effects",
      type: "Gel",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La línea del Cuidado de la Piel Botanical Effects® es el primer paso para conseguir una piel radiante y nutrida. - Ingredientes que proporcionan beneficios esenciales. Extractos de Pitaya se unen al Aloe Vera, famosa desde hace siglos, aportando antioxidantes a cada uno de los productos. - Un cuidado de la piel simple y fácil de utilizar, que no frenará tu estilo de vida. - Resultados increíbles. ",
      aplicacion: "Humectar la piel con el Gel Humectante Botanical Effects®, aplicarlo en el rostro y cuello con movimientos ascendentes, con los dedos anular y medio.",
      beneficios: "Este Gel Humectante de rápida absorción proporciona una humectación óptima para todo tipo de pieles, dejando una apariencia saludable.Esta fórmula ligera no deja una sensación de grasitud ni residuos, y además humecta durante 12 horas.La piel se siente suave, fresca y sin sensación de sequedad.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/botanical/producto4.jpg"
    }
    ,
    {
      id: 19,
      uso: "Cara",
      name: "Loción Humectante Facial FPS 30 Mary Kay Botanical Effects",
      type: "Loción/Locion",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La línea del Cuidado de la Piel Botanical Effects® es el primer paso para conseguir una piel radiante y nutrida. - Ingredientes que proporcionan beneficios esenciales. Extractos de Pitaya se unen al Aloe Vera, famosa desde hace siglos, aportando antioxidantes a cada uno de los productos. - Un cuidado de la piel simple y fácil de utilizar, que no frenará tu estilo de vida. - Resultados increíbles. ",
      aplicacion: "Humectar y proteger la piel de los rayos solares con la Loción Humectante Facial con FPS 30 Botanical Effects®, aplicarla 15 minutos antes de la exposición al sol en el rostro y cuello con movimientos ascendentes, con los dedos anular y medio. Volver a aplicar con frecuencia para mantener la protección.",
      beneficios: "La Hidratante con FPS 30 protege de los rayos UVA y UVB. Se absorbe rápidamente sin dejar residuos. Logra la hidratación óptima que necesita tu piel durante 12 horas. Al contener FPS, no hay de qué preocuparse al aplicar protección solar además de la humectante. La piel tiene un aspecto saludable, fresco y ¡está lista para enfrentar el día!",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/botanical/producto5.jpg"
    }
    ,
    {
      id: 20,
      uso: "Cara",
      name: "Petite Palette Mary Kay",
      type: "Sombra de ojos",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La Petite Palette de Mary Kay tiene capacidad para cuatro tonos de Sombra de Ojos Chromafusion™, para que puedas crear looks personalizados y llevarlos contigo.",
      aplicacion: "",
      beneficios: "Tapa transparente que te permite ver las sombras del interior.Recargable, de base magnética con espacio para cuatro sombras.Elige una paleta con looks ya creados o crea tu propio look.*Se vende vacía. **Cada Sombra de Ojos Chromafusion™ se vende por separado",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/ojos/sombras/producto15.jpg"
    }
    ,
    {
      id: 21,
      uso: "Cara",
      name: "Set de Brochas",
      type: "brochas",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "El Set de Brochas con Estuche Mary Kay® incluye cinco brochas de la más alta calidad, perfectas para crear multíples looks. Además podrás guardarlas en su Estuche para llevarlas a donde sea que vayas.",
      aplicacion: "",
      beneficios: "La forma de las brochas y sus cerdas sintéticas, hacen que los productos se difuminen sobre la piel de forma suave y uniforme. El Set incluye:Brocha para Rubor Mary Kay®:Esta brocha multiusos está diseñada con tres lados para ayudarte a resaltar, esculpir y destacar tus pómulos sin dejar líneas demarcadas. Utiliza los ángulos de esta brocha multidimensional para sobresaltar e iluminar tu look con confianza. Con las nuevas cerdas sintéticas tan suaves como plumas, podes captar la cantidad perfecta de polvo y también deslizarse de manera fabulosa con productos líquidos o en crema. Además, su fabulosa flexibilidad se amolda a cada contorno y difuminar a la perfección. Brocha para Polvo Mary Kay®: La Brocha para Polvos te permite conseguir un acabado impecable en un abrir y cerrar de ojos gracias a su precisa forma de domo. Brocha para Sombras Mary Kay®: Aplicá la sombra de ojos como una profesional con esta versátil brocha. Su forma cónica ayuda a que la brocha encaje de forma natural en los delicados contornos del párpado, y sus cerdas flexibles ayudan a difuminar.Este pincel tiene una punta redondeada mediana que se adapta a los perfiles naturales del párpado. Con las nuevas cerdas sintéticas tan suaves como plumas, puede captar la cantidad perfecta de sombra para ojos y también deslizarse de manera fabulosa con productos líquidos o en crema. ¡Crea con facilidad múltiples looks para tus ojos! Brocha Difuminadora para Ojos Mary Kay®: El diseño de su punta densa y afilada te ayuda a crear acentos detallados. Te permite difuminar en la línea de las pestañas para lograr el ansiado look ahumado, y ayuda a destacar las áreas de difícil acceso.Ojos ahumados, acentos detallados para tus párpados y looks que llaman la atención están a tu alcance con este pincel indispensable que debes añadir a tu colección.La punta, con una forma perfectamente densa y afilada, está diseñada para ayudarte a difuminar con éxito. Combínalo con otros pinceles Mary Kay® para crear un sinfín de looks. Las cerdas sintéticas tan suaves como plumas, captan la cantidad perfecta de sombra para ojos y también se deslizan de manera fabulosa con productos líquidos o en crema. Brocha Definidora para Ojos Mary Kay®: Este pincel está diseñado para amoldarse a los contornos y pliegues del párpado para añadir una dimensión profesional a cualquier look para tus ojos.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/aplicadores/b-set-brochas.jpg"
    }
    ,
    {
      id: 22,
      uso: "Cara",
      name: "Brocha para Polvo",
      type: "brochas",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La Brocha para Polvos La brocha para polvos te permite conseguir un acabado impecable en un abrir y cerrar de ojos gracias a su precisa forma de domo.",
      aplicacion:"",
      beneficios:"",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/aplicadores/b-brocha-polvo.jpg"
    }
    ,
    {
      id: 23,
      uso: "Cara",
      name: "Brocha para Rubor Compacto",
      type: "brochas",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La brocha perfecta para aplicar el Rubor Mary Kay Chromafusion™, el Polvo para el Contorno del Rostro Mary Kay Chromafusion™ y el Iluminador Mary Kay Chromafusion™.",
      aplicacion: "",
      beneficios: "Las cerdas sesgadas están diseñadas para facilitar el destacar, esculpir e iluminar tus pómulos para lograr una apariencia radiante sin líneas marcadas.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/aplicadores/b-brocha-rubor-compacto.jpg"
    }
    ,
    {
      id: 24,
      uso: "Cara",
      name: "Brocha para Base de Maquillaje Líquida",
      type: "brochas",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La Brocha para Base de Maquillaje Líquida Mary Kay® te permite conseguir la cobertura deseada con tu base de maquillaje. Gracias a su forma angular, permite llegar a todas las zonas del rostro.",
      aplicacion: "",
      beneficios: "Cerdas sintéticas que permiten recoger la cantidad correcta de tu base de maquillaje líquida, desde fórmulas ligeras a las más cremosas. Su punta angular permite aplicar la base de maquillaje correctamente para llegar a las zonas más difíciles del rostro. Máximo rendimiento: una recogida perfecta del producto, una aplicación sencilla y una mezcla impecable.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/aplicadores/b-Brocha-para-Base-Maquillaje-liquida.jpg"
    }
    ,
    {
      id: 25,
      uso: "Cara",
      name: "Brocha para Polvo Compacto",
      type: "brochas",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La Brocha para Polvo Compacto es perfecta para una cobertura ligera de los Polvos Chromafusion Mary Kay®.",
      aplicacion: "",
      beneficios: "La brocha tiene el mismo ancho que los Polvos Chromafusion. Este tamaño asegura que una pasada de esquina a esquina recoja la cantidad adecuada de producto para una aplicación uniforme.La base biselada del mango no solo imita el diseño moderno del Compacto Perfect, sino que también te permite retirar fácilmente la brocha del compartimiento al empujarla con un dedo por la parte inferior del mango.Esta brocha cuenta con las mismas cerdas sintéticas de alto grado y súper suaves que el Set de Brochas Mary Kay®.Cabe perfectamente en el compartimiento del Compacto Perfect Palette de Mary Kay.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/aplicadores/b-brocha-polvo-compacto.jpg"
    }
    ,
    {
      id: 26,
      uso: "Cara",
      name: "Brocha para Rubor Compacto",
      type: "brochas",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La brocha perfecta para aplicar el Rubor Mary Kay Chromafusion™, el Polvo para el Contorno del Rostro Mary Kay Chromafusion™ y el Iluminador Mary Kay Chromafusion™.",
      aplicacion: "Después de limpiar, aplicar una pequeña cantidad del Tónico Facial Refrescante Botanical Effects® en un algodón y aplicarlo en el rostro y cuello, evitando el área de los ojos.",
      beneficios: "Las cerdas sesgadas están diseñadas para facilitar el destacar, esculpir e iluminar tus pómulos para lograr una apariencia radiante sin líneas marcadas.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/aplicadores/b-brocha-rubor-compacto.jpg"
    }
    ,
    {
      id: 27,
      uso: "Cara",
      name: "Brocha Oval para Maquillaje Mary Kay",
      type: "brochas",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La Brocha Oval para Maquillaje Mary Kay ayuda a aplicar la Base de manera uniforme de forma muy rápida y sencilla.",
      aplicacion: "Aplicá la Base de Maquillaje TimeWise 3D™ directamente en la Brocha o pasa la Brocha sobre la Base en Crema con Acabado en Polvo. Aplicá suavemente la base con movimientos circulares o cortos hasta lograr el look que deseas.",
      beneficios: "Las cerdas sintéticas elaboradas con maestría permiten obtener la cantidad justa del producto en fórmula líquida o crema.El mango único proporciona excelente control para lograr un acabado rápido e impecable y desempeño profesional en casa.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/aplicadores/b-brocha-oval.jpg"
    }
    ,
    {
      id: 28,
      uso: "Cara",
      name: "Esponja para Maquillaje Mary Kay",
      type: "brocha",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Esta herramienta versátil y reutilizable puede ayudarlo a lograr un acabado impecable.",
      aplicacion: "Mojá la esponja y exprimí el exceso de agua.Aplicá una pequeña cantidad de producto en la mano o en la paleta, y levantá el producto con la esponja humedecida. Con un suave movimiento de palmaditas, apliá el producto al área deseada.Utilizá la parte inferior plana de la esponja para la aplicación de estilo de punteado en áreas grandesLa punta es ideal para áreas más pequeñas, así como para la mezcla general.",
      beneficios: "Cuenta con un diseño ergonómico fácil de agarrar y bordes duales personalizados. Es perfecto para la aplicación de Bases en crema, líquidas, correctores y más. El extremo plano es perfecto para mezclar áreas más grandes. La punta está diseñada para áreas de difícil acceso, como debajo de los ojos.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/aplicadores/b-esponja-oscura.jpg"
    }
    ,
    {
      id: 29,
      uso: "Cara",
      name: "Tónico Facial Refrescante Mary Kay Botanical Effects",
      type: "Tonico/tónico",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La línea del Cuidado de la Piel Botanical Effects® es el primer paso para conseguir una piel radiante y nutrida. - Ingredientes que proporcionan beneficios esenciales. Extractos de Pitaya se unen al Aloe Vera, famosa desde hace siglos, aportando antioxidantes a cada uno de los productos. - Un cuidado de la piel simple y fácil de utilizar, que no frenará tu estilo de vida. - Resultados increíbles. ",
      aplicacion: "Después de limpiar, aplicar una pequeña cantidad del Tónico Facial Refrescante Botanical Effects® en un algodón y aplicarlo en el rostro y cuello, evitando el área de los ojos.",
      beneficios: "El Tónico Facial Refrescante disminuye la apariencia de los poros mientras elimina el exceso de grasitud.Elimina restos de impurezas – como pueden ser células muertas – para una limpieza completa.Contiene extracto de hamamelis, utilizado tradicionalmente como astringente.Ayuda a controlar el brillo, dejando la piel con un aspecto saludable y una sensación refrescante.",
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
