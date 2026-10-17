import Image from "next/image";
import { ExternalLink, FileText } from "lucide-react";
import type { Recognition } from "@/data/portfolio";
import type { Copy, Locale } from "@/data/i18n";
import { localizeDate } from "@/data/format";

export function RecognitionGallery({
  locale,
  recognitions,
  labels,
}: {
  locale: Locale;
  recognitions: Recognition[];
  labels: Copy["recognitions"];
}) {
  return (
    <div className="recognitions-grid">
      {recognitions.map((recognition) => {
        const item = labels.items[recognition.id];
        return (
          <article className="recognition-card" key={recognition.id}>
            <a
              className="recognition-preview"
              href={recognition.fullImage}
              target="_blank"
              rel="noreferrer"
              aria-label={`${labels.openImage}: ${item.title}`}
            >
              <Image
                src={recognition.image}
                alt={`${item.title} — ${recognition.issuer}`}
                width={720}
                height={recognition.id === "kodland-tutor" ? 498 : 1019}
              />
              <span>
                <ExternalLink size={17} aria-hidden="true" />
                {labels.openImage}
              </span>
            </a>

            <div className="recognition-copy">
              <div className="recognition-meta">
                <span>{labels.awardLabel}</span>
                {recognition.date && <time>{localizeDate(recognition.date, locale)}</time>}
              </div>
              <h3>{item.title}</h3>
              <p className="recognition-issuer">{recognition.issuer}</p>
              <p>{item.description}</p>
              <div className="recognition-links">
                {recognition.document ? (
                  <a href={recognition.document} target="_blank" rel="noreferrer">
                    <FileText size={15} aria-hidden="true" />
                    {labels.viewDocument}
                  </a>
                ) : (
                  <a href={recognition.fullImage} target="_blank" rel="noreferrer">
                    <ExternalLink size={15} aria-hidden="true" />
                    {labels.openImage}
                  </a>
                )}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
