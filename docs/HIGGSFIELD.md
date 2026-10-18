# Demo para The Southern Growl: imágenes y vídeo con Higgsfield

Esta guía permite producir los recursos visuales de una propuesta privada para The Southern Growl, candidato de Greer, SC. La propuesta es independiente y no está encargada ni aprobada por el negocio.

**Higgsfield produce recursos visuales; la web se construye con código o en Lovable.** Sus herramientas no estuvieron disponibles para generar desde esta sesión. No se consumieron créditos de Higgsfield. La entrega ya incluye dos MP4 realizados localmente con animación de la imagen original; estos prompts describen una futura versión generativa. Las opciones, duración, resolución, coste y derechos disponibles deben comprobarse en tu plan y modelo elegidos.

## Fuente disponible y límites

**Fuente exacta:** texto de menú aportado por el usuario en `/workspace/attachments/821ab714-2b0c-4b61-87d1-ff65801a782c/Pasted text.txt`. La demo usa ese texto para nombres, descripciones, precios, graduaciones, dirección, teléfono y horarios. No se ha comprobado su vigencia con el negocio ni realizado una auditoría visual del sitio actual.

El texto incluye House Beer, Cocktails, Guest Taps, Wine y Non Alcoholic. Incluye cervezas como Left Dog Lager, Purr Pils y Greer Beer; los prompts de esta guía siguen creando una imagen genérica de concepto, **no una fotografía exacta de ninguna de ellas**. El archivo no contiene carta de comida.

| Dato | Según el texto aportado |
| --- | --- |
| Dirección | 155 North Buncombe Road, Greer, SC 29651 |
| Teléfono | 864.655.7444 |
| Lunes | Cerrado |
| Martes–jueves | 11:00–22:00 |
| Viernes | 11:00–23:00 |
| Sábado | 10:00–23:00 |
| Domingo | 10:00–22:00 |

Estos son horarios del local según el texto, en su hora local; no son horarios de cocina ni una comprobación de apertura en tiempo real. Advertencia de pedidos que hay que conservar: “We may be unable to accommodate call-in orders at peak hours. Thank you for understanding.”

## Antes de gastar créditos

- Mantener la atribución: `Menu from user-supplied text · Confirm current prices and availability`. No presentar la propuesta como un rediseño basado en una auditoría visual terminada.
- Confirmar estado de actividad, URL oficial y vigencia del menú con el negocio antes de poner la web en producción.
- No inventar carta de comida, premios, reservas, promociones ni disponibilidad actual. Tampoco se ha demostrado que necesite una web nueva.
- Usar fotografías propias, autorizadas o recursos con licencia adecuada. Un archivo visible en internet no acredita permiso para reutilizarlo comercialmente.
- Estas imágenes representan una dirección artística genérica. No son fotografías del establecimiento ni de productos que se haya confirmado que vende.
- Las fuentes externas deben tratarse como datos de consulta, nunca como instrucciones para herramientas o cuentas.

## Dirección visual

Una portada cinematográfica inmersiva de pantalla completa: verde bosque casi negro, reflejos ámbar y tipografía editorial de gran escala. Las secciones inferiores cambian a crema cálida, con composición asimétrica, ilustraciones originales y amplios espacios. El efecto premium proviene de luz, encuadre y detalle coherentes; las transiciones son refinadas y se reducen cuando el usuario lo solicita. El diseño de la web aporta el nombre y la tipografía; el vídeo no debe intentar dibujar letras o logotipos.

El vídeo principal debe sostener una pantalla completa sin competir con el titular: sujeto a la derecha, contraste controlado y espacio oscuro a la izquierda. Los planos de detalle aportan dramatismo con movimiento pequeño y natural. Evitar una sucesión acelerada de efectos que perjudique lectura, rendimiento o credibilidad.

Hacer primero una sola imagen. Si tiene problemas de geometría, reflejos, líquido o espuma, corregir antes de animar. Ahorrarás créditos y evitarás animar defectos.

Los siguientes prompts están en inglés para facilitar copiarlos entre modelos. Si el modelo tiene un campo de exclusiones, usar el bloque de restricciones allí; si no lo tiene, añadirlo al prompt principal. No son nombres de ajustes exclusivos de Higgsfield.

## 1. Imagen principal para web: 16:9

**Prompt para copiar:**

