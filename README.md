# Portafolio profesional de Andrés Obando

Portafolio web con hoja de vida, experiencia, proyectos, habilidades, educación y certificados. El contenido está organizado para que sea sencillo de mantener y desplegar en Render.

## Decisión de arquitectura

La primera versión no usa base de datos. Para un portafolio público, los datos cambian poco y se pueden administrar con un único archivo; esto evita costos, credenciales, formularios de administración y mantenimiento innecesario.

- Aplicación: Next.js compatible mediante Vinext
- Contenido profesional: `data/portfolio.ts`
- Página y componentes: `components/portfolio-site.tsx`
- Estilos: `app/globals.css`
- CV público: `public/documents/cv/`
- Certificados públicos: `public/documents/certificates/`
- Vistas previas: `public/images/certificates/`

TiDB se puede incorporar más adelante si se necesita un panel privado para crear, editar y ordenar contenido desde el navegador.

## Privacidad

Los documentos incluidos son copias preparadas para publicación. Se ocultaron identificaciones personales, el teléfono del CV y los datos de contacto de referencias. Los archivos originales no forman parte del proyecto.

Antes de publicar documentos nuevos, revise nombres de terceros, números de identificación, teléfonos, direcciones, firmas, códigos privados y metadatos.

## Desarrollo local

Requisitos:

- Node.js 22.13 o superior
- npm

```bash
npm ci
npm run dev
```

Abra `http://localhost:3000`.

## Verificación

```bash
npm run lint
npm run build
```

## Actualizar información

1. Abra `data/portfolio.ts`.
2. Edite el arreglo correspondiente: `projects`, `experience`, `skillGroups` o `certificates`.
3. Si agrega un certificado, copie el PDF público protegido a `public/documents/certificates/` y su vista previa a `public/images/certificates/`.
4. Ejecute la verificación antes de publicar.

## Publicar en Render

El archivo `render.yaml` ya define un servicio web de Node.js.

1. Suba este proyecto a un repositorio de GitHub.
2. En Render seleccione **New > Blueprint**.
3. Conecte el repositorio.
4. Confirme la creación del servicio.

Render usará:

- Build: `npm ci && npm run build`
- Start: `npm start`
- Health check: `/`

No se requieren variables de entorno para esta versión.

## Enlaces del portafolio

- GitHub: <https://github.com/cito515432>
- LinkedIn: <https://www.linkedin.com/in/andres-obando-08095b203>

