import type { Locale } from "./i18n";

export const localizeDate = (value: string, locale: Locale) => {
  if (locale === "es") return value;
  const months: Record<Locale, Record<string, string>> = {
    es: {}, en: { "Ene.": "Jan.", "Feb.": "Feb.", "Mar.": "Mar.", "Abr.": "Apr.", "May.": "May", "Jun.": "Jun.", "Jul.": "Jul.", "Ago.": "Aug.", "Sep.": "Sep.", "Oct.": "Oct.", "Nov.": "Nov.", "Dic.": "Dec.", actualidad: "present", horas: "hours" }, fr: { "Ene.": "janv.", "Feb.": "févr.", "Mar.": "mars", "Abr.": "avr.", "May.": "mai", "Jun.": "juin", "Jul.": "juil.", "Ago.": "août", "Sep.": "sept.", "Oct.": "oct.", "Nov.": "nov.", "Dic.": "déc.", actualidad: "aujourd’hui", horas: "heures" }, pt: { "Ene.": "jan.", "Feb.": "fev.", "Mar.": "mar.", "Abr.": "abr.", "May.": "mai.", "Jun.": "jun.", "Jul.": "jul.", "Ago.": "ago.", "Sep.": "set.", "Oct.": "out.", "Nov.": "nov.", "Dic.": "dez.", actualidad: "atual", horas: "horas" },
  };
  return Object.entries(months[locale]).reduce((text, [from, to]) => text.replaceAll(from, to), value);
};

export const localizeMetric = (value: string, locale: Locale) => {
  const translations: Record<Locale, Record<string, string>> = { es: {}, en: { "3 fases de desarrollo": "3 development phases", "Proyecto inicial": "Initial project", "Progresión académica": "Academic progression" }, fr: { "3 fases de desarrollo": "3 phases de développement", "Proyecto inicial": "Projet initial", "Progresión académica": "Progression académique" }, pt: { "3 fases de desarrollo": "3 fases de desenvolvimento", "Proyecto inicial": "Projeto inicial", "Progresión académica": "Progressão acadêmica" } };
  return translations[locale][value] ?? value;
};

export const localizeSkill = (value: string, locale: Locale) => {
  const translations: Record<Locale, Record<string, string>> = { es: {}, en: { "Análisis de datos": "Data analysis", Liderazgo: "Leadership", Docencia: "Teaching", Comunicación: "Communication", "Gestión de proyectos": "Project management" }, fr: { "Análisis de datos": "Analyse de données", Liderazgo: "Leadership", Docencia: "Enseignement", Comunicación: "Communication", "Gestión de proyectos": "Gestion de projet" }, pt: { "Análisis de datos": "Análise de dados", Liderazgo: "Liderança", Docencia: "Ensino", Comunicación: "Comunicação", "Gestión de proyectos": "Gestão de projetos" } };
  return translations[locale][value] ?? value;
};