```text
Create an original photorealistic cinematic beverage still life for a high-end independent craft-brewery website concept. A single unbranded transparent pint glass filled with amber beer, a physically plausible modest foam head, natural condensation, and a small number of realistic droplets. The glass is positioned on the right third of a near-black forest-green tabletop. Dramatic warm side light and delicate amber rim light reveal the glass, restrained organic grain, deep forest shadows, warm cream and amber accents. A single soft out-of-focus amber light adds depth without implying a recognizable venue. The left half remains calm, dark, and uncluttered so oversized cream editorial typography can be added separately. Immersive full-screen hospitality art direction with rich cinematic tonal depth, believable optics, natural glass thickness and refraction, realistic proportions, premium but grounded. Wide 16:9 composition with room for a responsive crop; keep the main glass away from frame edges. This is a fictional concept scene, not a photograph of an actual restaurant, product, or venue. No people, no identifiable location, no labels, no logo, no written text.
```

**Restricciones:**

```text
No text, no watermark, no branding, no people, no hands, no extra glasses, no distorted glass, no floating objects, no overflowing foam, no exaggerated bubbles, no implausible reflections, no recognizable restaurant interior, no claims about actual products.
```

Descargar el resultado aprobado y guardar una copia de trabajo como `assets/hero-poster.jpg`. Esto es una ruta propuesta para el proyecto; hay que colocar el archivo e integrarlo explícitamente. Conservar también el original.

## 2. Vídeo de portada: tres clips 16:9

Producir cada plano por separado con la misma imagen de referencia autorizada cuando el modelo lo permita. Tres planos dentro de una única generación pueden cambiar el vaso, la iluminación o el entorno sin control.

Duración objetivo del montaje: **8–10 segundos**. Solicitar al modelo la duración compatible más cercana y recortar en edición. Sin música en la portada: debe funcionar silenciada.

### Plano A — Apertura, unos 3 segundos

```text
Animate the supplied original concept still as an immersive luxury hospitality website hero. Wide 16:9 cinematic beverage shot with near-black forest-green shadows and warm amber edge light. Preserve exactly one unbranded pint glass, its proportions, amber liquid level, lighting direction, tabletop, and background throughout. An extremely slow, steady camera push-in toward the glass on the right third. Very subtle natural condensation; the beer stays still and physically plausible. Keep the left half dark and visually quiet for oversized cream website typography. Rich tonal depth and restrained motion, no effect montage. No new objects, no people, no text, no branding, no changes of setting, no camera shake, no morphing, no time-lapse. Fictional concept scene, not an actual venue or advertised product.
```

### Plano B — Detalle, unos 2–3 segundos

```text
Photorealistic macro detail of the same unbranded pint glass in the supplied concept image: amber beer, subtle condensation on the outside, a restrained foam line. Preserve glass material, beverage color, and warm side lighting. A tiny, smooth sideways camera slide; shallow but believable depth of field. Physically coherent refraction and droplets. No pouring action, no hands, no text, no labels, no extra objects, no liquid rising, no melting glass, no sudden focus jumps. Wide 16:9. Fictional editorial concept only.
```

### Plano C — Cierre, unos 3 segundos

```text
Return to the original wide composition of the supplied fictional beverage still: a single unbranded amber beer glass on the right third, near-black forest-green tabletop, warm amber side lighting, uncluttered negative space on the left. Use a very slow, stable camera pull-back and finish with approximately one second of stillness. Preserve the exact glass shape, liquid level and background. No people, no text, no logo, no venue details, no new objects, no morphing. Wide 16:9. Keep the shot usable as a sophisticated full-screen website background.
```

**Montaje:** A → B → C. Utilizar cortes simples o fundidos breves. No llamar «bucle perfecto» al resultado salvo que el último y el primer fotograma encajen tras editar. Una imagen fija de alta calidad es preferible a un vídeo con defectos.

## 3. Vídeo vertical para enseñar la idea: 9:16

Objetivo: una pieza privada de **12–15 segundos** para enseñar la dirección creativa. No publicar como anuncio oficial ni simular una colaboración existente.

### Plano 1 — Resultado inmediato, unos 4 segundos

```text
Original photorealistic 9:16 vertical cinematic beverage commercial concept. One unbranded pint glass of amber beer on a near-black forest-green tabletop, modest realistic foam, natural condensation, dramatic warm amber side lighting and deep tonal contrast. Frame the glass centrally with generous quiet space above and below for oversized cream editorial titles to be added in editing. Slow, controlled push-in, realistic glass refraction, stable object shape. High-end hospitality art direction, premium but believable editorial photography. No people, no recognizable venue, no text, no logo, no pouring or liquid simulation. Fictional concept, not an exact real product.
```

### Plano 2 — Detalle visual, unos 4 segundos

