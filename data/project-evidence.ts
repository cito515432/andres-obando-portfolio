import type { Locale } from "./i18n";
export type EvidenceImage = { src: string; width: number; height: number; kind: "diagram" | "screenshot" | "notebook"; caption: Record<Locale, string>; sourceLang: string; source: { label: string; url: string } };
export type ProjectEvidence = { preview: string | null; images: EvidenceImage[]; sources: { label: string; url: string }[] };

export const projectEvidence: Record<string, ProjectEvidence> = {
  "customer-churn-data-pipeline": {
    "preview": "pipeline-architecture.svg",
    "images": [
      {
        "src": "/images/projects/pipeline-architecture.svg",
        "width": 1600,
        "height": 420,
        "kind": "diagram",
        "caption": {
          "es": "CSV, S3 raw, PySpark en EMR Serverless y capas processed/curated en Parquet; catálogo Glue y consultas Athena para Analytics / ML.",
          "en": "CSV, S3 raw, PySpark on EMR Serverless and processed/curated Parquet layers; Glue catalog and Athena queries for Analytics / ML.",
          "fr": "CSV, S3 raw, PySpark sur EMR Serverless et couches Parquet processed/curated ; catalogue Glue et requêtes Athena pour Analytics / ML.",
          "pt": "CSV, S3 raw, PySpark no EMR Serverless e camadas processed/curated em Parquet; catálogo Glue e consultas Athena para Analytics / ML."
        },
        "sourceLang": "en",
        "source": {
          "label": "pipeline-architecture.svg",
          "url": "https://github.com/cito515432/customer-churn-data-pipeline/blob/d1505aa25fb887590d7ac2151017d1bcfcdac9fb/docs/images/pipeline-architecture.svg"
        }
      }
    ],
    "sources": [
      {
        "label": "README",
        "url": "https://github.com/cito515432/customer-churn-data-pipeline/blob/d1505aa25fb887590d7ac2151017d1bcfcdac9fb/README.md"
      },
      {
        "label": "churn_etl_train.py",
        "url": "https://github.com/cito515432/customer-churn-data-pipeline/blob/d1505aa25fb887590d7ac2151017d1bcfcdac9fb/src/churn_etl_train.py"
      },
      {
        "label": "metrics.csv",
        "url": "https://github.com/cito515432/customer-churn-data-pipeline/blob/d1505aa25fb887590d7ac2151017d1bcfcdac9fb/outputs/metrics.csv"
      },
      {
        "label": "risk_segments.csv",
        "url": "https://github.com/cito515432/customer-churn-data-pipeline/blob/d1505aa25fb887590d7ac2151017d1bcfcdac9fb/outputs/risk_segments.csv"
      }
    ]
  },
  "global-iso-security": {
    "preview": "global-iso-soa-preview.webp",
    "images": [
      {
        "src": "/images/projects/global-iso-architecture.webp",
        "width": 1200,
        "height": 653,
        "kind": "diagram",
        "caption": {
          "es": "Frontend y backend Spring Boot en Render; persistencia TiDB Cloud y microservicio FastAPI. El RPM determinista, la revisión humana y la memoria conservan la trazabilidad.",
          "en": "Frontend and Spring Boot backend on Render; TiDB Cloud storage and a FastAPI microservice. Deterministic RPM, human review and memory preserve traceability.",
          "fr": "Frontend et backend Spring Boot sur Render ; stockage TiDB Cloud et microservice FastAPI. RPM déterministe, validation humaine et mémoire assurent la traçabilité.",
          "pt": "Frontend e backend Spring Boot no Render; persistência TiDB Cloud e microserviço FastAPI. RPM determinístico, revisão humana e memória mantêm a rastreabilidade."
        },
        "sourceLang": "es",
        "source": {
          "label": "global-iso-architecture.png",
          "url": "https://github.com/cito515432/global-iso-security/blob/4cf9580e792bb2750ff2788d154b184e3910fd2a/docs/images/global-iso-architecture.png"
        }
      },
      {
        "src": "/images/projects/global-iso-soa-preview.webp",
        "width": 1200,
        "height": 540,
        "kind": "screenshot",
        "caption": {
          "es": "SoA de la aplicación con organización y usuario demo: aplicabilidad, implementación, contexto, evidencias y riesgos por control.",
          "en": "Application SoA with a demo organization and user: applicability, implementation, context, evidence and risk per control.",
          "fr": "SoA de l’application avec organisation et utilisateur de démonstration : applicabilité, mise en œuvre, contexte, preuves et risques par contrôle.",
          "pt": "SoA da aplicação com organização e usuário de demonstração: aplicabilidade, implementação, contexto, evidências e riscos por controle."
        },
        "sourceLang": "es",
        "source": {
          "label": "global-iso-soa-preview.png",
          "url": "https://github.com/cito515432/global-iso-security/blob/4cf9580e792bb2750ff2788d154b184e3910fd2a/docs/images/global-iso-soa-preview.png"
        }
      },
      {
        "src": "/images/projects/global-iso-rpm-ml-preview.webp",
        "width": 1200,
        "height": 541,
        "kind": "screenshot",
        "caption": {
          "es": "El portal muestra RPM Media (38/100) y ML Alta (50 % estimado), junto con el aviso de revisión humana. Es un ejemplo sintético de discrepancia; ese 50 % no es la métrica de validación humana.",
          "en": "The portal shows Medium RPM (38/100) and High ML (50% estimated), with a human-review alert. This is a synthetic disagreement example; that 50% is not the human-validation metric.",
          "fr": "Le portail affiche RPM Moyen (38/100) et ML Élevé (50 % estimés), avec une alerte de validation humaine. Cet exemple synthétique illustre un désaccord ; ces 50 % ne sont pas la métrique de validation humaine.",
          "pt": "O portal mostra RPM Média (38/100) e ML Alta (50% estimados), com aviso de revisão humana. É um exemplo sintético de divergência; esses 50% não são a métrica de validação humana."
        },
        "sourceLang": "es",
        "source": {
          "label": "global-iso-rpm-ml-preview.png",
          "url": "https://github.com/cito515432/global-iso-security/blob/4cf9580e792bb2750ff2788d154b184e3910fd2a/docs/images/global-iso-rpm-ml-preview.png"
        }
      }
    ],
    "sources": [
      {
        "label": "README · RPM V2 / validación humana",
        "url": "https://github.com/cito515432/global-iso-security/blob/4cf9580e792bb2750ff2788d154b184e3910fd2a/README.md"
      },
      {
        "label": "INTEGRACION_ML_RPM.md",
        "url": "https://github.com/cito515432/global-iso-security/blob/4cf9580e792bb2750ff2788d154b184e3910fd2a/docs/INTEGRACION_ML_RPM.md"
      },
      {
        "label": "metricas_ml_validacion_humana_80.json",
        "url": "https://github.com/cito515432/global-iso-security/blob/4cf9580e792bb2750ff2788d154b184e3910fd2a/ml-service/model/metricas_ml_validacion_humana_80.json"
      },
      {
        "label": "RpmEngineService.java",
        "url": "https://github.com/cito515432/global-iso-security/blob/4cf9580e792bb2750ff2788d154b184e3910fd2a/backend/src/main/java/com/globalisosecurity/backend/services/RpmEngineService.java"
      }
    ]
  },
  "fc-barcelona-player-performance-ml": {
    "preview": null,
    "images": [],
    "sources": [
      {
        "label": "README",
        "url": "https://github.com/cito515432/fc-barcelona-player-performance-ml/blob/3e9f90160910e85be5bf56560577ac0bab567cee/README.md"
      },
      {
        "label": "modelos.py",
        "url": "https://github.com/cito515432/fc-barcelona-player-performance-ml/blob/3e9f90160910e85be5bf56560577ac0bab567cee/Proyecto/modelos.py"
      },
      {
        "label": "limpiezaytrans.py",
        "url": "https://github.com/cito515432/fc-barcelona-player-performance-ml/blob/3e9f90160910e85be5bf56560577ac0bab567cee/Proyecto/limpiezaytrans.py"
      },
      {
        "label": "app_streamlit.py",
        "url": "https://github.com/cito515432/fc-barcelona-player-performance-ml/blob/3e9f90160910e85be5bf56560577ac0bab567cee/Proyecto/app_streamlit.py"
      }
    ]
  },
  "laptop-price-statistical-analysis": {
    "preview": "price-distribution.webp",
    "images": [
      {
        "src": "/images/projects/price-distribution.webp",
        "width": 721,
        "height": 393,
        "kind": "notebook",
        "caption": {
          "es": "Histograma de Prices con KDE, guardado en 02_regression_models.ipynb (celda 46). Se conserva la escala original; no se asume que sea comparable en moneda con el boxplot.",
          "en": "Prices histogram with KDE, saved in 02_regression_models.ipynb (cell 46). The original scale is preserved; currency comparability with the box plot is not assumed.",
          "fr": "Histogramme Prices avec KDE, enregistré dans 02_regression_models.ipynb (cellule 46). Échelle originale conservée ; aucune équivalence monétaire avec la boîte à moustaches n’est supposée.",
          "pt": "Histograma de Prices com KDE, salvo em 02_regression_models.ipynb (célula 46). A escala original é preservada; não se presume equivalência monetária com o boxplot."
        },
        "sourceLang": "es",
        "source": {
          "label": "price-distribution.png",
          "url": "https://github.com/cito515432/laptop-price-statistical-analysis/blob/5434616d7650f33fd457f1a68c5ef078602ad5e1/docs/images/price-distribution.png"
        }
      },
      {
        "src": "/images/projects/price-boxplot.webp",
        "width": 859,
        "height": 605,
        "kind": "notebook",
        "caption": {
          "es": "Boxplot de Price_euros, guardado en 01_exploratory_analysis.ipynb (celda 24). Muestra dispersión y valores extremos del análisis original.",
          "en": "Price_euros box plot, saved in 01_exploratory_analysis.ipynb (cell 24). It shows dispersion and outliers from the original analysis.",
          "fr": "Boîte à moustaches Price_euros, enregistrée dans 01_exploratory_analysis.ipynb (cellule 24). Elle montre la dispersion et les valeurs extrêmes de l’analyse originale.",
          "pt": "Boxplot de Price_euros, salvo em 01_exploratory_analysis.ipynb (célula 24). Mostra dispersão e valores extremos da análise original."
        },
        "sourceLang": "es",
        "source": {
          "label": "price-boxplot.png",
          "url": "https://github.com/cito515432/laptop-price-statistical-analysis/blob/5434616d7650f33fd457f1a68c5ef078602ad5e1/docs/images/price-boxplot.png"
        }
      }
    ],
    "sources": [
      {
        "label": "README",
        "url": "https://github.com/cito515432/laptop-price-statistical-analysis/blob/5434616d7650f33fd457f1a68c5ef078602ad5e1/README.md"
      },
      {
        "label": "01_exploratory_analysis.ipynb",
        "url": "https://github.com/cito515432/laptop-price-statistical-analysis/blob/5434616d7650f33fd457f1a68c5ef078602ad5e1/notebooks/01_exploratory_analysis.ipynb"
      },
      {
        "label": "02_regression_models.ipynb",
        "url": "https://github.com/cito515432/laptop-price-statistical-analysis/blob/5434616d7650f33fd457f1a68c5ef078602ad5e1/notebooks/02_regression_models.ipynb"
      },
      {
        "label": "03_probability_analysis.ipynb",
        "url": "https://github.com/cito515432/laptop-price-statistical-analysis/blob/5434616d7650f33fd457f1a68c5ef078602ad5e1/notebooks/03_probability_analysis.ipynb"
      }
    ]
  }
};

