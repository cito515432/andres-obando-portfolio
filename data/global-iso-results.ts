import type { Locale } from "./i18n";

// README thesis summary for RPM/human agreement; published metrics JSON for ML.
export const globalIsoResults: Record<Locale, [string, string, string][]> = {
  es: [
    ["RPM V2", "96,8 % · 484/500", "Concordancia con el diseño de 500 escenarios; 20 organizaciones sintéticas, 5 sectores, 92 controles."],
    ["Validación humana", "50 % · 40/80", "Coincidencia exacta en 80 casos; un evaluador formal."],
    ["Random Forest", "Accuracy 72,5 % · F1 macro 68,3 % · Kappa 0,605", "Validación cruzada agrupada por organización sobre 80 casos. Modelo desplegado experimentalmente."],
    ["Extra Trees", "F1 macro 68,85 %", "Mayor F1 macro en la comparación; RF es el modelo seleccionado para el despliegue."],
  ],
  en: [
    ["RPM V2", "96.8% · 484/500", "Agreement with the design of 500 scenarios; 20 synthetic organizations, 5 sectors, 92 controls."],
    ["Human validation", "50% · 40/80", "Exact agreement across 80 cases; one formal evaluator."],
    ["Random Forest", "Accuracy 72.5% · Macro F1 68.3% · Kappa 0.605", "Cross-validation grouped by organization across 80 cases. Experimentally deployed model."],
    ["Extra Trees", "Macro F1 68.85%", "Highest macro F1 in the comparison; RF was selected for deployment."],
  ],
  fr: [
    ["RPM V2", "96,8 % · 484/500", "Accord avec le protocole de 500 scénarios ; 20 organisations synthétiques, 5 secteurs, 92 contrôles."],
    ["Validation humaine", "50 % · 40/80", "Accord exact sur 80 cas ; un évaluateur formel."],
    ["Random Forest", "Accuracy 72,5 % · F1 macro 68,3 % · Kappa 0,605", "Validation croisée groupée par organisation sur 80 cas. Modèle déployé expérimentalement."],
    ["Extra Trees", "F1 macro 68,85 %", "Meilleur F1 macro de la comparaison ; RF a été retenu pour le déploiement."],
  ],
  pt: [
    ["RPM V2", "96,8% · 484/500", "Concordância com o desenho de 500 cenários; 20 organizações sintéticas, 5 setores, 92 controles."],
    ["Validação humana", "50% · 40/80", "Coincidência exata em 80 casos; um avaliador formal."],
    ["Random Forest", "Accuracy 72,5% · F1 macro 68,3% · Kappa 0,605", "Validação cruzada agrupada por organização em 80 casos. Modelo implantado experimentalmente."],
    ["Extra Trees", "F1 macro 68,85%", "Maior F1 macro na comparação; RF foi selecionado para implantação."],
  ],
};
