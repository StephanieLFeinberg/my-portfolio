import Image from "next/image";
import Link from "next/link";
import type { CaseStudyMeta } from "@/lib/case-studies";

const CARD_PALETTE = ["#F5F5F2", "#E8EBE3", "#DAE2E9", "#E9E5DE"];

const GRAIN_URL =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

export default function CaseStudyCard({
  caseStudy,
  index = 0,
}: {
  caseStudy: CaseStudyMeta;
  index?: number;
}) {
  const year = caseStudy.year;
  const backgroundColor = CARD_PALETTE[index % CARD_PALETTE.length];

  return (
    <Link
      href={`/work/${caseStudy.slug}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div
        className="relative flex aspect-[3/2] items-center justify-center overflow-hidden text-sm text-text/40 transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundColor }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `url("${GRAIN_URL}")`,
            backgroundRepeat: "repeat",
          }}
        />
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
