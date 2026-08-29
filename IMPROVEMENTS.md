# Portfolio 10/10 — ajustes realizados

Esta versión prioriza claridad para reclutadores de Data Engineering e Ingeniería de Sistemas.

## Cambios principales

- Hero reescrito con foco explícito en Data Engineering, stack y disponibilidad desde noviembre de 2026.
- Resumen rápido para reclutadores: objetivo, disponibilidad, modalidad e inglés B2.
- Marca personal unificada como “Data Engineering · Systems Engineering”.
- Customer Churn Data Pipeline pasa a ser el proyecto principal del portafolio.
- Solo cuatro proyectos aparecen como destacados; los demás quedan como evidencia adicional en GitHub.
- Tarjetas de proyecto incorporan foco, métrica y evidencia de lo que demuestra cada trabajo.
- Sección de habilidades renombrada como “Stack con evidencia”.
- Certificados curados: la vista inicial muestra solo los más relevantes y permite expandir las 15 credenciales.
- Contacto reescrito con un CTA orientado a prácticas profesionales.
- SEO mejorado con metadata, Twitter/Open Graph y datos estructurados Schema.org.
- Imagen social Open Graph generada por Next.js.
- Arquitectura simplificada: se retiró el scaffold no utilizado de Vinext/Cloudflare/Drizzle/shadcn.
- El proyecto queda como Next.js estándar, más fácil de mantener y desplegar en Render.
- Configuración de Render actualizada para despliegue automático.
- Accesibilidad reforzada con foco visible, navegación por anclas y preferencia de movimiento reducido.
- README reconstruido para que el propio repositorio también funcione como pieza de portafolio.

## Evolución internacional

- Rutas estáticas `/`, `/en/`, `/fr/` y `/pt/` con componentes compartidos y traducciones locales.
- Casos de estudio verificables para Customer Churn, Global ISO Security, FC Barcelona Player Performance ML y Laptop Price Statistical Analysis.
- Sitemap, robots, canonical, hreflang y metadata localizada.
- Workflow gratuito de GitHub Actions para validar instalación, lint, Static Export y `out/index.html`.
- Analítica opcional preparada mediante `NEXT_PUBLIC_GA_ID`, desactivada por defecto.

### Pendientes honestos

- Medir Lighthouse/Core Web Vitals en un navegador de producción; el proyecto no afirma resultados no medidos.
- Separar más contenido estático de `PortfolioSite` para reducir JavaScript del cliente en una iteración posterior; actualmente el estado se limita a menú, filtros y selector de idioma para preservar estabilidad.
- Incorporar métricas finales de Barcelona y el dataset autorizado de Laptop Price únicamente cuando estén disponibles.
- Evaluar orquestación, data quality, cargas incrementales, dbt, particionamiento y data warehouse como mejoras futuras, no como experiencia actual.
