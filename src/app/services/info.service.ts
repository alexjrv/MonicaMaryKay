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
      message:"Set%20Milagroso%20TimeWise%20Age%20Minimize%203D",
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
      message:"Mascarilla%20Renovadora%20en%20Gel%20TimeWise",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Este producto multifuncional da nueva vida a una piel cansada y estresada. La Mascarilla Renovadora en Gel TimeWise® hidrata profundamente, humecta al contacto y brinda otros beneficios adicionales. 10 minutos de mimos. 10 beneficios renovadores para tu piel.",
      aplicacion: "Luego de limpiar la piel del rostro, aplicar una capa abundante y uniforme de Mascarilla, dejar actuar de 5 a 10 minutos. Enjuagar con agua tibia o quitar con una toallita humedecida con agua tibia.Utilizar de 2 a 3 veces por semana. NO utilizar el mismo día que otra mascarilla o el Set de Microexfoliación.Dejar pasar al menos un día para volver a utilizarla.Tener en cuenta que para un tratamiento más intenso, se puede aplicar la Mascarilla antes de irse a dormir y dejar actuar durante la noche, sin removerla lo que permitirá que la misma actúe durante más horas. Retirarla por la mañana con el Limpiador 3 en 1 TimeWise.",
      beneficios: "Hidrata instantáneamente, a la vez que bloquea la pérdida de humedad. La piel luce más relajada, se siente más nutrida y fresca. Ayuda a la piel a lucir más firme, con apariencia saludable, suave y con mejor textura. Ayuda a reducir la apariencia de los poros, como así también de líneas finas y arrugas. 10 minutos de mimos. 10 beneficios renovadores para la piel: - 1 Hidrata instantáneamente. - 2 Sella la humedad. - 3 Relaja. - 4 Purifica. - 5 Nutre. - 6 Refresca. - 7 Reafirma. - 8 Empareja. - 9 Suaviza. - 10 Minimiza los poros",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/piel/producto2.jpg"
    }
    ,
    {
      id: 2,
      uso: "Cara",
      name: "Set de Microexfoliación Plus TimeWise®",
      message:"Set%20de%20Microexfoliación%20Plus%20TimeWise",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Obtené la apariencia de piel más suave, joven y poros visiblemente más pequeños.",
      aplicacion: "Después de limpiar el rostro, aplicar una pequeña cantidad del Paso 1 Microexfoliante Refinador TimeWise con la punta de los dedos en el rostro húmedo. Exfoliar la piel realizando suaves movimientos circulares ascendentes, evitando el área de los ojos y los labios. Enjuagar a la perfección con agua tibia y secar la piel con palmaditas (cerrar los ojos al enjuagar). Usar la yema de los dedos para aplicar gentilmente el Paso 2. Minimizador de Poros TimeWise®. IMPORTANTE: Usar dos o tres veces a la semana, dejando pasar dos días entre cada aplicación. No utilizar el mismo día que una mascarilla. El Paso 2 se puede usar de modo independiente todos los días por las mañanas y las noches. La frecuencia de uso debe ser menor en las pieles delicadas.",
      beneficios: "Beneficios inmediatos: Inmediatamente tu piel luce más joven y los poros más pequeños. Mejora dramáticamente la textura de la piel. Visiblemente mejora la apariencia de finas líneas de expresión. Da un efecto de alta definición a tu piel. Incluye: Microexfoliante Refinador TimeWise® 70g y Minimizador de Poros TimeWise ® 29ml. La transformación de tu piel comienza con el Microexfoliante Refinador. Su suave exfoliación refina de inmediato la textura de la piel a la vez que elimina de la superficie, las células de piel muerta y la acumulación en los poros. Los poros congestionados hacen que la pared de los mismos se dilate y cause que los poros luzcan distendidos y más grandes. Eliminar las impurezas atrapadas en los poros es un primer paso importante hacia mejorar su apariencia. Formulado con el ingrediente clave para exfoliar que utilizan los dermatólogos, el Microexfoliante refinador revela al instante un cutis de apariencia saludable con una sensación suave y revitalizada. Utilizarlo dos o tres veces por semana para un cutis bellamente refinado. Este suero nutritivo ayuda a calmar y reconfortar la piel al instante. Es el paso perfecto para después del Microexfoliante Refinador para reducir la apariencia de enrojecimiento y aliviar la piel delicada. Se puede utilizar todos los días, dos veces por día, para refinar la apariencia de poros dilatados con el tiempo y lograr un cutis visiblemente más terso y de apariencia impecable. Paso 1. Microexfoliante Refinador TimeWise®: Toda transformación de la piel comienza con una suave exfoliación. Ayuda a reducir la apariencia de líneas finas de expresión. Ayuda a refinar la textura de la piel al instante.Remueve las células muertas de la piel y la acumulación de suciedad en los poros.Paso 2. Minimizador de Poros TimeWise®:Ayuda a reducir significativamente los poros visibles para una piel con apariencia más suave.Deja una piel visiblemente más lisa. Con el uso continuo obtendrás mejores resultados.Reconforta la piel y ayuda a reducir el enrojecimeinto.Después de usar el Set de Microexfoliación Plus TimeWise® por sólo una semana: 87%20 notaron una mejoría notable en la piel. 82%20 Observaron significativamente la reducción de la apariencia de los poros. 78%20 Sintieron un cambio inmediato en la piel. 77%20 Observaron que su piel lucía una apariencia más joven.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/piel/producto14.jpg"
    }
    ,
    {
      id: 3,
      uso: "Cara",
      name: "Suero Corrector de Tono Facial TimeWise®",
      message:"Suero%20Corrector%20de%20Tono%20Facial%20TimeWise",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Iguala visiblemente la apariencia del tono de la piel y ha demostrado clínicamente una mejora considerable en la luminosidad de la piel. • Se trata del primer e innovador avance para iluminar la piel con nuestro complejo Perfectly Bright™ (patente pendiente). • El 95%20 de las mujeres experimentó una reducción en el aspecto de las manchas oscuras después de 12 semanas*. *Los resultados son en base a las observaciones realizadas por un experto independiente en medición de la piel que evaluó la mejoría experimentada por 60 mujeres que usaron el producto 2 veces al día como parte de un estudio clínico independiente de 12 semanas",
      aplicacion: "Si usás el Set Milagroso TimeWise®: DÍA . - 1 Limpiador 3 en 1 TimeWise. - 2 Líquido Refrescante Renovador TimeWise. - 3 Suero Corrector de Tono Facial TimeWise. - 4 Solución Diurna con FPS 35 AM TimeWise. - 5 Humectante Anti-Edad TimeWise. NOCHE . 1 - Demaquillador de Ojos Libre de Aceite. - 2 Limpiador 3 en 1 TimeWise. - 3 Líquido Refrescante Renovador TimeWise. - 4 Suero Corrector de Tono Facial TimeWise. - 5 Solución Nocturna PM TimeWise. Humectante Anti-Edad TimeWise. Si usás TimeWise Repair®: DÍA - 1 Espuma Limpiadora Facial Volu-Firm. - 2 Suero Corrector de Tono Facial TimeWise. - 3 Loción Facial Efecto Reafirmante Volu-Firm. - 4 Crema Facial para el Día Efecto Reparador FPS 30. - 5 Crema de Acción Renovadora para el Contorno de Ojos. NOCHE: - 1 Espuma Limpiadora Facial Volu-Firm. - 2 Suero Corrector de Tono Facial TimeWise. - 3 Loción Facial Efecto Reafirmante Volu-Firm. - 4 Crema Facial para Nocturna Efecto Reparador con Retinol Volu-Firm. - 5 Crema de Acción Renovadora para el Contorno de Ojos",
      beneficios: "¡3 BENEFICIOS EN UN SOLO PRODUCTO! Ayuda a reducir la apariencia de manchas oscuras.Ayuda a restaurar el tono natural de la piel para un color más uniforme.Brinda luminosidad a la piel gracias a su complejo Perfectly Bright™.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/rostro/correctores/producto5-2021.jpg"
    }
    ,
    {
      id: 4,
      uso: "Cara",
      name: "Humectante anti-edad Timewise",
      message:"Humectante%20anti-edad%20Timewise",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Reducí la apariencia de líneas finas con esta crema humectante libre de aceite que hidrata tu piel hasta por 10 horas, y acelera el proceso natural de renovación de la piel para brindarte resultados visibles. Disponible para piel Combinada a Grasa.",
      aplicacion: "Utilizar todos los días por la mañana y la noche. Aplicar en el rostro limpio y seco con suaves movimientos circulares ascendentes. Orden de aplicación: - 1 Limpiar, - 2 Exfoliar, - 3 Refrescar, - 4 Productos Complementarios, -5 Humectar, -6 Proteger",
      beneficios: "Su complejo patentado reduce la apariencia de líneas finas de expresión al acelerar el proceso natural de renovación de la piel, para mostrar una piel más firme, tersa y con menos finas líneas de expresión. Una mezcla especial de agentes hidratantes ayuda a mantener la piel hidratada hasta por 10 horas. Se absorbe rápidamente dejando una piel suave, flexible, firme y siempre fresca. La Crema Humectante Anti-Edad para piel Combinada a Grasa, es una loción tipo gel ligera y sin aceites que ayuda a controlar el exceso de grasitud.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/piel/producto3.jpg"
    }
    ,
    {
      id: 5,
      uso: "Cara",
      name: "Limpiador 3 en 1 Timewise",
      message:"Limpiador%203%20en%201%20Timewise",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "El Limpiador 3 en 1 TimeWise® combate los efectos del paso del tiempo sobre la piel, además de limpiar, exfoliar y refrescar, revelando una piel más joven. Disponible para piel normal a seca y combinada a grasa.",
      aplicacion: "Utilizar todos los días por la mañana y la noche. Aplicar en el rostro húmedo con suaves movimientos circulares ascendentes, evitando el área de los ojos y los labios. Retirar todos los restos de producto con agua tibia o una toalla húmeda.",
      beneficios: "Combina el antienvejecimiento con 3 funciones esenciales: limpia, exfolia y refresca, revelando una piel de apariencia más joven, lista para recibir los nutrientes de los siguientes productos. Esferas limpiadoras remueven las células muertas de la piel mediante la exfoliación y su complejo patentado reduce la apariencia de líneas finas de expresión al acelerar el proceso natural de renovación de la piel. El Limpiador 3 en 1 para piel Normal a Seca es un líquido cremoso con microesferas rosadas. El Limpiador 3 en 1 para piel Combinada a Grasa es un gel transparente, espumoso y sin aceites, con microesferas lilas, que deja la piel sintiéndose fresca, mientras controla el exceso de grasitud.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/piel/producto1.jpg"
    }
    ,
    {
      id: 6,
      uso: "Cara",
      name: "Agua Micelar",
      message:"Agua%20Micelar",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Disfrutá de una piel fresca y limpia en segundos, estés donde estés, después de hacer ejercicio, cuando estés apurada o ¡cuando quieras! Su fórmula está compuesta de agua purificada y bajas cantidades de tensioactivos suaves. Estos se agrupan formando pequeñas esferas llamadas micelas que actúan como imanes para atraer la acumulación de impurezas en la piel del rostro.",
      aplicacion: "Agregá el Agua Micelar Mary Kay® a tu rutina diaria, y logra una piel libre de impurezas. Limpieza Profunda | Paso a paso: - 1. Desmaquillante para Ojos Mary Kay® perfecto para eliminar el maquillaje de tus ojos, incluso el que es a prueba de agua. - 2 Agua Micelar Mary Kay® ayuda a desmaquillar la cara, eliminar impurezas, refrescar la piel durante el día y prepararla para el resto de la rutina diaria de cuidado de la piel. Limpiá el rostro con la Crema Limpiadora Mary Kay® favorita.Tónico Facial Refrescante Botanical Effects™ minimiza el tamaño de los poros y ayuda a controlar el brillo. Limpieza en Segundos | Paso a paso: - 1 Desmaquillante para Ojos Mary Kay® perfecto para eliminar el maquillaje de tus ojos, incluso el que es a prueba de agua. - 2 Agua Micelar Mary Kay® ayuda a desmaquillar la cara, eliminar impurezas, refrescar la piel durante el día y prepararla para el resto de la rutina diaria de cuidado de la piel.Tónico Facial Refrescante Botanical Effects™ minimiza el tamaño de los poros y ayuda a controlar el brillo. *Tip de Aplicación: Aplicá sobre un algodón el Agua Micelar Mary Kay®, delicadamente deslizá sobre el rostro. Limpiá, evitando el área de los ojos y los labios.",
      beneficios: `Remueve las impurezas de la superficie de la piel. Limpia suavemente la piel del rostro. Elimina el maquillaje. No necesita enjuague. Deja la piel hidratada.`,
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/piel/producto20.jpg"
    }
    ,
    {
      id: 7,
      uso: "Cara",
      name: "Suero Regenerador C+E TimeWise",
      message:"Suero%20Regenerador%20C%20E%20TimeWise",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "El Suero Regenerador C + E TimeWise™ incluye la combinación extraordinaria de las vitaminas C + E. La vitamina E, es un antioxidante reconocido, que al mezclarse con la vitamina C, ayudan a defender la piel de los radicales libres que provocan el envejecimiento prematuro. Su uso diario le aporta a la piel firmeza, luminosidad y la protege de los radicales libres que generan el envejecimiento prematuro.",
      aplicacion: "",
      beneficios: "Ayuda en la firmeza y elasticidad de la piel. Mejora su luminosidad y textura. Reduce la apariencia de arrugas y finas líneas de expresión. Ayuda unificar el tono de la piel. Protege del estrés oxidativo. Para todo tipo de piel, incluso aquellas que son sensibles.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/piel/producto21.jpg"
    }
    ,
    {
      id: 8,
      uso: "Contorno ojos",
      name: "Crema Renovadora para el Contorno de los Ojos Volufirm™",
      message:"Crema%20Renovadora%20para%20el%20Contorno%20de%20los%20Ojos%20Volufirm",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La línea TimeWise Repair™ Volu-Firm™ es un régimen del Cuidado de la Piel científicamente innovador que combina la investigación extensa, ingredientes innovadores y pruebas amplias para entregar los beneficios pensados para contrarrestar las señales avanzadas del envejecimiento de la piel. La Crema de Acción Renovadora para el  Contorno de los Ojos Volu- Firm™ revive los ojos cansados y brinda una apariencia más estirada (“efecto lifting”).",
      aplicacion: "Presionar el tubo hasta que salga un poco de producto, deslizar el aplicador dando suaves masajes en el área de alrededor de los ojos, con movimientos hacia afuera. Su aplicador exclusivo fue diseñado para que se acople perfectamente a la forma del ojo. La suave punta de metal está diseñada para ayudar a influenciar la microcirculación al ofrecerle un suave masaje al área debajo de los ojos y ayudar a reducir la hinchazón. Tecnología de cristal líquido: La Crema de Acción Renovadora para el Contorno de los Ojos Volu-Firm™ ofrece un sistema único de entrega de cristal líquido que ayuda a mejorar la efectividad del producto. Se seleccionó este innovador sistema de entrega ya que la estructura de los cristales líquidos es parecida a la barrera de la piel y esto podría ayudar a que la piel sea más receptiva a los beneficios del producto.",
      beneficios: "Se concentra en las líneas y arrugas profundas y la piel flácida. Se concentra en las bolsas, la hinchazón y las ojeras debajo de los ojos. Se concentra en la piel rugosa y reseca. Incrementa la humectación de la piel durante 12 horas. Cuenta con una innovadora tecnología de cristal líquido que mejora su efectividad. Después de una semana: Ayuda a reducir la apariencia de la piel rugosa: 74%. Ayuda a minimizar la apariencia de las ojeras y las bolsas debajo de los ojos: 68%. Después de dos semanas: Reafirma y tonifica la apariencia de piel flácida alrededor de los ojos:73%. Minimiza la apariencia de las arrugas profundas:70%. Restaura la apariencia de un (“efecto lifting”) juvenil: 71. Después de cuatro semanas: Ayuda a reparar la apariencia de la piel: 85%. Reduce la apariencia de párpados caídos: 67% Resultados basados en un estudio independiente de cuatro semanas con consumidoras. Los resultados reflejan el porcentaje de mujeres que estuvo de acuerdo con la aseveración.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/repair/producto2.jpg"
    }
    ,
    {
      id: 9,
      uso: "Cara",
      name: "Crema Facial Nocturna Efecto Reparador Con Retinol Volu-Firm™",
      message:"Crema%20Facial%20Nocturna%20Efecto%20Reparador%20Con%20Retinol%20Volu-Firm",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La línea TimeWise Repair™ Volu-Firm™ es un régimen del Cuidado de la Piel científicamente innovador que combina la investigación extensa, ingredientes innovadores y pruebas amplias para entregar los beneficios pensados para contrarrestar las señales avanzadas del envejecimiento de la piel. Reactiva la apariencia juvenil con retinol.",
      aplicacion: "Aplicar con los dedos en el rostro y cuello con generosos movimientos ascendentes y hacia afuera.",
      beneficios: "La piel recobra su firmeza y se restaura un tono de piel uniforme.Inmediatamente duplica la hidratación de la piel y aumenta la humectación de la piel hasta por 12 horas.El Complejo Volu-Firm contiene las células madre de plantas y péptidos especializados que ayudan a proporcionar el catalizador para la renovación de la piel.Da una tersura visible a la piel del área del cuello.Ayuda a acelerar la renovación celular para revelar una piel de apariencia radiante.*.(*) Basado en datos científicos. Durante un estudio independiente con consumidoras†, la mayoría de las mujeres estuvieron de acuerdo en que las manchas de la edad eran menos notables, la textura de la piel mejoró drásticamente y el área del cuello lució visiblemente más tersa con líneas y arrugas visiblemente más suaves. Esto fue lo que dijeron: Ayuda a mejorar las señales avanzadas del envejecimiento: 76%. La piel recupera su firmeza: 71%. El área de la mandíbula tiene una apariencia más definida: 67%. Restaura la elasticidad juvenil: 81%. Restaura la uniformidad en el tono de la piel: 86%. Realza la apariencia general de la piel: 90%. Resultados basados en un estudio independiente de 4 semanas con consumidoras. Los resultados reflejan el porcentaje de mujeres que estuvieron de acuerdo con la afirmación. Además, la Crema Facial Nocturna Efecto Reparador con Retinol Volu-Firm: Ayuda a acelerar la renovación celular para revelar piel de apariencia radiante, de manera que las células más nuevas y juveniles suban a la superfice. Ayuda a proteger la integridad de la piel**. El retinol es conocido por influir en la síntesis del colágeno y la elastina, y por fomentar la comunicación celular. Ayuda a reducir la glicación*. La glicación es una reacción química que ocurre cuando moléculas de azúcar se adhieren a una proteína de la piel, como el colágeno y la elastina, y forman una proteína glicosilada. A medida que la piel envejece, el proceso de glicación se acelera y puede ocasionar flacidez, piel rugosa y arrugas más pronunciadas asociadas al envejecimiento avanzado de la piel.Ayuda a reponer la hidratación vital. Está formulada con un ingrediente botánico marino que se ha demostrado aumenta los niveles de AQP3 (Aquaporin 3)*. Las aquaporinas son proteínas de la piel que crean canales que permiten que el agua se conduzca a donde más se necesita para ayudar a mantener la piel hidratada.Ayuda a minimizar la actividad de las enzimas que producen pigmentos*. Está formulada con un extracto de regaliz que minimiza la actividad de la tirosinasa, la enzima crítica para la síntesis de melanina que puede causar manchas oscuras y un tono desparejo en la piel. *Basado en testeos in vitro de los ingredientes claves. ** Basado en datos científicos publicados.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/repair/producto3.jpg"
    }
    ,
    {
      id: 10,
      uso: "Cara",
      name: "Crema Facial para el día Efecto Reparador con Fps 30",
      message:"Crema%20Facial%20para%20el%20día%20Efecto%20Reparador%20con%20Fps%2030",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La línea TimeWise Repair™ Volu-Firm™ es un régimen del Cuidado de la Piel científicamente innovador que combina la investigación extensa, ingredientes innovadores y pruebas amplias para entregar los beneficios pensados para contrarrestar las señales avanzadas del envejecimiento de la piel. La Crema Facial para el Día Efecto Reparador con FPS 30 resiste el envejecimiento como nunca antes.",
      aplicacion: "Aplicar con los dedos en el rostro y cuello con generosos movimientos ascendentes y hacia afuera.",
      beneficios: "Ayuda a minimizar la apariencia de arrugas profundas.Ayuda a minimizar la reacción de la piel a agentes externos. *Después de 4 semanas† la mayoría de las mujeres estuvo de acuerdo con que la crema ayudó a mejorar la apariencia de la piel.El Complejo Volu-Firm contiene las células madre de plantas y péptidos especializados que ayudan a proporcionar el catalizador para la renovación de la piel.Inmediatamente triplica la hidratación de la piel y aumenta la humectación hasta por 12 horas.(*) Basado en pruebas in-vitro para ingredientes clave. Durante un estudio independiente con consumidoras†, la mayoría de las mujeres acordaron que la Crema Facial para el Día Efecto Reparador con FPS 30 Volu-Firm ayudó a que su piel se sintiera instantáneamente hidratada y aliviada; restauró la elasticidad juvenil de la piel y el área del cuello lució más firme. Esto fue lo que dijeron: Ayuda a minimizar la apariencia de arrugas profundas: 70%. Suaviza la apariencia rugosa del cuello: 74%. Restaura la elasticidad juvenil: 80%. Restaura la uniformidad en el tono de la piel: 82%. Resultados basados en un estudio independiente de 4 semanas con consumidoras. Los resultados reflejan el porcentaje de mujeres que estuvieron de acuerdo con la afirmación. Además, la Crema Facial para el Día Efecto Reparador con FPS 30 Volu-Firm: Ayuda a reducir la glicación. La glicación es una reacción química que ocurre cuando moléculas de azúcar se adhieren a una proteína de la piel, como el colágeno y la elastina, y forman una proteína glicosilada. A medida que la piel envejece, el proceso de glicación se acelera y puede ocasionar flacidez, piel rugosa y arrugas más pronunciadas asociadas al envejecimiento avanzado de la pielAyuda a minimizar la reacción de la piel a irritantes externos. A medida que la piel envejece, se torna más delgada y frágil y, por lo tanto, es más susceptible al daño y la resequedad. Esta crema está formulada con ingredientes diseñados para ayudar a reducir las proteínas asociadas al enrojecimiento para poder normalizar las reacciones de la piel a los agentes estresantes de la vida diaria.Ayuda a minimizar la actividad de las enzimas que producen pigmentos. Esta suntuosa crema está formulada con un ingrediente que minimiza la actividad de la tirosinasa*, la enzima crítica para la síntesis de melanina que puede causar manchas oscuras y un tono desparejo en la piel.Brinda protección de amplio espectro contra los daños causados por los rayos ultravioleta A y B. Los expertos concuerdan en que la exposición solar es la causa principal del envejecimiento en la piel. Esta fórmula ayuda a proteger contra los rayos ultravioleta A y B que causan quemaduras y envejecimiento en la piel y también es fotoestable, lo cual significa que la fórmula mantiene su integridad y poder protector aun después de exponerse a la luz solar. *Basado en testeos in vitro de los ingredientes claves.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/repair/producto4.jpg"
    }
    ,
    {
      id: 11,
      uso: "Cara y Cuello",
      name: "Espuma Limpiadora Facial Volu-Firm",
      message:"Espuma%20Limpiadora%20Facial%20Volu-Firm",
      type: "Limpiadora",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La línea TimeWise Repair™ Volu-Firm™ es un régimen del Cuidado de la Piel científicamente innovador que combina la investigación extensa, ingredientes innovadores y pruebas amplias para entregar los beneficios pensados para contrarrestar las señales avanzadas del envejecimiento de la piel. La Espuma Limpiadora Facial Volu-Firm revitaliza, renueva y va más allá de limpiar la piel.",
      aplicacion: "Aplicar un poco de la fórmula en las manos y mezclar con agua hasta crear espuma. Emplear en el rostro y cuello masajeando suavemente. Evitar el área de los ojos y la boca. Después de unos minutos enjuagar la piel con agua tibia.",
      beneficios: "La espuma rica en humectación ayuda a renovar el resplandor de la piel y su textura. La piel se siente suave como la de un bebé, nutrida y lista para el siguiente paso del régimen TimeWise RepairTM. El Complejo Volu-Firm contiene las células madre de plantas y péptidos especializados que ayudan a proporcionar el catalizador para la renovación de la piel. Mantiene el balance de humectación y deja los poros con una apariencia menos visible. Deja la piel sintiéndose elástica. Además, Limpia la piel profundamente sin dejarla sintiéndose despojada. Ayuda a brindarle una limpieza profunda al cutis y a la vez lo trata con la suavidad que necesita y merece. Está diseñado para ayudar a la piel a retener sus lípidos naturales para que la piel se sienta suave, tersa y maravillosamente humectada.Ayuda a proteger la barrera de la piel. Ayuda a eliminar las células muertas que se acumula, tapan los poros y disminuyen su resplandor. Al eliminar las células muertas de la capa externa de la piel, las células nuevas y más jóvenes pueden subir a la superficie. De esta manera, ayuda a proteger la barrera de la piel, un beneficio crítico a medida que la piel envejece y es cuando la superficie externa de la piel puede estar en peligro más fácilmente. Luego de una semana de usar la Espuma Limpiadora Facial Volu-Firm, la mayoría de las mujeres estuvieron de acuerdo en que ilumina la piel, se siente rica y suave y deja la piel perfectamente preparada para el paso siguiente. A continuación, comentarios adicionales que hicieron: Mantiene el balance de humectación: 86%. Renueva el resplandor de la piel: 87%. La piel se siente más elástica: 89%. Deja la piel sintiéndose consentida: 90%. Resultados basados en un estudio independiente de 1 semana con consumidoras. Los resultados reflejan el porcentaje de mujeres que estuvo de acuerdo con la afirmación.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/repair/producto5.jpg"
    }
    ,
    {
      id: 12,
      uso: "Cara",
      name: "Mascarilla de Biocelulosa TimeWise Repair",
      message:"Mascarilla%20de%20Biocelulosa%20TimeWise%20Repair",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Observa un efecto lifting en solo dos semanas* con esta lujosa e innovadora mascarilla inspirada en el mundo de la belleza coreana.¡Ideal para complementar con tu rutina del Cuidado de la Piel de TimeWise Repair!",
      aplicacion: "Para mejores beneficios, usá la mascarilla dos veces por semana como parte de tu régimen TimeWise Repair®. Retirá la mascarilla del empaque y desenvuélvela. La mascarilla está entre dos capas de malla que la protegen; retirá una de las capas y aplicá la mascarilla sobre el rostro limpio y secoColocá la mascarilla en la frente, mejillas, nariz, boca y alrededor de los ojos para una aplicación perfectaLas solapas para los párpados pueden doblarse o dejarse sobre los ojos. Aplicá suavemente la mascarilla de modo que quede totalmente adherida a la piel. Retirá cuidadosamente la capa de malla que quedó sobre la mascarilla. Dejá la mascarilla en tu rostro de 20 o 30 minutos y después retirala. Masajeá suavemente la piel; no la enjuagues. La mascarilla no es reutilizable.",
      beneficios: "La mayoría de las mujeres que probaron este producto estuvieron de acuerdo en que:*Después de usarla una sola vez:La mascarilla incrementa los niveles de humectación de la piel durante 24 horas.La piel luce visiblemente más radiante, suave y tersa. Después de dos semanas de uso: La piel luce más firme. La piel tiene un aspecto más juvenil. La piel se ve más luminosa. Después de cuatro semanas de uso: Se reduce la apariencia de líneas finas y arrugas. Revitalizador de belleza: el suplemento ideal para el régimen TimeWise Repair®. Estupendo para usarse antes de un evento especial o una noche glamurosa. * Los resultados son en base a un estudio independiente de 4 semanas con consumidoras en el cual 300 mujeres usaron el producto 2 veces por semana.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/repair/producto6.jpg"
    }
    ,
    {
      id: 13,
      uso: "Cara",
      name: "Gel Facial Efecto Peeling TimeWise Repair®",
      message:"Gel%20Facial%20Efecto%20Peeling%20TimeWise%20Repair%20",
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
      message:"Loción%20Facial%20Efecto%20Reafimante%20TimeWise%20Repair%20Volu-Firm",
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
      message:"Gel%20Limpiador%20Mary%20Kay%20Botanical%20Effects",
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
      message:"Mascarilla%20Exfoliante%20Mary%20Kay%20Botanical%20Effects",
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
      message:"Tónico%20Facial%20Refrescante%20Mary%20Kay%20Botanical%20Effects",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La línea del Cuidado de la Piel Botanical Effects® es el primer paso para conseguir una piel radiante y nutrida. - Ingredientes que proporcionan beneficios esenciales. Extractos de Pitaya se unen al Aloe Vera, famosa desde hace siglos, aportando antioxidantes a cada uno de los productos. - Un cuidado de la piel simple y fácil de utilizar, que no frenará tu estilo de vida. - Resultados increíbles. ",
      aplicacion: "Después de limpiar, aplicar una pequeña cantidad del Tónico Facial Refrescante Botanical Effects® en un algodón y aplicarlo en el rostro y cuello, evitando el área de los ojos.",
      beneficios: "El Tónico Facial Refrescante disminuye la apariencia de los poros mientras elimina el exceso de grasitud.Elimina restos de impurezas – como pueden ser células muertas – para una limpieza completa.Contiene extracto de hamamelis, utilizado tradicionalmente como astringente.Ayuda a controlar el brillo, dejando la piel con un aspecto saludable y una sensación refrescante.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/botanical/producto3.jpg"
    }
    ,
    {
      id: 18,
      uso: "Cara",
      name: "Gel Humectante Mary Kay Botanical Effects",
      message:"Gel%20Humectante%20Mary%20Kay%20Botanical%20Effects",
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
      message:"Loción%20Humectante%20Facial%20FPS%2030%20Mary%20Kay%20Botanical%20Effects",
      type: "Locion",
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
      message:"Petite%20Palette%20Mary%20Kay",
      type: "Sombra",
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
      message:"Set%20de%20Brochas",
      type: "Brocha",
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
      message:"Brocha%20para%20Polvo",
      type: "Brocha",
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
      message:"Brocha%20para%20Rubor%20Compacto",
      type: "Brocha",
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
      message:"Brocha%20para%20Base%20de%20Maquillaje%20Líquida",
      type: "Brocha",
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
      message:"Brocha%20para%20Polvo%20Compacto",
      type: "Brocha",
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
      message:"Brocha%20para%20Rubor%20Compacto",
      type: "Brocha",
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
      message:"Brocha%20Oval%20para%20Maquillaje%20Mary%20Kay",
      type: "Brocha",
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
      message:"Esponja%20para%20Maquillaje%20Mary%20Kay",
      type: "Brocha",
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
      name: "Esponjas Cosméticas x 2",
      message:"Esponjas%20Cosméticas%20x%202",
      type: "Brocha",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La línea del Cuidado de la Piel Botanical Effects® es el primer paso para conseguir una piel radiante y nutrida. - Ingredientes que proporcionan beneficios esenciales. Extractos de Pitaya se unen al Aloe Vera, famosa desde hace siglos, aportando antioxidantes a cada uno de los productos. - Un cuidado de la piel simple y fácil de utilizar, que no frenará tu estilo de vida. - Resultados increíbles. ",
      aplicacion: "",
      beneficios: "Las Esponjas Cosméticas de Mary Kay® son ideales para aplicar la Base de Maquillaje en Crema con acabado en Polvo o para difuminar el Corrector Perfecting Concealer, Iluminador para Ojos o las Bases Líquidas Mary Kay®. La textura microfina ayuda a proporcionar la máxima flexibilidad para una aplicación pareja y uniforme. Además de reducir desperdicios de maquillaje permite aplicarlo en zonas difíciles como la parte inferior de los ojos y el contorno de la nariz.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/aplicadores/b-esponjas.jpg"
    }
    ,
    {
      id: 30,
      uso: "Cara",
      name: "Perfect Palette Mary Kay",
      message:"Perfect%20Palette%20Mary%20Kay",
      type: "Brocha",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La línea del Cuidado de la Piel Botanical Effects® es el primer paso para conseguir una piel radiante y nutrida. - Ingredientes que proporcionan beneficios esenciales. Extractos de Pitaya se unen al Aloe Vera, famosa desde hace siglos, aportando antioxidantes a cada uno de los productos. - Un cuidado de la piel simple y fácil de utilizar, que no frenará tu estilo de vida. - Resultados increíbles. ",
      aplicacion: "",
      beneficios: "De diseño moderno y elegante, podes personalizarla con infinidad de productos gracias a su interior magnetizado.Apta para colocar Sombras Chromafusion Mary Kay, Rubores, Contorno e Iluminador Chromafusion Mary Kay, Base en Crema Acabado en Polvo Mary Kay y ¡hasta aplicadores Mary Kay!La Perfect Palette incluye un espejo, por lo que podrás llevarla siempre con vos y retocar tu look en cualquier momento y lugar.¡A donde vayas, tu belleza va con vos! *Se vende vacía",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/rostro/rubores/producto5.jpg"
    }
    ,
    {
      id: 31,
      uso: "Cara",
      name: "Rubores Compactos Mary Kay Chromafusion",
      message:"Rubores%20Compactos%20Mary%20Kay%20Chromafusion",
      type: "rubor",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Para un rubor natural mate o luminoso, elegí entre los 6 nuevos tonos de Rubores Chromafusion™.",
      aplicacion: "Aplicalo en los pómulos o en las mejillas para un toque de color ligero pero radiante desde cualquier luz. Gracias a la tecnología Chromafusion™ Matrix, cada aplicación será sedosa, aportando un brillo duradero y natural.De larga duración: no importa la actividad que desarrolles a lo largo del día ¡ Permanecerás impecable!Tonos diseñados para favorecer a cualquier tipo de piel.",
      beneficios: "Las Esponjas Cosméticas de Mary Kay® son ideales para aplicar la Base de Maquillaje en Crema con acabado en Polvo o para difuminar el Corrector Perfecting Concealer, Iluminador para Ojos o las Bases Líquidas Mary Kay®. La textura microfina ayuda a proporcionar la máxima flexibilidad para una aplicación pareja y uniforme. Además de reducir desperdicios de maquillaje permite aplicarlo en zonas difíciles como la parte inferior de los ojos y el contorno de la nariz.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/rostro/rubores/producto8.jpg"
    }
    ,
    {
      id: 32,
      uso: "Cara",
      name: "Polvo para el Contorno de Rostro Mary Kay Chromafusion Latte",
      message:"Polvo%20para%20el%20Contorno%20de%20Rostro%20Mary%20Kay%20Chromafusion%20Latte",
      type: "rubor",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Contornea de forma sencilla con un tono mate que se mezcla con la piel para dar profundidad.",
      aplicacion: "Recomendamos aplicar el Polvo para el Contorno del Rostro Mary Kay Chromafusion™ con la Brocha para Rubor de Mary Kay. Aplicá el Polvo desde el centro del pómulo hacia la sien con el lado plano de la brocha. Utilizá la parte inferior para aportar profundidad (Contorno) y el lado superior para obtener más precisión a la hora de utilizar el Iluminador.",
      beneficios: "Con la tecnología Chromafusion™ Matrix los polvos Chromafusion se ven radiantes desde cualquier luz, ofreciendo unos tonos puros impregnados de pigmentos para un acabado naturalmente radiante. El Polvo para el Contorno del Rostro Mary Kay Chromafusion™ se mezcla con la piel para dar profundidad. Fórmula de larga duración sin importar cual sea el día de trabajo, el ejercicio realizado o el clima.Tono que combina con cualquier tono de piel.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/rostro/rubores/producto6.jpg"
    }
    ,
    {
      id: 33,
      uso: "Cara",
      name: "Iluminador para el Rostro Mary KAy Chromafusion Glazed",
      message:"Iluminador%20para%20el%20Rostro%20Mary%20KAy%20Chromafusion%20Glazed",
      type: "rubor",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Aporta luz al rostro con este polvo iluminador, un tono que dará un impulso de luminosidad a tu rostro.",
      aplicacion: "Recomendamos aplicar el Polvo Iluminador Mary Kay Chromafusion™ con la Brocha para Rubor de Mary Kay.Aplica el Polvo desde el centro del pómulo hacia la sien con el lado plano de la brocha. Utiliza la parte inferior para aportar profundidad (Contorno) y el lado superior para obtener más precisión a la hora de utilizar el Iluminador.",
      beneficios: "Aplica en los pómulos para dar una apariencia sutil y levantada a las mejillas donde la luz se refleja normalmente en la cara. Este Polvo Iluminador se ve radiante desde cualquier luz, ofreciendo un tono puro impregnado de pigmento para un acabado naturalmente radiante. El Iluminador Mary Kay Chromafusion™ da luminosidad al rostro.Con la tecnología Chromafusion™ Matrix de Mary Kay. Fórmula de larga duración sin importar cual sea el día de trabajo, el ejercicio realizado o el clima.Tono que combina con cualquier color de piel.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/rostro/rubores/producto7.jpg"
    }
    ,
    {
      id: 34,
      uso: "Ojos",
      name: "Sombras Compactas para Párpados Mary Kay Chromafusion",
      message:"Sombras%20Compactas%20para%20Párpados%20Mary%20Kay%20Chromafusion",
      type: "Sombra",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Esta sombra de ojos rica en pigmentos y de color duradero, viene en un espectro de tonos sensacionales y se mantiene resistente durante 12 horas. Nueva línea de pigmentos con acabado mate o brilloso creados por los mejores maquilladores y evaluados en una amplia gama de tonos de piel",
      aplicacion: "-1 BASE: Aplicá una sombra neutral en todo el párpado móvil, para que actúe como un lienzo perfecto para el resto de tu look. -2. PLIEGUE DEL OJO: Utilizá un tono un poco más oscuro para añadir dimensión y contraste al pliegue del ojo. -3 RESALTÁ: Usá un tono oscuro para delinear por sobre la línea de las pestañas, tanto superiores como inferiores, o aplicado para crear un efecto más dramático en la esquina exterior del ojo. -4 ILUMINÁ: Aplicá el tono más claro sobre el hueso debajo de la ceja y el lagrimal, para iluminar tu mirada",
      beneficios: "Colores intensos, verdaderos y de alto impacto.Se desliza de manera uniforme y fácil.Se mantiene resistente durante 12 horas. Mary Kay Chromafusion™ Matrix Technology. La tecnología Chromafusion es una innovación que permite intensidad en el color y una fórmula resistente. Todo ello envolviendo los pigmentos premium en una capa de crema de seda para amplificar el color. Para su realización se han evaluado cientos de muestras y cada tono se ha refinado con precisión siguiendo altos estándares de calidad. Además, cada tono se ha evaluado en diferentes tonos de piel. Gracias a la colaboración de un grupo de maquilladores profesionales, se ha creado una línea de tonos mate y brillo, que permitirá crear infinidad de looks.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/ojos/sombras/producto14.jpg"
    }
    ,
    {
      id: 35,
      uso: "Cara",
      name: "Trio de Sombras Mary Kay at Play®",
      message:"Trio%20de%20Sombras%20Mary%20Kay%20at%20Play",
      type: "Sombra",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La línea del Cuidado de la Piel Botanical Effects® es el primer paso para conseguir una piel radiante y nutrida. - Ingredientes que proporcionan beneficios esenciales. Extractos de Pitaya se unen al Aloe Vera, famosa desde hace siglos, aportando antioxidantes a cada uno de los productos. - Un cuidado de la piel simple y fácil de utilizar, que no frenará tu estilo de vida. - Resultados increíbles. ",
      aplicacion: "",
      beneficios: "La combinación de colores ofrece un sinfín de posibilidades para formar looks. Su ligera fórmula proporciona colores vibrantes que duran. El color se aplica uniformemente sin dejar espacios más claros. Su fórmula se desliza sin esfuerzo ofreciendo un increíble color. Disponible en 3 vibrantes combinaciones de color: oh honey, morning toffee y no fairyteal.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/ojos/sombras/producto13.jpg"
    }
    ,
    {
      id: 36,
      uso: "Ojos",
      name: "Corrector Iluminador para Ojos Mary Kay®",
      message:"Corrector%20Iluminador%20para%20Ojos%20Mary%20Kay",
      type: "Corrector",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Ayuda a despertar los ojos de aspecto cansado! Su tono durazno es el preferido de los maquilladores para contrarrestar los tonos azulados y morados debajo de los ojos. El corrector iluminador añade el toque de color ideal a los tonos de piel ivory y beige para neutralizar las ojeras e iluminar el área debajo de los ojos ayudando a lucir un aspecto despierto y revitalizado. ",
      aplicacion: "Primero, aplicar Corrector Iluminador para Ojos Mary Kay® y a continuación, aplicar Corrector Perfecting Concealer. El Corrector Iluminador para Ojos Mary Kay® es ideal para tonos de piel de Light Ivory a Deep Beige.",
      beneficios: "Neutraliza los círculos oscuros e ilumina el área debajo de los ojos ayudando a lucir un aspecto despierto y revitalizado. Su tono durazno está especialmente formulado para contrarrestar los tonos azulados y morados debajo de los ojos. Añade el toque justo a los tonos de piel ivory y beige. Combina con el Corrector Perfecting Concealer para una cobertura natural e impecable. Adecuado para piel sensible, incluyendo la piel delicada del contorno de ojos",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/rostro/correctores/producto3.jpg"
    }
    ,
    {
      id: 37,
      uso: "Ojos",
      name: "Delineador Líquido en Plumón para Ojos Mary Kay®",
      message:"Delineador%20Líquido%20en%20Plumón%20para%20Ojos%20Mary%20Kay",
      type: "Delineador",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Conviértete en una especialista para tus delineados con el Delineador Líquido en Plumón para Ojos Mary Kay®, es fácil de aplicar con punta de alta precisión que se desliza fácilmente brindando un color intenso de alta definición y secado rápido. • Fácil de aplicar, fácil de usar, ¡delineado perfecto! • Con punta de alta precisión que se desliza fácilmente. • Color intenso de alta definición y secado rápido. • Fórmula de larga duración que no se corre. • Ideal para cualquier tipo de delineado.",
      aplicacion: "",
      beneficios: "",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/ojos/lapices/producto8.jpg"
    }
    ,
    {
      id: 38,
      uso: "Ojos",
      name: "Lápiz Delineador para Ojos Mary Kay®",
      message:"Lápiz%20Delineador%20para%20Ojos%20Mary%20Kay",
      type: "Delineador",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Brinda a los ojos un color intenso, gracias a su fórmula cremosa y de larga duración. En su tapa incluye un pequeño sacapuntas que permite crear líneas definidas.",
      aplicacion: "Gira el delineador para sacarle punta.Trazá suavemente línea fina en la base del párpado superior, pegada a la línea de las pestañas, desde la esquina interna a la externaDibujá otra línea justo bajo las pestañas inferiores, desde la esquina interna hacia la externa. Si lo deseás, podés suavizar con un aplicador de sombra (esponja) o hisopo.",
      beneficios: "",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/ojos/lapices/generica.jpg"
    }
    ,
    {
      id: 39,
      uso: "Ojos",
      name: "Lápiz Delineador para Ojos en Gel",
      message:"Lápiz%20Delineador%20para%20Ojos%20en%20Gel",
      type: "Delineador",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La precisión de un lápiz delineador se une con la intensidad de un delineador líquido en una suave fórmula de gel, con aplicador incluido.",
      aplicacion: "El Delineador de Ojos en Gel es perfecto para un delineado de ojos nítido, la codiciada imagen de ojos con *alita* que podés perfeccionar en tres simples pasos. -1 Mojá el pincel en el delineador y eliminá el exceso de producto con papel tisú antes de comenzar. Cerrá el ojo y estiralo suavemente. Trazá puntos pequeños junto a la línea de las pestañas superiores y conectalos para formar una línea continua, asegurándote de que la piel no se muestre entre la línea y las pestañas. -2 Creá la “alita” trazando una línea fina a lo largo de las pestañas inferiores. Conectá esta línea a la línea de las pestañas superiores, creando un triangulito. -3 Rellená el triángulo y seguí trazando sobre la línea suavemente, comenzando con una línea delgada y terminá en una línea más gruesa para crear ese punto fino. Más tips estupendos: Aplicá la Sombra PRIMERO y luego aplicá el delineador en gel. Si no deseás lucir con demasiado maquillaje, mantené el resto de tu look natural. Para desarrollar confianza en tu aplicación, aplicá en la mitad de la línea de tus pestañas y luego en la otra mitad, en lugar de trazar una línea contínua.",
      beneficios: "Fácil de manejar y de aplicar, este versátil delineador de ojos te permite trazar líneas finas para un look de día o bien, intensificar para un look más dramático. Su aplicador te permite obtener la aplicación precisa que necesitas para crear cualquier look. Su fórmula ligera se desliza suavemente sin tener que frotar. Color intenso y secado ultrarrápido. De larga duración. Probado por oftalmólogos y dermatólogos. Resistente al agua. Adecuado para usuarias de lentes de contacto y apropiado para ojos sensibles.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/ojos/lapices/producto7.jpg"
    }
    ,
    {
      id: 40,
      uso: "Ojos",
      name: "Máscara para Pestañas Lash Intensity Mary Kay",
      message:"Máscara%20para%20Pestañas%20Lash%20Intensity%20Mary%20Kay",
      type: "Delineador",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "MAGNIFICA, MAXIMIZA Y MULTIPLICA TUS PESTAÑAS. • Amplificá y alargá tus pestañas de manera irresistible, con la Máscara que definirá la forma de lucir tus pestañas. • Experimentá 84%20 PESTAÑAS MÁS LARGAS y 200%20 MÁS VOLUMEN. • Cepillo con doble impacto para una mejor aplicación. • Con vitaminas y emolientes que ayudan a reforzar y evitar el quiebre de las pestañas.",
      aplicacion: "Colocá el cepillo en la raíz de las pestañas y usa un movimiento de lado a lado mientras lo deslizas a lo largo de las pestañas. A continuación, da la vuelta al cepillo 180 grados y deslízalo de la raíz a la punta para que las dos zonas del cepillo peinen las pestañas.",
      beneficios: "La Máscara Lash Intensity® te dará el volumen, y el largo irresistible que, magnificará, maximizará y multiplicará la forma de verse de tus pestañas. Su pigmento rico en minerales, ofrece el tono perfecto para que tus pestañas luzcan siempre destacadas.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/ojos/mascaras/producto4.jpg"
    }
    ,
    {
      id: 41,
      uso: "Ojos",
      name: "Máscara para Pestañas Lash Love a prueba de agua",
      message:"Máscara%20para%20Pestañas%20Lash%20Love%20a%20prueba%20de%20agua",
      type: "Delineador",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Define, defiende y brinda un volumen significativo a las pestañas sin lucir exageradas. Con la Máscara para Pestañas Lash Love® a Prueba de Agua Mary Kay®, tus pestañas lucirán con más volumen al instante, sin grumos y con una apariencia natural. Además su fórmula es a prueba de agua y lágrimas.",
      aplicacion: "Sacar el cepillo aplicador del tubo, sin girar o presionar. Peinar suavemente las pestañas de un lado a otro, comenzando por la base de las mismas. Luego, aplicar en las pestañas inferiores de la misma forma. Para dar una apariencia de mayor volumen y pestañas multiplicadas, aplicar una o dos capas adicionales, dejando secar unos segundos entre cada aplicación. Importante: No bombear el tubo para evitar el ingreso de aire y que la Máscara se seque antes de tiempo.",
      beneficios: "En un estudio independiente con consumidoras que usaron la Mascara para Pestañas Lash Love® a Prueba de Agua durante siete días, se obtuvieron los siguientes resultados: 90%20 mencionó que las pestañas lucían definidas y se sentían naturales, no pesadas, 90%20 mencionó que duró todo el día, sin formar grumos ni manchas, 89%20 dijo que las pestañas lucían más levantadas, 85%20 mencionó que sus pestañas lucían separadas y multiplicadas. Además también mencionaron que sus pestañas se mantuvieron en buen estado a pesar del sudor, la lluvia, las lágrimas, la humedad y el agua de la pileta y del mar.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/ojos/mascaras/producto1.jpg"
    }
    ,
    {
      id: 42,
      uso: "Ojos",
      name: "Máscara para Pestañas Lash Love Mary Kay",
      message:"Máscara%20para%20Pestañas%20Lash%20Love%20Mary%20Kay",
      type: "Delineador",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Define, defiende y brinda un volumen significativo a las pestañas sin lucir exageradas. Con la Máscara para Pestañas Lash Love® a Prueba de Agua Mary Kay®, tus pestañas lucirán con más volumen al instante, sin grumos y con una apariencia natural. Además su fórmula es a prueba de agua y lágrimas.",
      aplicacion: "Sacar el cepillo aplicador del tubo, sin girar o presionar. Peinar suavemente las pestañas de un lado a otro, comenzando por la base de las mismas. Luego, aplicar en las pestañas inferiores de la misma forma. Para dar una apariencia de mayor volumen y pestañas multiplicadas, aplicar una o dos capas adicionales, dejando secar unos segundos entre cada aplicación. Importante: No bombear el tubo para evitar el ingreso de aire y que la Máscara se seque antes de tiempo.",
      beneficios: "Pestañas de apariencia más voluminosa y arqueadas. Brinda un look perfectamente natural, suave y saludable a las pestañas.En un estudio independiente de consumidoras*, las mujeres que usaron el rímel Mary Kay® Lash Love™ por siete días, ¡quedaron fascinadas! De hecho, la mayoría de las mujeres dijeron que ¡duró por 10 horas o más! Y de 3 a 4 mujeres dijeron que no vieron ¡nada de grumos! Las pruebas también mostraron que la fórmula no se corrió aun con la humedad lagrimal ni después de hacer ejercicio. A continuación los comentarios adicionales que hicieron: 90%20 dijo que duró todo el día sin desprender polvillo sobre las mejillas ni emborronarse. 90%20 dijo que sus pestañas lucían definidas y se sentían naturales y no pesadas. 89%20 dijo que sus pestañas lucían levantadas. 85%20 dijo que las pestañas lucían separadas y multiplicadas*Estudio conducido por una compañía de investigaciones independiente",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/ojos/mascaras/producto2.jpg"
    }
    ,
    {
      id: 43,
      uso: "Ojos",
      name: "Máscara para Pestañas de máximo desempeño Mary Kay",
      message:"Máscara%20para%20Pestañas%20de%20máximo%20desempeño%20Mary%20Kay",
      type: "Delineador",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Esta exclusiva fórmula para pestañas gruesas y volumen máximo crea una imagen de pestañas largas, audaces y separadas que dura todo el día.",
      aplicacion: "Consejo: La punta del Lápiz Delineador para cejas Mary Kay® es fina y frágil. Para evitar que se quiebre, no gires la punta del todo. Girá para sacar la punta solo lo suficiente para delinear, definir y rellenar las cejas con trazos ligeros.",
      beneficios: "Exclusiva fórmula de larga duración que aumenta visiblemente hasta 5 veces el volumen de las pestañas. Una sola capa crea pestañas más grandes, espesas y largas con volumen extremo y color intenso que dura todo el día. Su cepillo define las pestañas dando volumen sin verse exagerado. Resistente a correrse, desprenderse y no deja grumos.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/ojos/mascaras/producto3.jpg"
    }
    ,
    {
      id: 44,
      uso: "Ojos",
      name: "Lápiz Delineador para Cejas",
      message:"Lápiz%20Delineador%20para%20Cejas",
      type: "Delineador",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "El Lápiz Delineador para Cejas Mary Kay® presenta una micropunta retractable para delinear, definir y rellenar las cejas con precisión y añadir pigmento a la perfección.",
      aplicacion: "Consejo: La punta del Lápiz Delineador para cejas Mary Kay® es fina y frágil. Para evitar que se quiebre, no gires la punta del todo. Girá para sacar la punta solo lo suficiente para delinear, definir y rellenar las cejas con trazos ligeros.",
      beneficios: "Diseño profesional de cejas con sensación ligera. Delinea las cejas de una manera sutil y audaz. Logra unas cejas perfectamente formadas y sombreadas. Permite crear líneas suaves, logrando una perfecta definición con apariencia natural. Larga duración. Las cejas lucirán perfectamente definidas todo el día. Su punta fina permite mantener el control y precisión realizando trazos suaves. Su fina punta retráctil no necesita afilarse para alinear, definir y rellenar las cejas.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/ojos/lapices/producto10.jpg"
    }
    ,
    {
      id: 45,
      uso: "Ojos",
      name: "Gel Voluminizador para Cejas Mary Kay",
      message:"Gel%20Voluminizador%20para%20Cejas%20Mary%20Kay",
      type: "Delineador",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "El Gel Voluminizador para Cejas Mary Kay® es la solución perfecta para dar forma o rellenar tus cejas. Sus cerdas ayudan a fijar las cejas para que no se muevan, sin importar las actividades de tu día o el clima.",
      aplicacion: "Seleccioná el tono que mejor complemente tu color de cabello. Limpiá el exceso de fórmula de la punta del pincel. Luego, comenzando en la parte más gruesa de la ceja, aplicá con movimientos cortos y ascendentes siguiendo la dirección del crecimiento del cabello hasta lograr el aspecto deseado. Usá la punta cónica para regresar y completar cualquier área que pueda haberse perdido.",
      beneficios: "Añade volumen a las cejas. Es la solución perfecta para dar forma o rellenar las cejas. Sus cerdas ayudan a fijar las cejas para que no se muevan, sin importar las actividades del día o el clima. Logra unas cejas perfectas y de apariencia natural con una aplicación muy fácil y rápida. Cuenta con un color de larga duración y fibras microscópicas que se adhieren a los vellos de las cejas.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/ojos/lapices/producto11.jpg"
    }
    ,
    {
      id: 46,
      uso: "Ojos",
      name: "Sombras Líquidas para Ojos",
      message:"Sombras%20Líquidas%20para%20Ojos",
      type: "Sombra",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Iluminá tus Párpados. Dejate atrapar por una oleada de color con un aplicador fácil de usar, para obtener un ojo único",
      aplicacion: "",
      beneficios: "Consistencia liviana, el color se aplica a la perfección. Los tonos con sus pigmentos, agregan intensidad al instante.Fórmula consistente y cremosa. Su aplicador es muy fácil de utilizar y ayuda a dar un look único.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/ojos/sombras/producto16.jpg"
    }
    ,
    {
      id: 47,
      uso: "Ojos",
      name: "Lápiz Delineador para Ojos Mary Kay At Play",
      message:"Lápiz%20Delineador%20para%20Ojos%20Mary%20Kay%20At%20Play",
      type: "Delineador",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Divertite creando tu estilo de delineado, utilizalo para crear una línea precisa o un efecto ahumado y suave. Protagonizá tu mirada luciendo sus tonos mate y metálicos.",
      aplicacion: "",
      beneficios: "",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/ojos/mascaras/producto3.jpg"
    }
    ,
    {
      id: 48,
      uso: "Labios",
      name: "Labial Líquido Mate Mary Kay at Play®",
      message:"Labial%20Líquido%20Mate%20Mary%20Kay%20at%20Play",
      type: "Labial",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "",
      aplicacion: "Comenzá desde el centro del labio superior, deslizando el producto hacia la esquina derecha y repetí la misma acción hacia la esquina izquierda. Después aplicá en el labio inferior de esquina a esquina. Dejá secar para dejar ver su acabado mate.",
      beneficios: "Se aplica como un gloss y al secar deja un acabado mate en tus labios. Se desliza fácilmente y sin esfuerzo. Color que proporciona una cobertura completa y de larga duración. Cuenta con 6 increíbles tonos ideales para utilizarlos en cualquier ocasión.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/labios/labiales/producto17.jpg"
    }
    ,
    {
      id: 49,
      uso: "Labios",
      name: "Lápiz Labial Semi Shine",
      message:"Lápiz%20Labial%20Semi%20Shine",
      type: "Labial",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Puro color que perdura. Confort en gel para labios suntuosos. Un lápiz labial duradero que tus labios amarán.",
      aplicacion: "Para aplicar el Lápiz Labial Semi Shine en gel usando un pincel para labios, unta el labial al pincel y aplícalo a los labios comenzando desde el centro del labio y hacia las comisuras de la boca. Repetí la aplicación para obtener la cobertura deseada.Crea un estupendo look de labios usando como base tu delineador labial Mary Kay®. Si vas a usar un tono de lápiz labial claro, comienza con un delineador labial en tono neutro que se asemeja al tono natural de tus labios. Luego, aplica el Lápiz Labial Semi Shine en gel.",
      beneficios: "El Lápiz Labial en Gel brinda un acabado que perdura sin resecar los labios. Tonos de alta pigmentación que proporcionan color fiel. La fórmula con gel acolchona los labios para brindar una sensación de confort suave. Los potenciadores ópticos brindan un efecto de enfoque suave. Los Labiales Semi Shine brindan un color radiante con brillo luminoso. Sus potenciadores ópticos dispersan la luz y difuminan la apariencia de pequeñas imperfecciones.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/labios/labiales/producto20.jpg"
    }
    ,
    {
      id: 50,
      uso: "Labios",
      name: "Lapiz Labial Semi Mate",
      message:"Lapiz%20Labial%20Semi%20Mate",
      type: "Labial",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Puro color que perdura. Confort en gel para labios suntuosos. Un lápiz labial duradero que tus labios amarán.",
      aplicacion: "Para aplicar el Lápiz Labial Semi Mate en gel usando un pincel para labios, unta el labial al pincel y aplícalo a los labios comenzando desde el centro del labio y hacia las comisuras de la boca. Repetí la aplicación para obtener la cobertura deseada. Crea un estupendo look de labios usando como base tu delineador labial Mary Kay®. Si vas a usar un tono de lápiz labial claro, comienza con un delineador labial en tono neutro que se asemeja al tono natural de tus labios. Luego, aplica el Lápiz Labial Semi Mate en gel.",
      beneficios: "El Lápiz Labial en Gel brinda un acabado que perdura sin resecar los labios. Tonos de alta pigmentación que proporcionan color fiel. La fórmula con gel acolchona los labios para brindar una sensación de confort suave. Los potenciadores ópticos brindan un efecto de enfoque suave. Los Labiales Semi Mate brindan un color radiante con brillo luminoso. Sus potenciadores ópticos dispersan la luz y difuminan la apariencia de pequeñas imperfecciones.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/labios/labiales/producto19.jpg"
    }
    ,
    {
      id: 51,
      uso: "Labios",
      name: "Brillo para Labios NouriShine Plus",
      message:"Brillo%20para%20Labios%20NouriShine%20Plus",
      type: "Labial",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Con el Brillo Labial NouriShine Plus Mary Kay® obtenés el brillo que deseás, y además obtendrás humectación al instante, lo que hace que tus labios se sientan suaves. También dará a tus labios acondicionamiento y suavidad de forma inmediata.",
      aplicacion: "El Brillo Labial es una de las formas más versátiles de maquillaje de labios. Se puede usarlo sólo o en combinación con un Lápiz Labial. El Brillo Labial Mary Kay® NouriShine Plus™ con su acabado de súper brillo ayuda a los labios a lucir más firmes, gruesos y jóvenes.",
      beneficios: "Transforma unos labios sencillos en unos labios gruesos, con mucha humectación y súper brillo. En un estudio independiente de una semana con consumidoras, 9 de 10 mujeres afirmaron que brinda un estímulo de humectación al instante, y además: 90%20 dijo que sentía que nutre la piel y tersa perfectamente los labios. 89%20 que los labios se sienten más sanos. 83%20 dijo que mejora la textura de la piel de los labios y ayuda a que luzcan más jóvenes. 80%20 dijo que brinda un brillo duradero.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/labios/brillos/generica.jpg"
    }
    ,
    {
      id: 52,
      uso: "Labios",
      name: "Lápiz Delineador para Labios Mary Kay®",
      message:"Lápiz%20Delineador%20para%20Labios%20Mary%20Kay",
      type: "Labial",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "El Lápiz Delineador para Labios es absolutamente imprescindible para la mujer que desea unos labios más definidos y elegantes o para quienes se preocupan por lucir un Lápiz Labial que no se corra o se agriete. El área de los labios es delicada y propensa a una excesiva pérdida de humedad. A medida que los labios envejecen, se vuelven más delgados y las arrugas y líneas finas se hacen más visibles sobre los labios y en su contorno. Los Lápices Delineadores para labios Mary Kay® están a la vanguardia de la moda y brindan mucho más que una definición de maquillaje natural: proporcionan beneficios adicionales para el cuidado de la piel, con ingredientes que combaten el envejecimiento y que ayudan a que los labios luzcan tersos mientras los protegen y crean un look sumamente elegante. Los tonos neutros son similares a las tonalidades naturales de los labios, de manera que los delineadores se difuminen y coordinen con los Lápices Cremosos Mary Kay® y con los Brillos para Labios NouriShine Plus®.  ",
      aplicacion: "Para una aplicación correcta, elegí un tono parecido al color de tus labios o un delineador de tono translúcido. Para lograr un look intenso y elegante, usá un tono un poco más oscuro que el color de tus labios. Para prolongar la duración de tu Lápiz Labial, empezá trazando la línea de tus labios antes de rellenarlos completamente con tu Delineador para Labios. Luego aplicá tu Lápiz o Brillo labial. Para ampliar tus labios visiblemente, probá un tono más claro en el labio superior y aplicalo ligeramente fuera de la línea natural de tus labios. Usá un tono ligeramente más oscuro abajo del centro de la parte más gruesa de tu labio inferior. Para reducir tus labios visiblemente, prueba un tono ligeramente más oscuro que el color de tus labios. Aplica justo adentro de la línea natural de tus labios. Hasta puedes combinarlo con un tono más oscuro en las comisuras exteriores de tus labios.",
      beneficios: "Esta fórmula ultra cremosa que se desliza con tersura contiene ingredientes que protegen los labios y combaten el envejecimiento. Incluye un sacapuntas integrado que te brinda la opción de elegir qué tan atrevido o qué tan definido deseas que sea tu delineador. Ayuda a evitar que el Lápiz Labial se corra o se agriete. Evita que el Lápiz Labial se corra o se agrite. Nutre y ayuda a proteger los labios. Contiene ingredientes que combaten el envejecimiento",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/labios/delineadores/generica.jpg"
    }
    ,
    {
      id: 53,
      uso: "Labios",
      name: "Lápiz Labial Mate Efecto Polvo At Play",
      message:"Lápiz%20Labial%20Mate%20Efecto%20Polvo%20At%20Play",
      type: "Labial",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Coloreá tu mundo con los Lápices Labiales Mate Efecto Polvo At Play™. Estos te brindarán el acabado mate perfecto para lucir unos labios deslumbrantes. Lápices Labiales de ultra pigmentación y cobertura completa",
      aplicacion: "Para obtener unos labios únicos e irresistibles, aplicá el Lápiz Labial Mate Efecto Polvo At Play™ en tu tono favorito.Aplicá primero en el centro del labio hacia las orillas siguiendo la línea natural de los labios.Al ser retráctiles, no se necesita sacapuntas para obtener más producto.",
      beneficios: "Lápices Labiales de ultra pigmentación y cobertura completa.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/labios/labiales/producto21.jpg"
    }
    ,
    {
      id: 54,
      uso: "Labios",
      name: "Brillo Labial Mary Kay Unlimited™ - Edición Limitada",
      message:"Brillo%20Labial%20Mary%20Kay%20Unlimited%20-%20Edición%20Limitada",
      type: "Labial",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Elevá tu experiencia del brillo labial con la tecnología sin patente pendiente que brinda una capa de brillo que no es pegajoso. Esta nueva generación de brillo labial se desliza para una aplicación tersa y proporciona hidratación al instante. Elegí entre 8 tonos que lucen espectaculares en cualquier tono de piel, son ideales para cualquier ocasión y perfectos para lo que a tus labios les espera. ¡Llegó el momento de lucir un brillo labial de alto impacto!",
      aplicacion: "",
      beneficios: "Tonos modernos y de tendencia. Tres acabados (cremoso, perlado y luminoso) para unos labios de lujo de día y de noche. Formulado con vitaminas C y E. Dermatológicamente probado. Probado para irritación de la piel y alergias.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/labios/brillos/producto7.jpg"
    }
    ,
    {
      id: 55,
      uso: "Cara",
      name: "Corrector Perfecting Concealer",
      message:"Corrector%20Perfecting%20Concealer",
      type: "Corrector",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Este Corrector mejora el aspecto de decoloración de la piel, para que puedas lograr el rostro impecable que deseas. Ayuda a disimular la apariencia enrojecida y la piel luce más uniforme. Contiene antioxidantes para ayudar a proteger contra los radicales libres que dañan la piel. Además, podés aumentar la cobertura al aplicarlo en capas, se puede difuminar y tiene un acabado de secado rápido que fascinará a todas las mujeres. Con el Corrector Perfecting Concealer tenés la cobertura perfecta para que todos los días puedas lucir tu belleza al máximo.",
      aplicacion: "El Corrector Perfecting Concealer está diseñado para usarse solo o sobre tu Base favorita Mary Kay® ya sea en Crema Líquida o la Crema Correctora con Color y FPS 15. (Si usás la Base en Polvo Mineral Mary Kay®, aplicá el Corrector antes de tu base).Con el aplicador, colocá de uno a tres puntos de Corrector (dependiendo de la necesidad) para ocultar puntos negros, espinillas y pequeñas imperfecciones.Difuminá el producto en el área con ligeros toques con el dedo anular. Dejá que se seque.Difuminá los bordes, conforme sea necesario, para una cobertura natural e impecable.",
      beneficios: "Un paso esencial para lograr un rostro de apariencia natural y uniforme. Disimula puntos negros, manchas de la edad y pequeñas imperfecciones de la piel. Neutraliza las ojeras debajo de los ojos. La tecnología difusora de luz ayuda a difuminar la apariencia de líneas finas y a corregir ópticamente las pequeñas imperfecciones. Ayuda a disimular el enrojecimiento de la piel con cobertura cremosa de larga duración.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/rostro/correctores/producto4.jpg"
    }
    ,
    {
      id: 56,
      uso: "Cara",
      name: "Corrector Mary Kay",
      message:"Corrector%20Mary%20Kay",
      type: "Corrector",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La piel del rostro de una mujer no tiene que ser perfecta en realidad para lucir como si lo fuera. El primer paso para crear un acabado perfecto comienza disimulando las imperfecciones como ojeras, marcas o manchas.",
      aplicacion: "Aplicar antes de la Base de Maquillaje. Aplicá una ligera “capa” de Corrector sobre la imperfección y difuminá dando ligeros golpecitos con el dedo anular o con una esponja cosmética.",
      beneficios: "Empareja el tono de la piel y minimiza las ojeras y manchas en la piel. Fórmula ligera y cremosa. De larga duración. A prueba de agua. Su tapa plana permite que se abra y cierre fácilmente. Apto para todo tipo de piel y combina con una amplia gama de tonos de pielDisponible en color amarillo, para ayudar a reducir las manchas y ojeras más notorias.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/rostro/correctores/producto1.jpg"
    }
    ,
    {
      id: 57,
      uso: "Cara",
      name: "Crema Correctora con Color y FPS 15 Mary Kay®",
      message:"Crema%20Correctora%20con%20Color%20y%20FPS%2015%20Mary%20Kay",
      type: "Corrector",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "La Crema Correctora con Color y FPS 15 Mary Kay es una opción súper práctica. Es tan ligera, que tu rostro lucirá impecable y natural sin que parezca que te aplicaste maquillaje",
      aplicacion: "Para un look casual de día: Usá la yema de los dedos para aplicar CC Cream en tu rostro como si aplicaras tu base regular. Comenzá en el centro hacia la línea del cabello y a lo largo de la línea de la mandíbula. Para un look de oficina y para la noche: Para una cobertura completa, usá las yemas de los dedos para aplicar CC Cream como si aplicaras tu humectante. Esperá un minuto para que se absorba y luego aplicá tu base de maquillaje.",
      beneficios: "Ocho beneficios esenciales para la piel. Un rostro impecable en un solo paso. La Crema Correctora con Color y FPS 15 Mary Kay actúa como una base de maquillaje correctora de imperfecciones del cutis al instante y a la vez está formulada como producto del cuidado de la piel para ayudar a nutrirla y embellecerla para el futuro. Es tan ligera que lucirás natural e impecable sin que parezca que aplicaste maquillaje. Adecuada para todo tipo de piel, piel propensa al acné y piel sensible. 8 beneficios en 1 La Crema Correctora con Color y FPS 15 Mary Kay se conoce como crema “correctora del cutis” y brinda ocho beneficios en un solo paso dejando el cutis con acabado impecable.Protege: Formulada con factor de protección solar FPS 15 que protege del daño de los rayos solares UVA y UVB.Ilumina: Aumenta la luminosidad de la piel al instante e ilumina el rostro. El cutis se ve más radiante, ya que la fórmula ayuda a corregir la apariencia de las manchas de la piel y le da un tono más uniforme.Corrige: Pigmentos basados en minerales ayudan a corregir la apariencia de imperfecciones y mejoran la apariencia general de tu tez con cobertura ligera sin que parezca que aplicaste maquillaje. La apariencia de piel cansada y fatigada se transforma, ya que la fórmula ayuda a suavizar la opacidad de la piel. Deja la piel con un brillo saludable y se siente suave y tersa.Minimiza el enrojecimiento de la piel: Calma visiblemente la piel y reduce la apariencia de enrojecimiento. Está formulada con vitamina E y extractos botánicos que ayuda a calmar y a tersar la piel.Disimula: Disimula al instante la apariencia de barritos y ayuda a que las marcas de acné previas parezcan menos visibles. Esta fórmula ligera también disimula las ojeras y las sombras oscuras al difuminarse bellamente con tu tono de piel.Hidrata: Hidrata por 10 horas. Formulada con emolientes que ayudan a hidratar la piel, la piel se siente hidratada al instante. La CC Cream está formulada con extracto de corteza de sauce, un ingrediente que acondiciona la piel.Reduce las señales visibles de envejecimiento: Las líneas finas lucen menos visibles y la piel tiene una apariencia juvenil. La CC Cream también ayuda a reducir la apariencia de poros y la vez mejora visiblemente la textura de la piel. No se acumula en las líneas finas y poros, y deja el rostro sintiéndose suave y de apariencia impecable.Defiende: Este producto contiene antioxidantes para ayudar a defender de los radicales libres agresores de la piel.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/rostro/correctores/producto2.jpg"
    }
    ,
    {
      id: 58,
      uso: "Cara",
      name: "Maquillaje en Crema con Acabado en Polvo Mary Kay®",
      message:"Maquillaje%20en%20Crema%20con%20Acabado%20en%20Polvo%20Mary%20Kay",
      type: "Base",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "En un estudio clínico independiente* se demostró que esta fórmula que no reseca y de apariencia sedosa, se mantiene fiel por 12 horas. Además, en un estudio independiente con consumidoras†, ocho de 10 mujeres dijeron que su rostro lucía fresco todo el día. Podés ajustar tu cobertura aplicando una capa ligera o varias capas para esos días que necesitas crear mayor intensidad. *Resultados en base a un estudio clínico independiente donde 20 mujeres usaron la Base por un día. Los resultados reflejan el porcentaje de mujeres que estuvieron de acuerdo con las aseveraciones como parte de un estudio independiente con consumidoras en el cual 181 mujeres usaron el producto por una semana.",
      aplicacion: "",
      beneficios: "Es la clave para lograr un rostro impecable.Mantiene su tonalidad, y el rostro luce fresco por 12 horas.Es resistente al calor y a la humedad.Cobertura en capas que se desliza como crema ligera y se seca en un suave polvo con terminado mate.Su empaque posee sistema de imán y cabe perfectamente en el Compacto Mary Kay.Resistente a transferirse. No se desvanece ni deja marcas.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/rostro/bases/producto5.jpg"
    }
    ,
    {
      id: 59,
      uso: "Cara",
      name: "Base en Polvo Mineral Mary Kay®",
      message:"Base%20en%20Polvo%20Mineral%20Mary%20Kay",
      type: "Base",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Este polvo ligero que perfecciona la piel da la apariencia de que las líneas finas, arrugas y otras imperfecciones desaparecen. Ofrece la cobertura de una base con la comodidad de un polvo.",
      aplicacion: "La Base en Polvo Mineral Mary Kay® ofrece la cobertura de una base con la comodidad de un polvo sedoso. Sacudir suavemente el envase de la Base en Polvo Mineral Mary Kay® (con la tapa) para que el polvo salga.Quitar la tapa y suavemente colocar la brocha dentro del polvo. Quitar el exceso de Basessacudiendo ligeramente la brocha en la orilla del frasco. Quitar la tapa y suavemente colocar la brocha dentro del polvo. Luego, girar la brocha dentro de la tapa para que la Base en Polvo se introduzca entre las cerdas. Aplicar la Base primero en el centro del rostro y seguir hacia la línea del cabello y la mandíbula, difuminando perfectamente.",
      beneficios: "Es una base de maquillaje. Es un polvo. Esa es la belleza de la Base en Polvo Mineral Mary Kay®. Te permite emparejar el tono de la piel y lograr una apariencia impecable. Este polvo ligero que perfecciona la piel da la apariencia de que las líneas finas, arrugas y otras imperfecciones desaparecen. Ofrece la cobertura de una base con la comodidad de un polvo.La cobertura en capas se difumina sin esfuerzo con una pincelada y brinda un look impecable.Su fórmula de larga duración, resistente a transferirse, no se desvanecerá al mediodíaControla el brillo y ofrece un acabado mate",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/rostro/bases/producto4.jpg"
    }
    ,
    {
      id: 60,
      uso: "Cara",
      name: "Pre Base de Maquillaje con FPS 15 Mary Kay®",
      message:"Pre%20Base%20de%20Maquillaje%20con%20FPS%2015%20Mary%20Kay",
      type: "Base",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Este gel ligero se desliza fácilmente, rellena las imperfecciones y se seca rápidamente con un acabado mate para crear el lienzo perfecto para una aplicación de base de maquillaje impecable que intensifica sus beneficios y prolonga la duración del maquillaje.",
      aplicacion: "Aplicar en todo el rostro después del paso final de la rutina del Cuidado de la Piel y difuminar suavemente con las yemas de los dedos, preparando la piel para la aplicación de la Base de Maquillaje.",
      beneficios: "Las Pre Bases han sido durante años uno de los secretos de los maquilladores profesionales para crear una piel de apariencia impecable. La Pre Base de Maquillaje con FPS 15 Mary Kay® ayuda a mantener el verdadero tono de la Base de Maquillaje.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/rostro/bases/producto3.jpg"
    }
    ,
    {
      id: 61,
      uso: "Cara",
      name: "Base de Maquillaje Mate TimeWise 3D",
      message:"Base%20de%20Maquillaje%20Mate%20TimeWise%203D",
      type: "Base",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Formulada con el Complejo Age Minimize 3D®, la Base de Maquillaje TimeWise® 3D va más allá de una cobertura impecable, ¡Brinda belleza sin edad! Esta fórmula se siente ligera y deja la piel luciendo una apariencia impecable, juvenil y natural durante todo el día. - Tonos desarrollados con nuestra exclusiva Tecnología IntelliMatch™. - Incluye el Complejo Age Minimize 3D™ que contienen los productos del Set Milagroso TimeWise 3D. - Fórmula ligera y resistente, controla el brillo de tu piel por 12 horas. - Las microesferas especiales actúan como una esponja para eliminar la grasitud de la piel",
      aplicacion: "",
      beneficios: "La Base para Maquillaje TimeWise 3D suaviza la apariencia de líneas finas y arrugas, y además reduce la apariencia de imperfecciones, poros, ojeras y sombras mientras emparejan el aspecto del tono de la piel. ¿El resultado? La piel luce más saludable, firme y juvenil al instante. ¿Cómo encontrar tu tono? Para elegir tu tono debés: 1 - Encontrar el tono de tu piel en general: Ivory, Beige o Bronze. 2 - Seleccionar el subtono: C=Frío (Cool), N=Neutral o W=Cálido (Warm). ¿Cómo encontrar el subtono de tu piel? Identificá cómo reacciona tu piel al exponerla al sol: Tu subtono es frío si tu piel se quema o se torna rojiza rápidamente. Tu subtono es cálido si al asolearse tu piel se torna más oscura. Tu subtono es neutro si tu piel se enrojece y luego se torna oscura. 3 - La intensidad de la tonalidad dentro del tono de piel (el número más bajo es el más claro y se vuelve más oscuro a medida que aumenta el número).",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/rostro/bases/producto7.jpg"
    }
    ,
    {
      id: 62,
      uso: "Cara",
      name: "Base de Maquillaje Luminosa TimeWise 3D",
      message:"Base%20de%20Maquillaje%20Luminosa%20TimeWise%203D%20",
      type: "Base",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Formulada con el Complejo Age Minimize 3D®, la Base de Maquillaje TimeWise® 3D va más allá de una cobertura impecable, ¡Brinda belleza sin edad! Esta fórmula se siente ligera y deja la piel luciendo una apariencia impecable, juvenil y natural durante todo el día. - Tonos desarrollados con nuestra exclusiva Tecnología IntelliMatch™. - Incluye el Complejo Age Minimize 3D™ que contienen los productos del Set Milagroso TimeWise 3D. - Proporciona un acabado  luminoso  y de larga duració. - Ofrece 12 horas de hidratación y Jojoba para mayor humectación.",
      aplicacion: "",
      beneficios: "La Base para Maquillaje TimeWise 3D suaviza la apariencia de líneas finas y arrugas, y además reduce la apariencia de imperfecciones, poros, ojeras y sombras mientras emparejan el aspecto del tono de la piel. ¿El resultado? La piel luce más saludable, firme y juvenil al instante. ¿Cómo encontrar tu tono? Para elegir tu tono debés: 1 - Encontrar el tono de tu piel en general: Ivory, Beige o Bronze.2 - Seleccionar el subtono: C=Frío (Cool), N=Neutral o W=Cálido (Warm).¿Cómo encontrar el subtono de tu piel? Identificá cómo reacciona tu piel al exponerla al sol: Tu subtono es frío si tu piel se quema o se torna rojiza rápidamente.Tu subtono es cálido si al asolearse tu piel se torna más oscura. Tu subtono es neutro si tu piel se enrojece y luego se torna oscura. 3 - La intensidad de la tonalidad dentro del tono de piel (el número más bajo es el más claro y se vuelve más oscuro a medida que aumenta el número).",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/rostro/bases/producto8.jpg"
    }
    ,
    {
      id: 63,
      uso: "Cara",
      name: "Base Líquida Mate Mary Kay At Play",
      message:"Base%20Líquida%20Mate%20Mary%20Kay%20At%20Play",
      type: "Base",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Con diferentes tonalidades y apropiada para todos los tipos de piel, la base es liviana, posee secado rápido y ofrece un acabado mate perfecto.",
      aplicacion: "Elegí el color más indicado para tu tono de piel. El mejor lugar para probar el color es aplicando una cantidad pequeña en la mandíbula. Depositá la cantidad deseada del producto en la palma de tu mano. Esparcí suavemente con la punta del dedo, con pincel o esponja cosmética.",
      beneficios: "La base de Maquillaje Líquida Mate Mary Kay At Play® ayuda a controlar el exceso de brillo y oleosidad de la piel durante 08 horas. Se encuentra disponible en cuatro tonos: Light to Medium, Medium, Medium to Deep y Deep Tan.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/rostro/bases/producto6.jpg"
    }
    ,
    {
      id: 64,
      uso: "Cara",
      name: "Crayón para Contorno del Rostro Mary Kay At Play",
      message:"Crayón%20para%20Contorno%20del%20Rostro%20Mary%20Kay%20At%20Play",
      type: "Base",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Definí tus facciones. Agregá dimensión y profundidad a tu rostro.",
      aplicacion: "Aplicalo por debajo de tus pómulos, en los costados de tu nariz, por debajo de la línea del cuero cabelludo y en la línea de la mandíbula.",
      beneficios: "Su fórmula cremosa hace que sea muy fácil su aplicación y difuminación.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/rostro/correctores/producto6.jpg"
    }
    ,
    {
      id: 65,
      uso: "Cara",
      name: "Crayón Iluminador para el Rostro Mary Kay At Play",
      message:"Crayón%20Iluminador%20para%20el%20Rostro%20Mary%20Kay%20At%20Play",
      type: "Base",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Iluminá y dale brillo a tu rostro. Destacá tus facciones complementando el contorno.",
      aplicacion: "Aplicalo en las zonas altas de tu rostro como la parte superior de tus pómulos, el hueso de la nariz, en el arco de cupido y el mentón.",
      beneficios: "Su fórmula cremosa hace que sea muy fácil su aplicación y difuminación.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/rostro/correctores/producto7.jpg"
    }
    ,
    {
      id: 66,
      uso: "Cara",
      name: "Polvo Suelto Traslúcido Mary Kay®",
      message:"Polvo%20Suelto%20Traslúcido%20Mary%20Kay",
      type: "Base",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Brinda un acabado natural al sellar el maquillaje.Es el tono perfecto de toda mujer.",
      aplicacion: "Utilizá la Brocha para Polvo Mary Kay para aplicar y distribuir uniformemente el Polvo Traslúcido sobre tu rostro. Recordá eliminar el exceso de producto en la brocha. Aplicar desde la frente hasta la barbilla cubriendo todo el rostro.",
      beneficios: "Un polvo universal elimina la necesidad de combinar colores. Se siente liviano, natural y suave en la piel. Controla el brillo no deseado todo el día. Proporciona un acabado transparente e invisible en cualquier tono de piel. La fórmula completamente nueva contiene propiedades de dispersión de la luz diseñadas para ayudar a suavizar la apariencia de imperfecciones para un acabado que perfecciona la piel.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/color/rostro/bases/producto9.jpg"
    }
    ,
    {
      id: 67,
      uso: "Piel",
      name: "Crema Humectante Intensiva",
      message:"Crema%20Humectante%20Intensiva",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Da a la piel una apariencia inmediata más radiante, y una increíble sensación de tersura y suavidad.",
      aplicacion: "Aplícala después de tu humectante regular, según sea necesario.",
      beneficios: "Las cremas humectantes de la Línea del Cuidado de la Piel Mary Kay®, constituyen un paso esencial para brindar la hidratación necesaria a la piel. Algunas mujeres pueden necesitar hidratación adicional, por lo que Mary Kay ha creado productos específicos para brinda este beneficio. Da a la piel una apariencia inmediata más radiante, y una increíble sensación de tersura y suavidad. Hidrata la piel hasta por 10 horas.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/especiales/producto3.jpg"
    }
    ,
    {
      id: 68,
      uso: "Piel",
      name: "Crema de Noche Extraemoliente",
      message:"Crema%20de%20Noche%20Extraemoliente",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Los humectantes en la línea de productos del cuidado de la piel de Mary Kay son un paso esencial para proporcionar la humectación necesaria. Algunas mujeres podrían requerir hidratación adicional en diferentes épocas, y por eso Mary Kay tiene productos personalizados para mejorar la hidratación de la piel.",
      aplicacion: "Aplicar una pequeña cantidad en la piel limpia después del humectante regular de ser necesario, usar sólo por las noches.Para añadir hidratación, humedece la piel antes de aplicarlo.",
      beneficios: "Ayuda a mantener la humedad natural de la piel y restaura la hidratación en la piel muy seca.Excelente para áreas muy secas, especialmente en las manos, codos y pies. Esta crema forma una barrera protectora que reduce la evaporación la humedad y brinda una máxima hidratación en áreas secas como las manos, codos, rodillas y pies",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/especiales/producto4.jpg"
    }
    ,
    {
      id: 69,
      uso: "Piernas y pies",
      name: "Crema Energizante para Pies y Piernas Mary Kay®",
      message:"Crema%20Energizante%20para%20Pies%20y%20Piernas%20Mary%20Kay",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Ayuda a que las piernas y los pies cansados se sientan revitalizados. Refrescante fórmula con mentol. Perfecto para los días ocupados.",
      aplicacion: "Aplicar masajeando la Crema directamente sobre las piernas o sobre medias transparentes. Volvé a aplicar cuando las piernas necesiten un estímulo de energía.",
      beneficios: "La fórmula con mentol, y otros ingredientes claves, crean una sensación refrescante que ayuda a que pies y piernas se sientan revitalizadosHumecta los pies y las piernas cansadas e instantáneamente ayuda a que se sientan renovados.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/especiales/producto8.jpg"
    }
    ,
    {
      id: 70,
      uso: "Ojos",
      name: "Desmaquillador de Ojos libre de Aceite",
      message:"Demaquillador%20de%20Ojos%20libre%20de%20Aceite",
      type: "Desmaquillador",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Remueve gentilmente todo tipo de maquillaje para ojos, sin dejar la piel grasosa.",
      aplicacion: "Agitar hasta que se mezclen las fases.Aplicar en cantidades pequeñas en un algodón o una toallita y limpiar gentilmente todos los rastros de maquillaje. Agitar bien para máximos resultados.",
      beneficios: "La piel alrededor de los ojos tiene menos glándulas sebáceas y menos colágeno y elastina que el resto de la piel en el rostro. Y a medida que las personas envejecen, el depósito de grasa debajo de la dermis disminuye, causando que la piel parezca más delgada y dé la apariencia de oquedad debajo de los ojos. Estas características únicas de la piel alrededor de los ojos requieren atención extra. Gentilmente remueve todo tipo de maquillaje para ojos, incluido el que es a prueba de agua. No deja sensación de grasitud.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/especiales/producto2.jpg"
    }
    ,
    {
      id: 71,
      uso: "Cara",
      name: "Gel Facial Hidratante Libre de Aceite",
      message:"Gel%20Facial%20Hidratante%20Libre%20de%20Aceite",
      type: "Gel",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Este gel libre de aceites se absorbe inmediatamente, dejando la piel con una sensación de frescura mientras que la hidrata por 10 horas.",
      aplicacion: "Aplicá después de la humectante regular las veces que sea necesario: mañana, noche o ambas.",
      beneficios: "Los productos humectantes de la Línea del Cuidado de la Piel Mary Kay®, constituyen un paso esencial para brindar la hidratación necesaria a la piel. Algunas mujeres pueden necesitar hidratación adicional, por lo que Mary Kay ha creado productos específicos para brinda este beneficio. Gel no graso de rápida absorción, que deja una piel con sensación de frescura. Ideal para piel normal, combinada y grasa. Hidrata la piel hasta por 10 horas.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/especiales/producto5.jpg"
    }
    ,
    {
      id: 72,
      uso: "Manos",
      name: "Set Manos de Seda Satin Hands® Té Blanco y Cítricos",
      message:"Set%20Manos%20de%20Seda%20Satin%20Hands%20Té%20Blanco%20y%20Cítricos",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Un Set de 3 pasos que da a tus manos suavidad al instante. • Con NUEVA fórmula del exfoliante y de la crema de manos enriquecida con manteca de karité y con aroma de té blanco y cítricos. • Las manos se sienten suaves e hidratadas al instante. • La piel se ve renovada, rejuvenecida y visiblemente más sana.",
      aplicacion: "Paso 1: Protege y prepara. Crema Protectora Restauradora para Manos: es la crema protectora restauradora sin fragancia que ayuda a la barrera de la piel sellando humectación valiosa. Esta fórmula sin fragancia, que humecta y protege la piel, prepara las manos para una experiencia de spa estimulante. Aplicala con masaje en las manos antes de exfoliar con la Crema Exfoliante Refinadora para Manos con Karité.Paso 2: Refina y pule. Crema Exfoliante Refinadora para Manos con Karité: exfolia eficazmente con suavidad y pule las áreas opacas y secas de la piel. Las manos lucen al instante más saludables después de una aplicación y con el uso diario se verán rejuvenecidas y revitalizadas. Combinado con la fabulosa manteca de karité, este exfoliante revela al instante una piel de aspecto notablemente más terso a medida que exfolia las impurezas para dejar las manos sintiéndose más suaves. Como parte del Set Manos de Seda Satin Hands®, aplicá el exfoliante después de la Crema Protectora Restauradora con un suave masaje antes de enjuagarlas. Como es lo suficientemente suave para usarse todos los días, el exfoliante también puede usarse por sí solo para dejar las manos completamente limpias y purificadas mientras exfolia las impurezas. Paso 3: Nutre y reconforta. Consentí tus manos con la reconfortante sensación cremosa de la Crema para Manos con Karité. No solo envuelve la piel con hidratación instantánea, sino que también ha demostrado clínicamente que humecta la piel hasta por 24 horas. Sentí cómo la resequedad desaparece con la crema infundida con manteca de karité que se derrite en la piel y deja una sensación notablemente más suave y tersa. Las manos se sienten reconfortadas y humectadas aún después de lavarse.",
      beneficios: "Escapá a un oasis humectante donde las manos se sienten al instante humectadas, suaves y tersas. Este tratamiento como de spa revitaliza y rejuvenece el aspecto de las manos para que se sientan renovadas y más saludables al instante. Las manos quedan con una sensación sedosa, tersa y flexible a la vez que las áreas ásperas y resecas se despejan y la piel se siente reconfortada. Creado para brindar una dosis extra de placer, el Set Manos de Seda “Satin Hands”® Te Blanco y Cítricos te transporta a un retiro reconfortante en tres pasos sencillos. El set presenta un nuevo exfoliante y una crema de manos con el poder nutritivo de la manteca de karité y una fragancia de té blanco y cítricos, además de una crema protectora restauradora sin fragancia que ya conocés y te fascina. Por todo lo que hacen tus manos, ¡merecen la experiencia de placeres que brinda este Set! La distintiva fragancia de White Tea & Citrus me inspira a consentirme. Deja al resto del mundo atrás y deleita tus sentidos mientras consientes tus manos. La distintiva fragancia de té blanco y cítricos es altamente apreciada por los amantes del té por su variedad ligera y delicada. Además, esta fragancia personalizada también incluye una combinación de toronja rosada y citronela con notas de cardamomo, flor de cerezo y jazmín en flor.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/especiales/producto9.jpg"
    }
    ,
    {
      id: 73,
      uso: "Cara",
      name: "Mascarilla Facial de Limpieza Profunda con Carbón Clearproof®",
      message:"Mascarilla%20Facial%20de%20Limpieza%20Profunda%20con%20Carbón%20Clearproof",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Mascarilla con carbón de triple acción que funciona como un imán para limpiar profundamente los poros.",
      aplicacion: "Aunque no parezca lógico, ensuciarse un poco puede ayudar realmente a limpiar la piel en profundidad. Esa es la magia del carbón activado. Modo de empleo: Aplicá una capa uniforme de la mascarilla sobre la piel limpia. Experimentá la transformación de la mascarilla mientras se seca y absorbe las impurezas de la piel, la cual va de una textura cremosa a un suave acabado mate. Dejá la mascarilla en la piel de 10 a 20 minutos. Utilizala de 2 a 3 veces por semana. Utilizá una mascarilla en todo tu rostro, o aplícala solo en la zona T, en donde comúnmente la piel del rostro tiene más grasitud.",
      beneficios: "El carbón activo actúa como un imán para limpiar los poros. Fórmula clínicamente comprobada para remover el exceso de grasitud y reducir el brillo facial al instante. 79%20 de hombres y mujeres están de acuerdo*: *La piel luce más limpia* después de usarla. El extracto de romero y menta brindan un aroma fresco que despierta los sentidos. Disfrutá la sensación refrescante mientras aplicás la mascarilla en el rostro. *Basado en un estudio independiente de 21 días en el cual 166 hombres y mujeres con piel con tendencia al acné usaron el producto de dos a tres veces por semana.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/especiales/producto10.jpg"
    }
    ,
    {
      id: 74,
      uso: "Piel",
      name: "Crema Limpiadora Refrescante para el Cuerpo Satin Body®",
      message:"Crema%20Limpiadora%20Refrescante%20para%20el%20Cuerpo%20Satin%20Body",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "",
      aplicacion: "Utilizala al bañarte, y verás cómo tu piel vuelve a la vida, sintiéndose nutrida, humectada y refrescada.",
      beneficios: "La Crema Limpiadora Refrescante para el Cuerpo Satin Body® envuelve tu piel instantáneamente en una exquisita espuma dejándola suave y con una sensación de frescura. Esta crema limpiadora enriquecida con Manteca de Karité limpia suavemente la piel con una espuma reconfortante. Calma la piel reseca. Deja la piel sintiéndose humectada y fresca. Disfrutá la sensación de una piel suave y sumamente sedosa.Tus sentidos se deleitarán con el aroma del té blanco y cítricos.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/especiales/producto15.jpg"
    }
    ,
    {
      id: 75,
      uso: "Piel",
      name: "Loción Corporal Sedosa para el Cuerpo Satin Body®",
      message:"Loción%20Corporal%20Sedosa%20para%20el%20Cuerpo%20Satin%20Body",
      type: "Locion",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "",
      aplicacion: "Utilizala después de bañarte. Aplica libremente hasta que tu piel se sienta flexible.Para una piel más suave, combinala con nuestros otros productos enriquecidos con Manteca de Karité que forman parte de la Colección Satin Body®.",
      beneficios: "La Loción Corporal Sedosa para el Cuero Satin Body® brinda bienestar al instante y se absorbe en tu piel, dándole un alivio inmediato contra la resequedad. Formulada con exquisita manteca de Karité. Enriquecida con vitamina E. Esta loción de rápida absorción se siente lujosa y deleitante. Ha demostrado clínicamente que humecta por 24 horas. Tu piel se sentirá profundamente humectada, nutrida, sumamente tersa y se verá revitalizada. Tus sentidos se deleitarán con el aroma de té blanco y cítricos.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/especiales/producto16.jpg"
    }
    ,
    {
      id: 76,
      uso: "Piel",
      name: "Mascarilla Revitalizadora para el Cuerpo Satin Body®",
      message:"Mascarilla%20Revitalizadora%20para%20el%20Cuerpo%20Satin%20Body",
      type: "Mascarilla",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "El Lápiz Delineador para Labios es absolutamente imprescindible para la mujer que desea unos labios más definidos y elegantes o para quienes se preocupan por lucir un Lápiz Labial que no se corra o se agriete. El área de los labios es delicada y propensa a una excesiva pérdida de humedad. A medida que los labios envejecen, se vuelven más delgados y las arrugas y líneas finas se hacen más visibles sobre los labios y en su contorno. Los Lápices Delineadores para labios Mary Kay® están a la vanguardia de la moda y brindan mucho más que una definición de maquillaje natural: proporcionan beneficios adicionales para el cuidado de la piel, con ingredientes que combaten el envejecimiento y que ayudan a que los labios luzcan tersos mientras los protegen y crean un look sumamente elegante. Los tonos neutros son similares a las tonalidades naturales de los labios, de manera que los delineadores se difuminen y coordinen con los Lápices Cremosos Mary Kay® y con los Brillos para Labios NouriShine Plus®.  ",
      aplicacion: "Utilízala al bañarte. Aplica y exfolia suavemente. Después enjuaga para revelar una piel suave y tersa. Asimismo, combinala con nuestros otros productos para nutrir la piel, enriquecidos con Manteca de Karité, que forman parte de la Colección Satin Body®.",
      beneficios: "La Mascarilla revitalizadora para el Cuerpo Satin Body® exfolia la piel de inmediato y a la perfección dejándola tonificada y fresca. Formulada con enriquecedora Manteca de Karité y aceite de girasol para acondicionar la piel. Es lo suficientemente suave para usarla todos los días.Exfolia y elimina inmediatamente la piel reseca. Deja la piel sintiéndose humectada. Tus sentidos se deleitarán con el aroma de té blanco y cítricos.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/especiales/producto17.jpg"
    }
    ,
    {
      id: 77,
      uso: "Labios",
      name: "Mascarilla Exfoliante para Labios con Karité Satin Lips®",
      message:"Mascarilla%20Exfoliante%20para%20Labios%20con%20Karité%20Satin%20Lips",
      type: "Mascarilla",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "",
      aplicacion: "Aplicá la Mascarilla suavemente en los labios por un minuto, enjuaga o retira con una toalla húmeda y elimina toda la resequedad. Continuá con la Crema Humectante para Labios con Karité Satin Lips®.",
      beneficios: "La Mascarilla Exfoliante para Labios con Karité exfolia con cristales naturales de azúcar suavemente los labios para brindar una apariencia perfecta. Mezclado con exquisita Manteca de Karité, tus labios se sentirán suaves y humectados.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/especiales/producto12.jpg"
    }
    ,
    {
      id: 78,
      uso: "Labios",
      name: "Crema Humectante para Labios con Karité Satin Lips®",
      message:"Crema%20Humectante%20para%20Labios%20con%20Karité%20Satin%20Lips",
      type: "Crema",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "",
      aplicacion: "Luego de exfoliar con la Mascarilla Exfoliante para Labios con Karité Satin Lips®, aplicá suavemente en los labios la Crema Humectante para Labios con Karité para hidratar profundamente los labios y dejar una sensación de suavidad al instante.",
      beneficios: "La Crema Humectante para Labios con Karité es parte de los dos pasos del Set Satin Lips® que también incluye la Mascarilla Exfoliante para Labios con Karité. La crema humecta profundamente los labios al instante, dejándolos con una apariencia saludable. El Set Satin Lips® te brinda una sensación similar a un spa para los labios en cualquier momento y cualquier lugar. Formulado con Manteca de Karité y el sabor fresco del Té Blanco y Cítricos, estos productos dejan a un lado los labios secos y agrietados, brindando una hidratación en dos sencillos pasos. La crema humecta profundamente los labios al instante, dejándolos con una apariencia saludable. Mezclados con una combinación de Manteca de Karité y Jojoba.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/especiales/producto13.jpg"
    }
    ,
    {
      id: 79,
      uso: "Labios",
      name: "Set Labios de Seda Satin Lips®",
      message:"Set%20Labios%20de%20Seda%20Satin%20Lips",
      type: "Mascarilla",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "",
      aplicacion: "Da un generoso masaje con la Mascarilla Exfoliante para Labios con Karité por un minuto para ayudar a contrarrestar la resequedad. Espera de 1 a 2 minutos y removela. Continua con la Crema Humectante para Labios con Karité.",
      beneficios: "El Set Labios de Seda Satin Lips® lleva tus labios al paraíso con un tratamiento de spa que podrás disfrutar en cualquier momento. Formulado con manteca de Karité y el fresco sabor de té blanco y cítricos, brindan hidratación a los labios resecos y agrietados en dos pasos sencillos.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/especiales/producto14.jpg"
    }
    ,
    {
      id: 80,
      uso: "Cara",
      name: "Cepillo Limpiador Skinvigorate Sonic",
      message:"Cepillo%20Limpiador%20Skinvigorate%20Sonic",
      type: "Cepillo",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Solo necesitas 60 segundos para una limpieza profunda perfecta! Este dispositivo elimina 4 veces mejor la suciedad, impurezas, grasa, maquillaje y polución en la piel que con una limpieza manual. Limpia lugares difíciles de llegar y se puede usar dos veces al día sobre todo tipo de pieles, incluidas las sensibles.",
      aplicacion: "Crema Limpiadora con Cabezal de Cepillo Limpiador Facial Skinvigorate Sonic™: Aplicá tu crema limpiadora Mary Kay favorita en el rostro. A continuación elegí entre las 3 velocidades. Luego limpiá masajeando la piel hasta dos veces al día. Aplicá el cepillo durante 15 segundos en cada una de estas cuatro áreas: cada mejilla, nariz, barbilla y frenteSuero con el Cabezal de Masaje Facial Skinvigorate Sonic™: Aplicá tu suero favorito en rostro y cuello para ayudar al Cepillo Limpiador Facial Skinvigorate Sonic™ a desplazarse con pequeños movimientos ascendentes para una piel más joven y radiante. Luego limpiá masajeando la piel hasta dos veces al día. El dispositivo se apagará de forma automática tras un minuto. Pulsá de nuevo para completar los dos minutos de masaje facial.",
      beneficios: "Personalizá tu régimen de limpieza con sus tres velocidades. ¡Sin pilas! Batería recargable con cable USB. Podés utilizar su cabezal cepillo para limpiar la piel o su cabezal masaje para aplicar la Loción Facial Efecto Reafirmante VoluFirm® TimeWise® Repair. Apagado automático a los 60 segundos. Indicadores LED para informarte de cuándo cargar el dispositivo (LED de color rojo) y cuándo la batería está completamente cargada (LED de color verde). El Cepillo Limpiador de la Piel Skinvigorate Sonic™ incluye 1 dispositivo + 1 Cabezal Limpiador + 1 cable USB. El Cabezal Cepillo Limpiador Facial y el Cabezal Masaje Facial Skinvigorate Sonic™ solo son compatibles para usarse en el Cepillo Limpiador de la Piel Skinvigorate Sonic™. 1 Resultados basados en un estudio independiente de un día en el cual 21 mujeres utilizaron una limpiadora con el Cepillo Limpiador de la Piel Skinvigorate Sonic™ + Cabezal Cepillo Limpiador Facial Skinvigorate Sonic™ durante 15 segundos.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/especiales/producto11.jpg"
    }
    ,
    {
      id: 81,
      uso: "Cara",
      name: "Cabezal Cepillo Limpiador Facial Skinvigorate Sonic™ (x2)",
      message:"Cabezal%20Cepillo%20Limpiador%20Facial%20Skinvigorate%20Sonic",
      type: "Cepillo",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "",
      aplicacion: "",
      beneficios: "Limpiá tu piel y prepárala en para el siguiente paso en tu rutina de cuidado de la piel con el Cabezal Cepillo Limpiador Facial Skinvigorate Sonic™. Se recomienda cambiar los cabezales por uno nuevo cada 3 meses. Estos recambios solo son compatibles con el Cepillo Limpiador de la Piel Skinvigorate Sonic™. *Se venden por separado. * Resultados basados en un estudio independiente de un día en el cual 21 mujeres utilizaron una limpiadora con el Sistema de Cuidado de la Piel Skinvigorate Sonic™ + Cabezal Cepillo Limpiador Facial Skinvigorate Sonic™ durante 15 segundos.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/especiales/producto18.jpg"
    }
    ,
    {
      id: 82,
      uso: "Cara",
      name: "Cabezal de Masaje Facial Skinvigorate Sonic",
      message:"Cabezal%20de%20Masaje%20Facial%20Skinvigorate%20Sonic",
      type: "Masaje",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "¡Relaja la tensión facial y suaviza la apariencia de las líneas finas de expresión! Con este cabezal de masaje facial extra el rostro y cuello tienen un aspecto firme y tonificado, la piel parece más joven y radiante",
      aplicacion: "",
      beneficios: "El masaje es conocido por promover la microcirculación y aportar oxígeno y nutrientes a la piel. Deja la piel sana y más lisa. Ayuda a que el suero se absorba correctamente en la piel. Aporta más de 24.000 poderosos micromasajes sónicos en dos minutos. Ayuda a la elasticidad de la pie. *Se venden por separado. * Resultados basados en las afirmaciones de la mayoría de los panelistas de un estudio independiente de 4 semanas de duración en el que se estudiaron a 208 mujeres que utilizaron el Cepillo Limpiador Facial Skinvigorate Sonic™ y su Suero favorito con el Cabezal Masaje Facial una vez al día durante dos minutos. * El dispositivo no está diseñado para ser combinado con productos con factor de protección solar o productos para el acné.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/especiales/producto11bis.jpg"
    }
    ,
    {
      id: 83,
      uso: "Cuerpo",
      name: "Protector solar FPS 30",
      message:"Protector%20solar%20FPS%2030",
      type: "ProtectorSolar",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Fórmula ligera, libre de aceite. Se absorbe rápidamente y la piel se siente suave y humectada. Protege contra los rayos ultravioleta A y B. Es resistente al agua y al sudor hasta por 80 minutos. Dermatológicamente probado. No comedogénico. Uso adecuado a partir de los 4 (cuatro) años de edad.",
      aplicacion: "Aplicar abundantemente al menos 15 minutos antes de la exposición al sol. Reaplicar al menos cada dos horas y después de 80 minutos de nadar o sudar, e inmediatamente después de secarse con la toalla. Es necesaria la reaplicación del producto para mantener su efectividad. Si la cantidad aplicada no es adecuada, el nivel de protección será significativamente reducido.",
      beneficios: "El Protector Solar FPS 30 es indispensable en la lucha contra el envejecimiento prematuro. La exposición al sol es una de las causas principales de las señales visibles del envejecimiento de la piel. El cáncer de la piel es el número uno de los cánceres comunes, pero afortunadamente es altamente prevenible. Estudios científicos han determinado que el uso diario de filtros solares puede reducir las probabilidades de desarrollar algunas formas de cáncer.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/especiales/producto6.jpg"
    }
    ,
    {
      id: 84,
      uso: "Manos",
      name: "Jabón Líquido para Manos con Karité Satin Hands® de Edición Limitada.",
      message:"Jabón%20Líquido%20para%20Manos%20con%20Karité%20Satin%20Hands%20de%20Edición%20Limitada",
      type: "Jabon",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "¡Lavate las manos sin resecarlas! Consentí tus manos con el nuevo Jabón para Manos con Karité Satin Hands, mezclado con hidratante y nutritiva manteca de karité. Las fans en todas partes adoran el Set Manos de Seda®, y ahora pueden consentir sus manos con el Jabón para Manos con Karité Satin Hands",
      aplicacion: "",
      beneficios: "Deja las manos totalmente limpias. No deja las manos excesivamente resecas. Combinado con la nutritiva manteca de karité. Envuelve las manos en una espuma suave y reconfortante. Sin Fragancia.¡Ahora sí podés disfrutar esos 20 segundos mientras te lavas las manos! Jabón para Manos con Karité Satin Hands es un suave jabón para manos formulado con la nutritiva manteca de karité, podrás disfrutar el lavarte las manos sin resecarlas. Después de mojarte las manos, aplicá la cantidad de Jabón para Manos con Karité Satin Hands que dispense el aplicador. Frotá las palmas con suavidad y continuamente durante 20 segundos para crear una espuma que envuelva el dorso y las palmas de las manos, alrededor de los dedos y debajo de las uñas. Enjuagá y disfrutá unas manos minuciosamente limpias y purificadas.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/especiales/producto21.jpg"
    }
    ,
    {
      id: 85,
      uso: "Piel",
      name: "¡NUEVO! Spray Corporal Friday Feels Mary Kay At Play™ Edición Limitada",
      message:"Spray%20Corporal%20Friday%20Feels%20Mary%20Kay%20At%20Play%20Edición%20Limitada",
      type: "Spray",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Convertí tu día en un día extraordinario. ¡Disfrutá cuidando tu cuerpo, como si todos los días fueran viernes, con Friday Feels!. Deleitate con su delicioso y fresco aroma floral, con notas de flor de manzana, fresia y azahar.",
      aplicacion:"",
      beneficios:"",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/piel/producto16.jpg"
    }
    ,
    {
      id: 86,
      uso: "Piel",
      name: "¡NUEVO! Spray Corporal Weekend Vibes Mary Kay At Play™ Edición Limitada",
      message:"Spray%20Corporal%20Weekend%20Vibes%20Mary%20Kay%20At%20Play%20Edición%20Limitada",
      type: "Locion",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Convertí tu día en un día extraordinario. ¡Disfrutá de un cuidado del cuerpo inspirado en la sensación de vivir en un fin de semana eterno! Imaginá un día libre con notas crujientes de pera, mango y florales frescos.",
      aplicacion: "",
      beneficios: "",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/piel/producto17.jpg"
    }
    ,
    {
      id: 87,
      uso: "Piel",
      name: "¡NUEVA! Loción Corporal Friday Feels Mary Kay At Play™ Edición Limitada",
      message:"Loción%20Corporal%20Friday%20Feels%20Mary%20Kay%20At%20Play%20Edición%20Limitada",
      type: "Locion",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Convertí tu día en un día extraordinario. ¡Disfrutá cuidando tu cuerpo, como si todos los días fueran viernes, con Friday Feels! Deleitate con su delicioso y fresco aroma floral, con notas de flor de manzana, fresia y azahar.",
      aplicacion: "",
      beneficios: "",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/piel/producto19.jpg"
    }
    ,
    {
      id: 88,
      uso: "Piel",
      name: "¡NUEVO! Spray Corporal Weekend Vibes Mary Kay At Play™ Edición Limitada",
      message:"Spray%20Corporal%20Weekend%20Vibes%20Mary%20Kay%20At%20Play%20Edición%20Limitada",
      type: "Spray",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Convertí tu día en un día extraordinario. ¡Disfruá de un cuidado del cuerpo inspirado en la sensación de vivir en un fin de semana eterno! Imaginá un día libre con notas crujientes de pera, mango y florales frescos.",
      aplicacion: "",
      beneficios: "",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/piel/producto17.jpg"
    }
    ,
    {
      id: 89,
      uso: "Piel",
      name: "Mary Kay® Belara Eau de Parfum",
      message:"Mary%20Kay%20Belara%20Eau%20de%20Parfum",
      type: "Fragancia",
      to: "Fragancia femenina",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Buscar el equilibrio en la vida es algo importante y esta fina fragancia con sus notas de higo de San Joaquín, arándano salvaje y flor de loto de ópalo, que se complementan con el nardo del sur de la India y el sándalo, es ideal para la mujer que vive en armonía y tiene un balance perfecto.",
      aplicacion: "Aplicar libremente en todo su cuerpo.",
      beneficios: "Un floral almizcloso",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/fragancias/her/producto1.jpg"
    }
    ,
    {
      id: 90,
      uso: "Piel",
      name: "True Passion L’Eau® Eau de Toilettea",
      message:"True%20Passion%20L%20Eau%20Eau%20de%20Toilette",
      type: "Fragancia",
      to: "Fragancia femenina",
      price: 1000,
      link: "https://www.facebook.com/",
      description: "Una nueva fragancia inspirada en la alegría de True Passion®.",
      aplicacion: "Rociar la fragancia en los puntos clave de pulsación del cuerpo: cuello, muñeca y doblez del antebrazo.",
      beneficios: "",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/fragancias/her/producto23.jpg"
    }
    ,
    {
      id: 91,
      uso: "Piel",
      name: "True Passion™ Eau de Toilette",
      message:"True%20Passion%20Eau%20de%20Toilette",
      type: "Fragancia",
      to: "Fragancia femenina",
      price: 1000,
      link: "https://www.facebook.com/",
      description:"Una fragancia que combina la frescura, feminidad y sensualidad, para capturar la sensación de una mujer apasionada por la vida y el amor.",
      aplicacion: "Aplicar libremente en todo su cuerpo.",
      beneficios: "La fragancia está pensada para aquellas mujeres, que desean resaltar sus virtudes, sus sentimientos, sus sensaciones y que celebran su sensualidad. Es un aroma atrapante, con notas que resaltan lo mejor de cada una.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/fragancias/her/producto15.jpg"
    }
    ,
    {
      id: 92,
      uso: "Piel",
      name: "True Passion Noir™ Eau de Toilette",
      message:"True%20Passion%20Noir%20Eau%20de%20Toilette",
      type: "Fragancia",
      to: "Fragancia femenina",
      price: 1000,
      link: "https://www.facebook.com/",
      description:"Una fragancia que combina eterna feminidad y coqueta sensualidad, para capturar el encanto seductor de la noche.",
      aplicacion: "Aplicar libremente en todo su cuerpo.",
      beneficios: "La fragancia está pensada para aquellas mujeres que desean resaltar su encanto femenino, y que juegan con la tentación y sensualidad de sus momentos más apasionados. Es un aroma floral, único y seductor con notas que evocan lo mejor de cada una.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/fragancias/her/producto16.jpg"
    }
    ,
    {
      id: 93,
      uso: "Piel",
      name: "Love Fearlessly ® Eau de Parfum",
      message:"Love%20Fearlessly%20Eau%20de%20Parfum",
      type: "Fragancia",
      to: "Fragancia femenina",
      price: 1000,
      link: "https://www.facebook.com/",
      description:"Una fragancia para las mujeres que crean belleza a través del amor.",
      aplicacion: "Aplicar en las muñecas, detrás de las orejas, en la base del cuello, en el pliegue interior del codo y detrás de las rodillas.",
      beneficios: "",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/fragancias/her/producto20.jpg"
    }
    ,
    {
      id: 94,
      uso: "Piel",
      name: "Dream Fearlessly ® Eau de Parfum",
      message:"Dream%20Fearlessly%20Eau%20de%20Parfum",
      type: "Fragancia",
      to: "Fragancia femenina",
      price: 1000,
      link: "https://www.facebook.com/",
      description:"Una fragancia inspirada para la etapa de la mujer donde sueña en grande, donde es moderna e independiente y con un espíritu optimista e incansable.",
      aplicacion: "Zonas estratégicas para lograr un aroma perdurable de la fragancia:Aplicar la fragancia después de tomar un baño y/o utilizar una crema humectante para el cuerpo, ya que se absorbe mejor en la piel y durará mucho más tiempo.Aplicar en las muñecas, detrás de las orejas, en la base de la garganta y en el pliegue interior del codo y detrás de las rodillas.",
      beneficios: "",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/fragancias/her/producto21.jpg"
    }
    ,
    {
      id: 95,
      uso: "Piel",
      name: "Live Fearlessly ® Eau de Parfum",
      message:"Live%20Fearlessly%20Eau%20de%20Parfum",
      type: "Fragancia",
      to: "Fragancia femenina",
      price: 1000,
      link: "https://www.facebook.com/",
      description:"“Creada para deleitar a las mujeres con un comienzo seguro, un giro femenino y un final sin miedo.”Una fragancia floral amaderada que representa la etapa extrovertida de la mujer; cuando dice lo que piensa y confía en sí misma. Que abraza cada nuevo horizonte y que crea su propia historia.",
      aplicacion: "Aplicar en las muñecas, detrás de las orejas, en la base del cuello, en el pliegue interior del codo y detrás de las rodillas.",
      beneficios: "",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/fragancias/her/producto28.jpg"
    }
    ,
    {
      id: 96,
      uso: "Piel",
      name: "Wish® Eau de Toilette",
      message:"Wish%20Eau%20de%20Toilette",
      type: "Fragancia",
      to: "Fragancia femenina",
      price: 1000,
      link: "https://www.facebook.com/",
      description:"Un aroma floral-frutal de fantasía hecho para la mujer que confía en su imaginación y cree profundamente en que aquello que siempre ha deseado está a su alcance.",
      aplicacion: "Rociar la fragancia en los puntos clave de pulsación del cuerpo: cuello, muñeca y doblez del antebrazo.",
      beneficios: "",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/fragancias/her/producto22.jpg"
    }
    ,
    {
      id: 97,
      uso: "Piel",
      name: "Hello Brilliant® Eau de Toilette",
      message:"Hello%20Brilliant%20Eau%20de%20Toilette",
      type: "Fragancia",
      to: "Fragancia femenina",
      price: 1000,
      link: "https://www.facebook.com/",
      description:"Decile *Hola* a Hello Brillant® Eau de Toilette, la fragancia de Mary Kay® para chicas como vos. Es perfecta porque te encantará su esencia floral además su caja es divertida y única como vos.",
      aplicacion: "Zonas estratégicas para lograr un aroma perdurable de la fragancia:Aplicar la fragancia después de tomar un baño y/o utilizar una crema humectante para el cuerpo, ya que se absorbe mejor en la piel y durará mucho más.Aplicar en las muñecas, detrás de las orejas, en la base de la garganta y en el pliegue interior del codo y detrás de las rodillas.",
      beneficios: "",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/fragancias/her/producto24.jpg"
    }
    ,
    {
      id: 98,
      uso: "Piel",
      name: "Forever Diamonds® Eau de Parfum",
      message:"Forever%20Diamonds%20Eau%20de%20Parfum",
      type: "Fragancia",
      to: "Fragancia femenina",
      price: 1000,
      link: "https://www.facebook.com/",
      description:"Una sofisticada fragancia floral frutal que expresa el esplendor y la felicidad interior de toda mujer. Sofisticada fragancia floral afrutada que capta la alegría y el esplendor que habita dentro de cada mujer. - Las notas altas incluyen el deslumbrante melocotón dorado, pétalos de jazmín y orquídea diamante. - Las notas medias incluyen absoluto de nardo, heliotropo y chabacano. - Las notas bajas incluyen grano de vainilla cremosa y ámbar blanco.",
      aplicacion: "Zonas estratégicas para lograr un aroma perdurable de la fragancia:Aplicar la fragancia después de tomar un baño y/o utilizar una crema humectante para cuerpo, ya que se absorbe mejor en la piel y durará mucho más tiempo.Aplicar en las muñecas, detrás de las orejas, en la base del cuello y en el pliegue interior del codo y detrás de las rodillas.",
      beneficios: "",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/fragancias/her/producto25.jpg"
    }
    ,
    {
      id: 99,
      uso: "Piel",
      name: "Pink Diamonds",
      message:"Pink%20Diamonds",
      type: "Fragancia",
      to: "Fragancia femenina",
      price: 1000,
      link: "https://www.facebook.com/",
      description:"Fragancia elegante y encantadora con un alegre, pero sofisticado aroma floral. Delicioso aroma enriquecido con una sexy sinfonía de flores blancas.",
      aplicacion: "Aplicar libremente en todo su cuerpo.",
      beneficios: "Esta es la primera fragancia creada por Mary Kay específicamente para los países de Latinoamérica.Delicioso aroma enriquecido con una sexy sinfonía de flores blancas.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/fragancias/her/producto26.jpg"
    }
    ,
    {
      id: 100,
      uso: "Piel",
      name: "Pink Diamonds Intense",
      message:"Pink%20Diamonds%20Intense",
      type: "Fragancia",
      to: "Fragancia femenina",
      price: 1000,
      link: "https://www.facebook.com/",
      description:"La fragancia Pink Diamonds Intense® pone en evidencia la elegancia de una mujer audaz, que siempre deja una impresión duradera. Dejate sorprender por sus notas que van desde la Manzana, Melón y Menta, pasando por un toque de Gardenia y Flor de Naranja, concluyendo con el Ámbar y Cumarina. Al igual que un diamante, amplifica tu luz interior. Sentite segura de vos misma, para brillar como sólo vos lo haces. Sos una mujer que en su día a día va descubriendo que tiene diferentes versiones, y que cada una de ellas te hace sentir en un mundo lleno de posibilidades donde podes brillar y sentirte segura. Dejate sorprender por las fragancias Diamonds y hace notar tu lado más brillante.",
      aplicacion: "Aplicá la fragancia en: cuello, muñecas, pliegue interior de los codos y rodillas.",
      beneficios: "",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/fragancias/her/producto27.jpg"
    }
    ,
    {
      id: 101,
      uso: "Piel",
      name: "Fragancia Modern Charm® Eau de Parfum 50 ml",
      message:"Fragancia%20Modern%20Charm%20Eau%20de%20Parfum%2050%20ml",
      type: "Fragancia",
      to: "Fragancia femenina",
      price: 1000,
      link: "https://www.facebook.com/",
      description:"La nueva definición de la feminidad, moderna, poderosa y memorable. La fragancia Modern Charm® Eau de Parfum representa la nueva definición de la feminidad. Déjate sorprender por su aroma fresco y dulce, con notas que van desde el melón, la manzana, pasando por un toque de flor de durazno, iris y jazmín, concluyendo con vetiver, ámbar y pachulí.Floral Oriental Amaderada",
      aplicacion: "",
      beneficios: "",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/fragancias/her/producto30.jpg"
    }
    ,
    {
      id: 102,
      uso: "Piel",
      name: "High Intensity",
      message:"High%20Intensity",
      type: "Fragancia",
      to: "Fragancia masculina",
      price: 1000,
      link: "https://www.facebook.com/",
      description:"Cautivante, refinada y distinguida, la colonia MK High Intensity pertenece a la familia de fragancias orientales ambarinas. Este aroma oriental ambarino posee notas intrigantes de fresco hinojo negro y salvia plateada.",
      aplicacion: "Aplicar libremente en todo el cuerpo.",
      beneficios: "Es una mezcla oriental con notas altas de hinojo negro, salvia y la exquisita composición de granos de café. En su esencia captura las notas de clavel, té negro y hojas de violeta. Contiene una irresistible composición de piedra ámbar y la intensidad de la madera *royal king*, ingrediente exclusivo de Mary Kay que le brinda una rica intensidad a esta colonia para hombres. Familia: Ámbar oriental.",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/fragancias/him/producto2.jpg"
    }
    ,
    {
      id: 103,
      uso: "Piel",
      name: "Magnetic Passion™ Eau de Parfum",
      message:"Magnetic%20Passion%20Eau%20de%20Parfum",
      type: "Fragancia",
      to: "Fragancia masculina",
      price: 1000,
      link: "https://www.facebook.com/",
      description:"Irresistible y masculino aroma, creado gracias a la cuidadosa selección de ingredientes que contienen sus magnéticas notas.",
      aplicacion: "Aplicar libremente en todo su cuerpo.",
      beneficios: "Familia aromática: Chipre curtido. Inspiración del Perfumista: Diseñé esta fragancia para el hombre que conoce el poder de su sensualidad y su atractivo magnético. Es una magnífica combinación de elementos masculinos y sensuales que representan perfectamente la elegancia y el magnetismo del hombre. Hernan Figoli, Perfumista y creador de Magnetic Passion™ Eau de Parfum",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/fragancias/him/producto11.jpg"
    }
    ,
    {
      id: 104,
      uso: "Piel",
      name: "Upbeat para Él™ Eau de Toilette",
      message:"Upbeat%20para%20Él%20Eau%20de%20Toilette",
      type: "Fragancia",
      to: "Fragancia masculina",
      price: 1000,
      link: "https://www.facebook.com/",
      description:"Las Fragancias fueron creadas para capturar el ambiente de un festival en donde el amor, los amigos, la diversión y por supuesto la música se reúnen en un aroma fresco y aventurero.",
      aplicacion: "Aplicar libremente en todo su cuerpo.",
      beneficios: "Familia aromática: Una esencia fresca y aventurera para sus días de diversión. Inspiración del Perfumista: Yo quería capturar todo el entusiasmo de llegar al festival y anticiparme a todo lo que ese día tenía guardado para mí. Imaginé a un grupo de amigos manejando hacia el lugar en un excelente convertible con la capota baja, y las chicas tratando de acaparar las miradas mientras se cruzaban. Natasha Cote Perfumista y creadora de Upbeat para Él Eau de Toilette",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/fragancias/him/producto10.jpg"
    }
    ,
    {
      id: 105,
      uso: "Piel",
      name: "Upscale",
      message:"%20",
      type: "Fragancia",
      to: "Fragancia masculina",
      price: 1000,
      link: "https://www.facebook.com/",
      description:"La esencia del éxito. Un hombre exitoso, seguro y sofisticado merece una fragancia digna de sus logros. Sus notas aromáticas fueron seleccionadas cuidadosamente para crear una masculina y refinada fragancia para el hombre exitoso que aprecia las cosas buenas de la vida.",
      aplicacion: "Aplicar en las muñecas, detrás de las orejas, en la base del cuello, en el pliegue interior del codo y detrás de las rodillas.",
      beneficios: "",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/fragancias/him/producto13.jpg"
    }
    ,
    {
      id: 106,
      uso: "Piel",
      name: "Upscale Gentleman",
      message:"Upscale%20Gentleman",
      type: "Fragancia",
      to: "Fragancia masculina",
      price: 1000,
      link: "https://www.facebook.com/",
      description:"Una fragancia amaderada tan poderosa como la actitud de un caballero contemporáneo. Para el hombre sofisticado, cautivador y elegante.",
      aplicacion: "Aplicar en las muñecas, detrás de las orejas, en la base del cuello, en el pliegue interior del codo y detrás de las rodillas.",
      beneficios: "",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/fragancias/him/producto14.jpg"
    }
    ,
    {
      id: 107,
      uso: "Piel",
      name: "Magnetic Passion Edge ™ Eau de Parfum",
      message:"Magnetic%20Passion%20Edge%20Eau%20de%20Parfum",
      type: "Fragancia",
      to: "Fragancia masculina",
      price: 1000,
      link: "https://www.facebook.com/",
      description:"Inspirada en hombres reales, visionarios, que aspiran a hacer grandes cosas y vivir la vida al máximo como tú. Experimentá el cautivador aroma de Mary Kay Magnetic Passion Edge® Eau de Parfum. Enamorate de nuevo con la esencia de la seducción.",
      aplicacion: "aplicar en las muñecas, detrás de las orejas, en la base del cuello, en el pliegue interior del codo y detrás de las rodillas.",
      beneficios: "",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/fragancias/him/producto12.jpg"
    }
    ,
    {
      id: 108,
      uso: "Piel",
      name: "Authentic Hero® Eau de Toilette 100 ml",
      message:"Authentic%20Hero%20Eau%20de%20Toilette%20100%20ml",
      type: "Fragancia",
      to: "Fragancia masculina",
      price: 1000,
      link: "https://www.facebook.com/",
      description:"Una fragancia hecha para el hombre que abraza cada parte de sí mismo. Celebrá al héroe de tu vida con esta fragancia multifacética.",
      aplicacion: "Aplicá la fragancia en: cuello, muñecas, pliegue interior de los codos y rodillas.",
      beneficios: "",
      image: "https://www.marykayarg.com.ar/mk/content/arg/conoce-tus-productos/imgs/fragancias/him/producto15.jpg"
    }


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
  getGel() {
    const gelArr: any[] = [];
    const termino = 'Gel';
    for (const producto of this.items) {
      const type = producto.type;
      if ((type.indexOf(termino)) >= 0) {
        gelArr.push(producto);
      }
    }
    return gelArr;
  }
  getLocion() {
    const locionArr: any[] = [];
    const termino = 'Locion';
    for (const producto of this.items) {
      const type = producto.type;
      if ((type.indexOf(termino)) >= 0) {
        locionArr.push(producto);
      }
    }
    return locionArr;
  }
  getSombras() {
    const sombrasArr: any[] = [];
    const termino = 'Sombra';
    for (const producto of this.items) {
      const type = producto.type;
      if ((type.indexOf(termino)) >= 0) {
        sombrasArr.push(producto);
      }
    }
    return sombrasArr;
  }
  getBrochas() {
    const brochasArr: any[] = [];
    const termino = 'Brocha';
    for (const producto of this.items) {
      const type = producto.type;
      if ((type.indexOf(termino)) >= 0) {
        brochasArr.push(producto);
      }
    }
    return brochasArr;
  }
  getRubores() {
    const ruborArr: any[] = [];
    const termino = 'rubor';
    for (const producto of this.items) {

      const type = producto.type.toLowerCase();
      if ((type.indexOf(termino)) >= 0) {
        ruborArr.push(producto);
      }
    }
    return ruborArr;
  }
  getCorrectores() {
    const correctoresArr: any[] = [];
    const termino = 'Corrector';
    for (const producto of this.items) {
      const type = producto.type;
      if ((type.indexOf(termino)) >= 0) {
        correctoresArr.push(producto);
      }
    }
    return correctoresArr;
  }
  getDelineadores() {
    const delineadoresArr: any[] = [];
    const termino = 'Delineador';
    for (const producto of this.items) {
      const type = producto.type;
      if ((type.indexOf(termino)) >= 0) {
        delineadoresArr.push(producto);
      }
    }
    return delineadoresArr;
  }
  getLabiales() {
    const labialesArr: any[] = [];
    const termino = 'Labial';
    for (const producto of this.items) {
      const type = producto.type;
      if ((type.indexOf(termino)) >= 0) {
        labialesArr.push(producto);
      }
    }
    return labialesArr;
  }
  getBases() {
    const basesArr: any[] = [];
    const termino = 'Base';
    for (const producto of this.items) {
      const type = producto.type;
      if ((type.indexOf(termino)) >= 0) {
        basesArr.push(producto);
      }
    }
    return basesArr;
  }
  getDesmaquilladores() {
    const desmaquilladoresArr: any[] = [];
    const termino = 'Desmaquillador';
    for (const producto of this.items) {
      const type = producto.type;
      if ((type.indexOf(termino)) >= 0) {
        desmaquilladoresArr.push(producto);
      }
    }
    return desmaquilladoresArr;
  }
  getSprays() {
    const spraysArr: any[] = [];
    const termino = 'Spray';
    for (const producto of this.items) {
      const type = producto.type;
      if ((type.indexOf(termino)) >= 0) {
        spraysArr.push(producto);
      }
    }
    return spraysArr;
  }
  getFragancias() {
    const fraganciasArr: any[] = [];
    const termino = 'Fragancia';
    for (const producto of this.items) {
      const type = producto.type;
      if ((type.indexOf(termino)) >= 0) {
        fraganciasArr.push(producto);
      }
    }
    return fraganciasArr;
  }
  getMascarillas() {
    const mascarillassArr: any[] = [];
    const termino = 'Mascarilla';
    for (const producto of this.items) {
      const type = producto.type;
      if ((type.indexOf(termino)) >= 0) {
        mascarillassArr.push(producto);
      }
    }
    return mascarillassArr;
  }

}
