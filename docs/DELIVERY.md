# Presentar la demo de The Southern Growl

## El archivo más sencillo

Descarga `Southern-Growl-DEMO.html` en tu ordenador y ábrelo con Chrome, Edge o Safari. Es una web completa en un solo archivo: contiene el diseño, las imágenes, el menú interactivo y el vídeo de portada. No necesita instalación. Usa un navegador normal; una vista previa de documentos o de adjuntos puede desactivar JavaScript o vídeo.

La reproducción empieza sin sonido si tu navegador permite autoplay. Si muestra la imagen de portada, pulsa **Play film**. Con la preferencia de movimiento reducido activada, el vídeo espera a que decidas reproducirlo.

La apertura por doble clic no pudo probarse en el Chromium administrado de este entorno porque bloquea todas las direcciones `file://`. La verificación aquí se realiza sirviendo el mismo HTML por HTTP. Los archivos están incorporados y la página no necesita peticiones de red para mostrar su contenido; los enlaces de Maps, llamada y web del restaurante requieren las aplicaciones o servicios correspondientes.

## Qué entregar

- `Southern-Growl-DEMO.html`: demo portátil para presentar la web desde un ordenador.
- `southern-growl-promo-vertical.mp4`: pieza vertical para revisar en el móvil o enseñar como propuesta de contenido social.
- `assets/growl-hero.mp4`: vídeo horizontal de portada, incluido también dentro del HTML portátil.
- `southern-growl-demo.zip`: carpeta completa con los archivos editables, notas y prompts. Extráela antes de trabajar con sus archivos.

El vídeo utiliza una imagen conceptual original creada con IA, animada mediante movimiento de cámara y edición. No muestra una grabación del restaurante ni identifica una cerveza concreta del menú. Las herramientas de Higgsfield no estuvieron disponibles en esta sesión y estos archivos no se generaron en una cuenta de Higgsfield. Ambos MP4 se entregan sin audio.

## Una presentación de 60 segundos

1. Abre la portada a pantalla completa y deja avanzar el vídeo unos segundos.
2. Pulsa **Find your next pour**. Busca una bebida, cambia de categoría y muestra el filtro sin alcohol.
3. Ve a **Find us** y enseña cómo un visitante encuentra el teléfono, la dirección y los horarios.
4. Abre el vídeo vertical para mostrar una segunda aplicación de la dirección visual.

Puedes presentarlo así: “Preparé una propuesta independiente para vuestra web. Quería mostrar cómo podría verse una portada más cinematográfica y un menú que se pueda buscar fácilmente desde el móvil. Los datos vienen del texto de vuestra web; antes de publicar confirmaríamos el menú y los materiales con vosotros.”

La propuesta incluye 63 bebidas del texto facilitado. No incluye un menú de comida, reservas conectadas, pedidos, cobros ni gestión de inventario. La decisión sobre el CMS y el mantenimiento del menú se toma con el negocio antes de convertirla en su web oficial.

## Para editar y reconstruir

Modifica los archivos de la carpeta del proyecto y genera otra copia portátil:

```sh
python3 scripts/build-demo.py
```

El script crea `../artifacts/Southern-Growl-DEMO.html` de forma predeterminada. Para elegir otro destino:

```sh
python3 scripts/build-demo.py --output Southern-Growl-DEMO.html
```

La versión editable puede servirse desde su carpeta con `python3 -m http.server 4173`. No necesita paquetes, claves de API ni una cuenta de Higgsfield para funcionar. Los prompts de `HIGGSFIELD.md` permiten producir una futura versión de la pieza con esa herramienta si se desea.
