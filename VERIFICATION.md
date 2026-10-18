# Verificación de la demo

## Resultado

43 comprobaciones funcionales y 18 comprobaciones adicionales de vídeo y entrega portátil completadas mediante Playwright y Chromium, usando servidores HTTP locales. Sin errores JavaScript ni fallos de recursos locales en la ejecución funcional. No fue una auditoría exhaustiva de accesibilidad, seguridad o compatibilidad entre todos los navegadores.

## Comprobaciones realizadas

- 63 registros únicos y acceso a todos mediante paginación; categorías 29/8/10/9/7.
- Búsqueda global por ingredientes, nombres con y sin acentos, estado sin resultados y restablecimiento.
- Filtros por estilo y sin alcohol; este último incluye mocktail y agua con ABV 0.0%.
- Navegación desde tarjetas destacadas al producto correcto; precio y medida de ejemplo.
- Restricción de brunch de Bloodhound y suplemento de Margarita conservados.
- Teléfono exacto y siete filas de horarios; `noindex` presente.
- Diálogos, cierre con Escape, navegación móvil, restauración de foco y pestañas por teclado.
- Carga de un WebM local real, reproducción y pausa; rechazo de tipo de archivo no admitido; restablecimiento del vídeo incluido y ausencia de persistencia del archivo elegido tras recargar.
- Preferencia de movimiento reducido: el vídeo no arranca automáticamente.
- Sin desbordamiento horizontal a 320, 360, 375, 390, 768, 1024, 1440 y 1920 píxeles.
- Capturas de escritorio, móvil y página completa.

Además, una revisión independiente cotejó las 63 bebidas con el texto suministrado y confirmó que `source-menu.txt` coincide byte por byte con el adjunto de 5.769 bytes. Las comprobaciones de sintaxis de JavaScript se ejecutaron con Node.

## Vídeo y HTML portátil

- FFprobe confirmó H.264 a 30 fps: horizontal 1920 × 1080 y 12 segundos; vertical 1080 × 1920 y 15 segundos. Ambos carecen de pista de audio.
- Se inspeccionaron fotogramas del vídeo vertical y capturas de la web en escritorio y móvil.
- Autoplay silenciado del vídeo incluido; pausa/reanudación; cambio de preferencia de movimiento reducido.
- Archivo vacío rechazado; archivo corrupto restaura el vídeo incluido; vídeo no disponible conserva la imagen y ofrece reintento.
- El HTML portátil decodifica y reproduce el vídeo incorporado; búsqueda, 63 registros y ausencia de desbordamiento a 320, 390 y 1440 píxeles.
- Se verificó la descarga del MP4 incorporado desde Demo studio.
- El HTML portátil hizo una única petición HTTP, la del propio documento. Todos los recursos de renderizado están incorporados.
- Informes de la entrega: `preview/verification.json` (43 comprobaciones) y `preview/motion-review.json` (18 comprobaciones).

## Corregido durante la revisión

Se ajustaron titulares y marca de pie de página en pantallas estrechas, se mejoró el contraste del hero móvil y se sustituyeron símbolos no disponibles por SVG originales.

## Bloqueos y límites

- Abrir `file://` en el Chromium administrado devolvió `ERR_BLOCKED_BY_ADMINISTRATOR`. No se verificó esa vía ni se cambiaron políticas para habilitarla. Utilizar la vía HTTP descrita en README.
- Las webs del negocio y los directorios externos continuaron bloqueados por el proxy con 403. No se auditó su aspecto, rendimiento ni estado actual.
- No se llamó al restaurante, no se verificaron precios actuales, no se publicó la demo y no se generó vídeo en Higgsfield. Sus herramientas no estuvieron disponibles para ejecutar una generación en esta sesión; los MP4 se renderizaron localmente.
- No se probaron pedidos, pagos, reservas, sincronización de inventario ni CMS: esas funciones no forman parte de esta demo.
