# The Southern Growl — propuesta web independiente

Demo estática para presentar una dirección creativa a The Southern Growl, Greer, South Carolina. No es la web oficial, no está afiliada al negocio y no se ha publicado. No recibe reservas, pedidos, pagos ni datos de clientes.

## Abrir la demo

Para presentar, descarga `Southern-Growl-DEMO.html` y ábrelo en un navegador normal. Incluye el vídeo, imágenes, estilos, código y menú dentro de un único archivo. No requiere instalación ni paquetes de terceros. Las vistas previas de adjuntos pueden desactivar vídeo o JavaScript; usa el archivo descargado. Más detalles en `docs/DELIVERY.md`.

Para editar, la vía verificada es servir la carpeta:

```sh
cd /workspace/Create
python -m http.server 4173 --bind 127.0.0.1
```

Descarga y extrae el ZIP en tu ordenador y ejecuta el comando desde esa carpeta (adapta la ruta del primer comando). En Windows puede ser necesario usar `py -m http.server 4173`; en macOS, `python3 -m http.server 4173`. Abre el servidor en el navegador de tu propia máquina. Los enlaces locales de vista previa no están habilitados en la interfaz de onboarding de este chat.

El archivo principal es `index.html`. La apertura directa mediante `file://` no pudo verificarse: el Chromium administrado del entorno la bloquea con `ERR_BLOCKED_BY_ADMINISTRATOR`. No se cambiaron sus políticas; la demo sí se verificó mediante HTTP local.

## Qué está implementado

- Dirección visual cinematográfica, vídeo horizontal de 12 segundos en 1920 × 1080, imagen conceptual original, ilustraciones SVG, composición editorial y diseño adaptable.
- Revisión de ambiente: titulares con más carácter, detalles de invitación y una escena amplia con madera, luz ámbar y compañía. `assets/taproom-atmosphere.webp` es una imagen original de un espacio imaginado, identificada como conceptual; no muestra el local real.
- Menú de 63 bebidas transcritas del texto aportado: 29 house beers, 8 cocktails, 10 guest taps, 9 wines y 7 bebidas non-alcoholic. El mocktail se cuenta una sola vez y también aparece en el filtro sin alcohol.
- Búsqueda global por nombre, estilo e ingrediente; categorías; estilos; opciones sin alcohol; carga progresiva de resultados y estado vacío.
- Precios, graduaciones, medidas y notas específicas del texto fuente; teléfono, dirección, horarios y aviso sobre pedidos telefónicos en horas punta.
- Navegación de móvil, navegación por teclado, diálogos accesibles, preferencias de movimiento reducido y enlaces de llamada/direcciones.
- El vídeo incluido se reproduce sin sonido cuando el navegador lo permite; tiene controles de pausa y reproducción y respeta movimiento reducido. La imagen permanece como respaldo si falla la reproducción.
- `Demo studio`: descarga el vídeo incluido o selecciona un MP4 o WebM local para probar otro montaje; puedes restaurar el vídeo original. El archivo elegido no se sube a ningún servidor y la selección desaparece al recargar/cerrar la página.
- Sin rastreadores, fuentes externas ni dependencias de red para renderizar la demo. Las llamadas, Maps y la web del restaurante son enlaces externos elegidos por el visitante.

## Qué NO se ha confirmado

La fuente es el texto de la web pegado por el usuario durante esta conversación. Se conserva como `source-menu.txt`. Las consultas HTTP a las webs oficiales fueron bloqueadas por la red del entorno con 403; no se pudo hacer una auditoría visual ni de rendimiento de la web actual. La fecha original de actualización del menú, existencias, impuestos y vigencia comercial no se conocen.

El texto no incluye un menú de comida. No se han inventado platos, reseñas, reconocimientos, eventos, precios de comida, disponibilidad ni un sistema de reservas.

Las frases de campaña son propuestas creativas. Los vídeos animan una imagen original generada con la herramienta de imagen de esta sesión, mediante movimiento de cámara y edición con FFmpeg. El vertical añade encuadres, fundidos y tipografía. Ambos MP4 son H.264 a 30 fps y no tienen pista de audio. No se generó movimiento físico de la cerveza. La imagen representa un vaso genérico: no es una fotografía del local ni de una cerveza específica del menú. Los SVG también son arte conceptual original.

## Higgsfield y Lovable

- `docs/HIGGSFIELD.md`: prompts completos para imagen, vídeo horizontal y pieza vertical; guía de edición y exportación.
- `docs/LOVABLE.md`: prompt para reconstruir el concepto en Lovable, con el texto fuente incorporado.
- `docs/VIBE-BRIEF.md`: dirección visual actualizada y prompt completo para Lovable.
- `docs/HIGGSFIELD-VIBE.md`: prompts actualizados para el vaso y la nueva escena de ambiente.

Las herramientas de Higgsfield no estuvieron disponibles para ejecutar una generación en esta sesión, incluso después de que el usuario mencionara el plugin. No se utilizaron credenciales ni créditos de esa cuenta. Los vídeos entregados se crearon localmente y ya están incluidos en la demo. Los prompts permiten preparar una versión posterior en Higgsfield. Un vídeo nuevo elegido en `Demo studio` es temporal; para incorporarlo permanentemente, sustituye `assets/growl-hero.mp4` y reconstruye el HTML con `python3 scripts/build-demo.py`.

## Antes de una publicación comercial

Obtener la revisión del negocio; confirmar precios, menú, horarios, permisos de marca y activos; sustituir arte conceptual cuando deba representar productos reales; aprobar enlaces y revisar necesidades de edición del menú. Un CMS, sincronización de inventario, e-commerce, reservas, pagos, analítica y hosting de producción se presupuestan e implementan por separado si se acuerdan. No hay un backend escondido ni integraciones de producción simuladas.

## Archivos

`index.html`, `styles.css`, `app.js`, `menu-data.js`, `assets/`, `docs/`, `scripts/` y `source-menu.txt`. `VERIFICATION.md` registra las comprobaciones realizadas y sus límites. La entrega incluye `Southern-Growl-DEMO.html` y `southern-growl-promo-vertical.mp4` (1080 × 1920, 15 segundos).
