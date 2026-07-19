import Image from "next/image";
import Link from "next/link";
import type { CaseStudyMeta } from "@/lib/case-studies";

export default function CaseStudyCard({
  caseStudy,
}: {
  caseStudy: CaseStudyMeta;
}) {
  const year = caseStudy.year;

  return (
    <Link
      href={`/work/${caseStudy.slug}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div
        className="relative flex aspect-[3/2] items-center justify-center bg-bg-secondary text-sm text-text/40 transition-transform duration-300 group-hover:scale-105"
        style={
          caseStudy.previewBg
            ? { backgroundColor: caseStudy.previewBg }
            : undefined
        }
      >
        {caseStudy.image ? (
          <Image
            src={caseStudy.image}
            alt={caseStudy.title}
            fill
            className="object-contain p-6"
          />
        ) : (
          "Project preview placeholder"
        )}
      </div>
      <div className="flex items-center justify-between gap-4 p-6">
        <div>
          {year && <p className="eyebrow">{year}</p>}
          <h3 className="mt-2 font-heading text-2xl font-bold tracking-tight uppercase">
            {caseStudy.title}
          </h3>
          {caseStudy.summary && (
            <p className="mt-2 font-body text-text">{caseStudy.summary}</p>
          )}
        </div>
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-brown text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
