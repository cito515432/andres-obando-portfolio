# Andrés Obando — International Professional Portfolio

Portafolio profesional orientado a oportunidades de **Data Engineering** e **Ingeniería de Sistemas**. Reúne proyectos, experiencia, stack técnico, hoja de vida y credenciales verificables en una experiencia responsive y enfocada en reclutadores.

## Objetivo del sitio

La web está diseñada para responder rápidamente cuatro preguntas:

1. ¿Quién es Andrés y qué tipo de rol busca?
2. ¿Qué tecnologías ha aplicado realmente?
3. ¿Qué proyectos demuestran esas habilidades?
4. ¿Cómo puede un reclutador contactarlo o revisar su CV/GitHub?

## Stack y arquitectura

- Next.js 16
- React 19
- TypeScript
- CSS responsive sin framework visual adicional
- Lucide React para iconografía
- Render para despliegue

La aplicación usa componentes compartidos y diccionarios locales en `data/i18n.ts`. Next.js genera HTML estático para español, inglés, francés y portugués; no hay servidor Node ni traducción externa. El selector reutilizable conserva la ruta, el caso de estudio y el hash al cambiar de idioma.

## Estructura principal

- `app/` — layout, metadata SEO, Open Graph y página principal
- `components/portfolio-site.tsx` — experiencia principal del portafolio
- `data/portfolio.ts` — proyectos, experiencia, habilidades y certificados
- `data/i18n.ts` — traducciones y rutas por idioma
- `data/case-studies.ts` — casos de estudio técnicos verificados
- `components/language-switcher.tsx` — selector accesible y contextual de idioma
- `components/case-study-header.tsx` — encabezado ligero para casos de estudio
- `app/[locale]/` — páginas localizadas generadas durante el build
- `app/case-studies/` — casos de estudio en español
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
test -f out/index.html
```

## Actualizar el contenido

La mayor parte del contenido profesional está centralizada en `data/portfolio.ts`.

- Para agregar o editar un proyecto, modifique `projects` y su bloque localizado en `data/i18n.ts`.
- Para agregar un idioma, añada el código a `Locale`, `locales`, `localeMeta` y una entrada completa en `copy`.
- Para agregar un caso de estudio, añádalo a `data/case-studies.ts`; se generará en los cuatro idiomas.
- Para actualizar experiencia, modifique `experience`.
- Para cambiar el stack, modifique `skillGroups`.
- Para agregar una credencial, modifique `certificates` y añada sus archivos públicos en `public/`.

Los certificados marcados con `priority: true` aparecen primero en la vista curada; el usuario puede expandir la colección completa.

## Privacidad

Los documentos incluidos son copias preparadas para publicación. Antes de incorporar nuevos PDFs o imágenes, revise que no contengan números de identificación, teléfonos de terceros, firmas, direcciones, credenciales, tokens o metadatos sensibles.

## Despliegue en Render Static Site

El repositorio incluye `render.yaml`.

1. Conecte el repositorio de GitHub en Render.
2. Seleccione **New > Blueprint**.
3. Elija `cito515432/andres-obando-portfolio`.
4. Confirme la creación del servicio.

La cadena de publicación es `GitHub → Next.js Static Export → out/ → Render Static Site`.

Render ejecutará:

- Build: `npm install --no-audit --no-fund && npm run build`
- Publish directory: `./out`
- Auto deploy: cada commit a la rama conectada

No se requieren variables de entorno. La analítica es opcional: `NEXT_PUBLIC_GA_ID` debe ser un Measurement ID real y permanece desactivada si no existe; antes de activarla deben revisarse consentimiento y privacidad.

## CI

`.github/workflows/validate.yml` ejecuta `npm ci`, lint, build y verifica `out/index.html` en pushes relevantes y pull requests hacia `main`. Render conserva la responsabilidad del despliegue.

## Límites honestos y mejoras futuras

El repositorio de FC Barcelona no publica métricas finales verificables; el caso de estudio no afirma un modelo ganador. El dataset de Laptop Price tampoco está incluido, por lo que no se muestran tamaños ni métricas. Mejoras futuras posibles: cargas incrementales, data quality, orquestación, dbt, CI más amplio, particionamiento y data warehouse, únicamente cuando exista evidencia de implementación.

## Enlaces

- GitHub: https://github.com/cito515432
- LinkedIn: https://www.linkedin.com/in/andres-obando-08095b203
