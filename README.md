# Andrés Obando — Professional Portfolio

Portafolio profesional orientado a oportunidades de **Data Engineering** e **Ingeniería de Sistemas**. Reúne proyectos, experiencia, stack técnico, hoja de vida y credenciales verificables en una experiencia responsive y enfocada en reclutadores.

## Objetivo del sitio

La web está diseñada para responder rápidamente cuatro preguntas:

1. ¿Quién es Andrés y qué tipo de rol busca?
2. ¿Qué tecnologías ha aplicado realmente?
3. ¿Qué proyectos demuestran esas habilidades?
4. ¿Cómo puede un reclutador contactarlo o revisar su CV/GitHub?

## Stack

- Next.js 16
- React 19
- TypeScript
- CSS responsive sin framework visual adicional
- Lucide React para iconografía
- Render para despliegue

## Estructura principal

- `app/` — layout, metadata SEO, Open Graph y página principal
- `components/portfolio-site.tsx` — experiencia principal del portafolio
- `data/portfolio.ts` — proyectos, experiencia, habilidades y certificados
- `public/documents/` — CV y certificados públicos
- `public/images/` — retrato y previews de certificados
- `render.yaml` — configuración de despliegue en Render

## Desarrollo local

Requisitos:

- Node.js 22.13 o superior
- npm

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Verificación antes de publicar

```bash
npm run lint
npm run build
```

## Actualizar el contenido

La mayor parte del contenido profesional está centralizada en `data/portfolio.ts`.

- Para agregar o editar un proyecto, modifique `projects`.
- Para actualizar experiencia, modifique `experience`.
- Para cambiar el stack, modifique `skillGroups`.
- Para agregar una credencial, modifique `certificates` y añada sus archivos públicos en `public/`.

Los certificados marcados con `priority: true` aparecen primero en la vista curada; el usuario puede expandir la colección completa.

## Privacidad

Los documentos incluidos son copias preparadas para publicación. Antes de incorporar nuevos PDFs o imágenes, revise que no contengan números de identificación, teléfonos de terceros, firmas, direcciones, credenciales, tokens o metadatos sensibles.

## Despliegue en Render

El repositorio incluye `render.yaml`.

1. Conecte el repositorio de GitHub en Render.
2. Seleccione **New > Blueprint**.
3. Elija `cito515432/andres-obando-portfolio`.
4. Confirme la creación del servicio.

Render ejecutará:

- Build: `npm install --no-audit --no-fund && npm run build`
- Start: `npm start`
- Health check: `/`
- Auto deploy: cada commit a la rama conectada

No se requieren variables de entorno para la versión actual.

## Enlaces

- GitHub: https://github.com/cito515432
- LinkedIn: https://www.linkedin.com/in/andres-obando-08095b203
