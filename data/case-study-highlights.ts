import type { Locale } from "./i18n";

export const caseStudyHighlights: Record<string, Record<Locale, string[]>> = {
  "customer-churn-data-pipeline": {
    "es": [
      "1.000.000 registros",
      "AUC-ROC 0,6838",
      "Accuracy 0,6303",
      "13.463 alto riesgo",
      "PySpark + AWS"
    ],
    "en": [
      "1,000,000 records",
      "AUC-ROC 0.6838",
      "Accuracy 0.6303",
      "13,463 high-risk",
      "PySpark + AWS"
    ],
    "fr": [
      "1 000 000 lignes",
      "AUC-ROC 0,6838",
      "Accuracy 0,6303",
      "13 463 à haut risque",
      "PySpark + AWS"
    ],
    "pt": [
      "1.000.000 registros",
      "AUC-ROC 0,6838",
      "Accuracy 0,6303",
      "13.463 alto risco",
      "PySpark + AWS"
    ]
  },
  "global-iso-security": {
    "es": [
      "93 controles · 5 roles",
      "Spring Boot · TiDB",
      "FastAPI · Random Forest",
      "RPM + validación humana"
    ],
    "en": [
      "93 controls · 5 roles",
      "Spring Boot · TiDB",
      "FastAPI · Random Forest",
      "RPM + human validation"
    ],
    "fr": [
      "93 contrôles · 5 rôles",
      "Spring Boot · TiDB",
      "FastAPI · Random Forest",
      "RPM + validation humaine"
    ],
    "pt": [
      "93 controles · 5 papéis",
      "Spring Boot · TiDB",
      "FastAPI · Random Forest",
      "RPM + validação humana"
    ]
  },
  "fc-barcelona-player-performance-ml": {
    "es": [
      "4 modelos comparados"
    ],
    "en": [
      "4 models compared"
    ],
    "fr": [
      "4 modèles comparés"
    ],
    "pt": [
      "4 modelos comparados"
    ]
  },
  "laptop-price-statistical-analysis": {
    "es": [
      "4 notebooks"
    ],
    "en": [
      "4 notebooks"
    ],
    "fr": [
      "4 notebooks"
    ],
    "pt": [
      "4 notebooks"
    ]
  }
};
