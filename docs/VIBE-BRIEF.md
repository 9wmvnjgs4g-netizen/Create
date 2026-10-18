# Dirección creativa: una noche que quieres alargar

La propuesta debe sentirse como una invitación a quedarse: luz cálida, cerveza ámbar, sombras verdes y tipografía con carácter. El acabado combina una portada cinematográfica con un menú que puedes consultar rápido desde el teléfono.

El enlace de referencia del negocio es https://thesoutherngrowl.com. Esta dirección es una propuesta original; no describe una auditoría visual de ese sitio ni una sesión fotográfica en el local.

## Qué hace que tenga una vibra propia

- **Portada:** vaso a la derecha, espacio oscuro para el titular y movimiento lento. Dos acciones claras: “Explore the drinks” y “Find us in Greer”.
- **Ambiente:** imagen amplia de un taproom imaginado con madera, luces ámbar y profundidad. Funciona como pausa visual entre la portada y el menú.
- **Contraste:** bloques de bosque oscuro y crema cálida, con detalles en óxido y reglas finas. Evitar llenar todo de tarjetas iguales.
- **Tipografía:** titulares grandes y editoriales; precios y etiquetas pequeños, ordenados y fáciles de comparar.
- **Movimiento:** entradas cortas y suaves, un plano continuo de video y control de pausa visible. Las preferencias de movimiento reducido tienen prioridad.
- **Móvil:** titulares que caben, filtros que se pueden tocar y acceso inmediato al teléfono, la dirección y los horarios.

## Recursos que acompañan esta dirección

- `assets/cinematic-pour.webp`: imagen conceptual original del vaso; respaldo de la portada.
- `assets/taproom-atmosphere.webp`: nueva imagen conceptual de ambiente; no representa el interior real del negocio.
- `assets/growl-hero.mp4`: video de portada existente. Para sustituirlo con Higgsfield, usar [HIGGSFIELD-VIBE.md](HIGGSFIELD-VIBE.md).
- `menu-data.js`: fuente estructurada de las 63 bebidas y los datos de contacto transcritos del texto aportado.
- `source-menu.txt`: texto original para contrastar nombres, precios y notas.

## Prompt para Lovable

Adjunta `menu-data.js`, `source-menu.txt` y las dos imágenes. Copia el siguiente bloque completo. Las referencias a archivos requieren que estén adjuntos o accesibles en el proyecto.

```text
Build the complete responsive website, not a design description, for an independent creative proposal for The Southern Growl in Greer, South Carolina.

CREATIVE DIRECTION
Make it feel like an inviting evening at a craft-beer destination: warm amber light, deep forest shadows, tactile cream backgrounds and small rust-red accents. Use dramatic editorial typography, intentional negative space, asymmetric compositions and fine typographic details. The result should be expressive, warm and polished, with the clarity of a useful restaurant website. Use English UI copy.

Use the attached cinematic-pour.webp as the hero fallback: amber beer glass on the right, readable dark space on the left. If growl-hero.mp4 is supplied, place it as a muted, looping, playsinline video with a visible pause control and the image fallback. Honor reduced-motion preferences. Keep all headlines, buttons and labels as live HTML.

Use the attached taproom-atmosphere.webp in a generous full-width atmosphere section, with an editorial caption identifying it as conceptual imagery. It is an original fictional hospitality scene, not a photograph of the real venue. Preserve its composition; do not add fake signage, menus or logos.

PAGE FLOW
1. Compact independent-concept label, accessible header and anchored navigation.
2. Immersive cinematic hero with a short expressive headline, “Explore the drinks” and “Find us in Greer” working anchors.
3. Warm-cream editorial section with a large headline, asymmetrical image placement and concise invitation copy without invented business history.
4. Full-width atmosphere image with a short caption and calm movement.
5. Three visually distinctive featured drinks drawn from the supplied data, leading to their entries in the full menu.
6. Complete searchable drinks menu with accurate prices, categories, serving sizes and notes.
7. Visit section with working telephone and map directions, supplied hours and the call-in warning.
8. Footer identifying this as an independent proposal with conceptual imagery.

DATA AND INTERACTION
Import all 63 distinct records from the attached menu-data.js without adding or dropping products. Preserve every price, ABV, serving size, category and note. Use source-menu.txt to verify transcription. The categories are House Beer, Cocktails, Guest Taps, Wine and Non-Alcoholic. Preserve the supplied subcategories. Search names and descriptions, combine search with filters, show a result count and provide an empty state and reset. Make all entries reachable. Featured drinks must use their real names and prices from the same data.

Retain the Margarita customization, the Bloodhound brunch restriction, the pitcher note, to-go notes and the peak-hours call-in warning. A blank ABV means unspecified. The mocktail is already a record; do not duplicate it as another product. Display a compact note that prices and availability should be confirmed.

Use the business contact and hours in menu-data.js, including the real telephone link and map search for the full address. Do not infer live opening status. This source provides drinks, not a food menu. Do not invent food, reviews, awards, events, founding stories, reservation availability, ordering, payments or a form backend. Do not present sample actions as completed bookings or transactions.

CRAFT AND DELIVERY
Use semantic HTML, keyboard focus, accessible mobile navigation and readable contrast. Keep imagery local and optimized. Avoid horizontal overflow at 320px and larger. Preserve any existing working menu and video-preview behavior. Add noindex,nofollow metadata for the independent concept. Finish and verify the functioning page; do not publish or send outreach automatically.
```

## Resultado a revisar

La primera pantalla debe dar ganas de explorar; las siguientes deben responder rápido qué beber y cómo llegar. La imagen de ambiente aporta personalidad sin sustituir los datos reales del negocio.
