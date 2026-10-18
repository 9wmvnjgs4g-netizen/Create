# Publicar la demo en GitHub Pages

El flujo `.github/workflows/pages.yml` publica la web estática cuando se sube un cambio a `main`. También puede ejecutarse desde **Actions → Deploy demo to GitHub Pages → Run workflow**.

La publicación usa GitHub Actions y el token temporal del repositorio. No requiere añadir claves, contratar otro servicio ni instalar dependencias.

## Estado comprobado

El proyecto y este flujo ya se subieron a la rama `main` de `9wmvnjgs4g-netizen/Create`. La primera ejecución sí se inició, pero GitHub rechazó activar Pages con el token de integración: `Create Pages site failed. Resource not accessible by integration`. También informó `Get Pages site failed. Not Found`.

Ejecución comprobada: https://github.com/9wmvnjgs4g-netizen/Create/actions/runs/39122130761

La activación inicial requiere entrar con una cuenta que administre el repositorio en https://github.com/9wmvnjgs4g-netizen/Create/settings/pages y elegir **GitHub Actions** como origen. Después puede ejecutarse de nuevo el flujo desde Actions. No hace falta modificar el diseño ni volver a subir el vídeo.

El entorno de desarrollo pudo subir y comprobar la rama mediante Git y leer el estado público de Actions. La API de GitHub y el dominio de Pages fueron bloqueados por su proxy. Se guardaron `api.github.com` y `9wmvnjgs4g-netizen.github.io` como destinos adicionales en el borrador de configuración del entorno; ese borrador requiere revisión, guardado y publicación en la configuración para aplicarse. Esto es independiente de habilitar Pages en GitHub.

## Primera publicación

1. Sube el proyecto y el flujo de trabajo al repositorio autorizado.
2. En **Settings → Pages**, elige **GitHub Actions** como origen si aún no está seleccionado. El flujo intenta activar esta configuración automáticamente cuando los permisos del repositorio lo permiten.
3. Abre la ejecución en **Actions**. Cuando termine correctamente, el despliegue `github-pages` mostrará la URL pública.
4. Abre esa URL y confirma que cargan el video de portada y el menú, también en un teléfono.

Para `9wmvnjgs4g-netizen/Create`, la dirección habitual del proyecto es `https://9wmvnjgs4g-netizen.github.io/Create/`. Esa dirección solo se considera publicada después de un despliegue correcto y de comprobar que responde; crear estos archivos no activa por sí solo la web.

## Qué se publica

El flujo prepara una carpeta `_site` con `index.html`, las hojas de estilo, los dos archivos JavaScript, `assets/`, `README.md` y `docs/HIGGSFIELD.md`. Así funcionan los enlaces a las notas y a los prompts de la demo. Los scripts de producción, el texto original del menú y los demás documentos no forman parte del sitio publicado.

Las rutas de la web son relativas y funcionan bajo `/Create/`. No hace falta un dominio propio. La demo conserva su identificación como propuesta independiente y sus instrucciones para no indexarla.

## Si GitHub detiene el despliegue

- **Pages desactivado o sin permiso:** un administrador debe habilitar GitHub Pages y seleccionar GitHub Actions en la configuración del repositorio.
- **Repositorio privado:** comprueba que el plan de GitHub permite Pages para ese repositorio. La visibilidad no se cambia automáticamente.
- **Entorno pendiente de aprobación:** revisa las reglas del entorno `github-pages` y aprueba la ejecución desde GitHub si el repositorio exige esa revisión.
- **Actions bloqueado:** el administrador debe permitir los componentes oficiales `actions/checkout`, `actions/configure-pages`, `actions/upload-pages-artifact` y `actions/deploy-pages`.

No se configura un formulario, pagos ni reservas reales mediante esta publicación. El video incluido es la animación original creada para la propuesta; publicar la web no conecta una cuenta de Higgsfield.
