# Portfolio profesional — estado y mejoras realizadas

Esta versión prioriza claridad para reclutadores de Data Engineering, Systems Engineering, Backend y Cloud, sin sacrificar trazabilidad técnica ni accesibilidad.

## Cambios principales

- Hero con foco explícito en Data Engineering, stack, disponibilidad desde noviembre de 2026 e inglés B2.
- Métrica de 1 M contextualizada como evidencia de un pipeline académico con PySpark.
- Marca personal unificada como “Data Engineering · Systems Engineering”.
- Customer Churn Data Pipeline como proyecto principal, con servicios AWS concretos y arquitectura verificable.
- Cuatro proyectos destacados con evidencia real; los proyectos secundarios quedan como soporte adicional en GitHub.
- Casos de estudio escaneables con problema, arquitectura, decisiones, resultados, evidencia, limitaciones y fuentes.
- Global ISO Security actualizado a Spring Boot, TiDB Cloud, FastAPI, RPM determinista, ML experimental, validación humana y memoria RPM.
- Evidencia técnica trazable a commits y hashes mediante `docs/evidence-provenance.json`.
- Modo claro/oscuro accesible, con preferencia del sistema, persistencia manual y bootstrap previo al primer paint.
- Componentes interactivos separados del contenido estático: header, navegación móvil, tema, certificados y analítica.
- Stack con enlaces a proyectos que demuestran el uso de tecnologías concretas.
- Certificados curados para priorizar datos, bases de datos, BI, inglés y desarrollo; títulos oficiales conservados con traducción de apoyo en idiomas internacionales.
- Contacto orientado a prácticas profesionales y equipos internacionales.
- SEO con canonical, hreflang, `x-default`, sitemap, robots, Schema.org y metadata localizada.
- Tarjeta social principal neutral para funcionar correctamente en ES/EN/FR/PT y tarjetas propias por caso de estudio.
- Configuración de Render Static Site con despliegue automático desde `main`.
- Accesibilidad reforzada con skip link, foco visible, navegación semántica, objetivos táctiles, `aria-current` y `prefers-reduced-motion`.
- README preparado para que el repositorio también funcione como pieza de portafolio.

## Validación automatizada

La rama de evidencia y temas se validó con:

- `npm ci`
- `npm run lint`
- `npm run build`
- TypeScript
- Static Export de 26 páginas
- 16 casos de estudio localizados
- 20 rutas principales ES/EN/FR/PT
- 38 pruebas automatizadas
- GitHub Actions

Las pruebas cubren contraste, preferencia claro/oscuro, almacenamiento bloqueado, persistencia manual, menú móvil, retorno de foco, selector de idioma, filtros de certificados, rutas estáticas y analítica desactivada sin configuración.

## Pendientes honestos

- Medir Lighthouse y Core Web Vitals reales en producción; el proyecto no afirma puntuaciones no medidas.
- Incorporar métricas finales verificables del proyecto FC Barcelona solo cuando el repositorio fuente las publique de forma estable.
- Publicar un dataset o muestra autorizada del proyecto Laptop Price antes de afirmar tamaños, coeficientes o reproducibilidad completa.
- Evaluar mejoras futuras de Data Engineering —orquestación, data quality, cargas incrementales, dbt, particionamiento y data warehouse— únicamente cuando existan implementaciones reales que puedan demostrarse.
- Mantener dependencias y GitHub Actions actualizadas mediante rondas de mantenimiento controladas y validadas por CI.
