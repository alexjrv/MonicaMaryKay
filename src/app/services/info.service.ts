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
