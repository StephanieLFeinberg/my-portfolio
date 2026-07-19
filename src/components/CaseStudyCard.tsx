import Image from "next/image";
import Link from "next/link";
import type { CaseStudyMeta } from "@/lib/case-studies";

export default function CaseStudyCard({
  caseStudy,
}: {
  caseStudy: CaseStudyMeta;
}) {
  const category = caseStudy.tags?.[0];

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
          {category && (
            <p className="flex items-center gap-2 text-xs font-semibold tracking-wide text-text/60 uppercase">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5"
              >
                <path d="M20.59 13.41 11 3.83a2 2 0 0 0-1.42-.58H4a1 1 0 0 0-1 1v5.58a2 2 0 0 0 .58 1.42l9.59 9.59a2 2 0 0 0 2.83 0l4.59-4.59a2 2 0 0 0 0-2.83Z" />
                <circle cx="7.5" cy="7.5" r="1" fill="currentColor" />
              </svg>
              {category}
            </p>
          )}
          <h3 className="mt-2 font-heading text-2xl font-bold tracking-tight uppercase">
            {caseStudy.title}
          </h3>
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