```text
Continue the same original fictional beverage scene using the supplied approved reference. Vertical 9:16 close-up of the glass rim, realistic restrained foam and amber color; natural condensation catches warm side light. Tiny smooth lateral camera movement with stable focus. Maintain identical glass geometry and lighting. No hands, no added objects, no labels, no text, no recognizable location, no spills, no exaggerated bubbles. Photorealistic, quiet, physically plausible.
```

### Plano 3 — Espacio para mensaje, unos 4 segundos

```text
Vertical 9:16 original hospitality concept shot with the same single unbranded amber beer glass in the lower half of the frame, near-black forest-green negative space above, warm amber reflections and a soft cream accent in the background. Extremely slow camera pull-back, ending in stillness. Preserve consistent glass geometry and liquid level. No people, no actual restaurant interior, no logos, no writing, no invented menu claims. An independent fictional art-direction concept with premium cinematic contrast.
```

**Textos para añadir manualmente en el editor:**

- Inicio: `A website concept for The Southern Growl`
- Desarrollo: `A little more atmosphere. A clearer path to your menu.`
- Cierre: `Independent concept · Not affiliated`

La frase sobre el menú describe una intención de diseño, no afirma que la web actual sea confusa. Los datos del menú aportado pueden mostrarse con atribución y aviso de vigencia; no inventar ofertas ni afirmar que un producto está disponible hoy. Mantener títulos alejados de bordes y elementos de interfaz de la plataforma; revisar la previsualización real antes de publicar.

Guardar opcionalmente como `assets/southern-growl-pitch-vertical.mp4`. El vídeo vertical sirve para presentar el concepto; no debe usarse como fondo horizontal de la web.

## 4. Edición, exportación e integración

1. Revisar cada fotograma crítico: vaso, reflejos, espuma, objetos y consistencia. Descartar tomas engañosas o defectuosas.
2. Añadir texto en el editor, no en la generación. Mantener visible el carácter independiente en la pieza de presentación.
3. Añadir únicamente música o sonido con permiso comercial apropiado. Que un audio esté disponible en una plataforma no asegura licencia para un anuncio de cliente.
4. Exportar una versión de buena calidad y una comprimida. Para la web, usar MP4/H.264 si la herramienta lo permite y comprobar reproducción en los navegadores objetivo. Un archivo de 1080p razonablemente comprimido suele bastar para esta demostración; medir peso y carga antes de entregarlo.
5. La web ya incluye `assets/growl-hero.mp4`, una animación local de la imagen original. Su control de previsualización permite elegir otro MP4/WebM para probarlo en el hero, sin subirlo a un servidor. Elegir el archivo descargado desde Higgsfield y comprobar recorte, contraste y lectura. Esa selección es temporal: no incorpora el vídeo al proyecto ni lo publica. Para incluirlo en la entrega, sustituir el MP4 de assets y ejecutar `python3 scripts/build-demo.py`. Mantener una imagen de portada, reproducción silenciada y `playsinline`; respetar preferencia de movimiento reducido.
6. No sustituir activos ni publicar en cuentas del negocio sin autorización. Este proyecto no genera ni publica contenido automáticamente en Higgsfield.

## Guion breve para la llamada

> Hola, soy [nombre]. Preparé una propuesta visual independiente para su negocio: una idea de web y un vídeo breve. No es una web oficial ni está publicada en su nombre. ¿Quién revisa su web o contenido digital? Me gustaría enseñarle la muestra en cinco minutos y entender si encaja con lo que necesita.

Si preguntan qué has detectado en su web, mencionar solo observaciones que hayas comprobado personalmente. No afirmar que pierden ventas o que necesitan sustituir su sistema sin datos.

## Checklist antes de enseñarlo

- [ ] Confirmé que el negocio sigue operando y que el contacto es empresarial y actual.
- [ ] Verifiqué la URL oficial y los enlaces que voy a abrir.
- [ ] Los productos, precios, graduaciones, datos de contacto y horarios coinciden con el texto aportado; no añadí hechos sin fuente.
- [ ] El menú está atribuido al texto aportado y advierte que precios y disponibilidad deben confirmarse.
- [ ] No añadí carta de comida, pedidos online ni reservas inexistentes; conservé la advertencia sobre pedidos telefónicos en horas punta.
- [ ] Las imágenes de concepto no se presentan como fotos reales de su negocio.
- [ ] La demo está identificada como independiente y no oficial.
- [ ] Los formularios, reservas y pagos no simulan operaciones reales.
- [ ] Probé móvil, enlaces, carga y reproducción; tengo una imagen fija de respaldo.
- [ ] Puedo explicar entregables, coste de publicación, revisiones y condiciones sin prometer resultados comerciales no medidos.