export const skillEvidence: Record<string, {project:string;slug:string}> = {
  "Python": {
    "project": "Customer Churn",
    "slug": "customer-churn-data-pipeline"
  },
  "PySpark": {
    "project": "Customer Churn",
    "slug": "customer-churn-data-pipeline"
  },
  "AWS": {
    "project": "Customer Churn",
    "slug": "customer-churn-data-pipeline"
  },
  "ETL": {
    "project": "Customer Churn",
    "slug": "customer-churn-data-pipeline"
  },
  "Java": {
    "project": "Global ISO",
    "slug": "global-iso-security"
  },
  "Spring Boot": {
    "project": "Global ISO",
    "slug": "global-iso-security"
  },
  "FastAPI": {
    "project": "Global ISO",
    "slug": "global-iso-security"
  },
  "SQL": {
    "project": "Global ISO",
    "slug": "global-iso-security"
  },
  "MySQL": {
    "project": "Global ISO",
    "slug": "global-iso-security"
  },
  "TiDB": {
    "project": "Global ISO",
    "slug": "global-iso-security"
  },
  "Render": {
    "project": "Global ISO",
    "slug": "global-iso-security"
  },
  "APIs REST": {
    "project": "Global ISO",
    "slug": "global-iso-security"
  },
  "Machine Learning": {
    "project": "FC Barcelona",
    "slug": "fc-barcelona-player-performance-ml"
  },
  "Streamlit": {
    "project": "FC Barcelona",
    "slug": "fc-barcelona-player-performance-ml"
  },
  "XGBoost": {
    "project": "FC Barcelona",
    "slug": "fc-barcelona-player-performance-ml"
  },
  "pandas": {
    "project": "Laptop Price",
    "slug": "laptop-price-statistical-analysis"
  },
  "Jupyter": {
    "project": "Laptop Price",
    "slug": "laptop-price-statistical-analysis"
  },
  "Análisis de datos": {
    "project": "Laptop Price",
    "slug": "laptop-price-statistical-analysis"
  }
};
