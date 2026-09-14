export function linkEvent(href, explicit) {
  if (["language_select", "project_evidence_open"].includes(explicit)) return explicit;
  if (href.startsWith("mailto:")) return "email_click";
  if (href.includes("github.com")) return "github_click";
  if (href.includes("linkedin.com")) return "linkedin_click";
  if (href.includes("/documents/cv/")) return "cv_download";
  if (href.includes("/case-studies/")) return "case_study_open";
  return "";
}
