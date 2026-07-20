import Image from "next/image";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import CaseStudyPasswordGate from "@/components/CaseStudyPasswordGate";
import { isCaseStudyUnlocked } from "@/lib/case-study-access";
import { getCaseStudyMeta, getPublishedCaseStudies } from "@/lib/case-studies";

function renderInline(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

function renderRichText(text: string) {
  return text
    .trim()
    .split(/\n\s*\n/)
    .map((block, i) => {
      const lines = block
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);
      const bulletStart = lines.findIndex((line) => line.startsWith("- "));
      const isList = bulletStart === 0;
      const isLeadInList =
        bulletStart > 0 &&
        lines.slice(bulletStart).every((line) => line.startsWith("- "));

      if (isList || isLeadInList) {
        const leadLines = isList ? [] : lines.slice(0, bulletStart);
        const bulletLines = isList ? lines : lines.slice(bulletStart);

        return (
          <div key={i} className="mt-4">
            {leadLines.map((line, j) => (
              <p key={j} className="font-body text-lg text-text">
                {renderInline(line)}
              </p>
            ))}
            <ul className="mt-2 list-disc space-y-2 pl-5 font-body text-lg">
              {bulletLines.map((line, j) => (
                <li key={j}>{renderInline(line.slice(2))}</li>
              ))}
            </ul>
          </div>
        );
      }

      return (
        <p key={i} className="mt-4 font-body text-lg text-text">
          {renderInline(block)}
        </p>
      );
    });
}

export function generateStaticParams() {
  return getPublishedCaseStudies().map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const meta = getCaseStudyMeta(slug);
  return { title: meta.title, description: meta.summary };
}

const LOREM_SHORT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const LOREM_LONG =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const PROCESS_SECTIONS = [
  {
    key: "discover",
    label: "Discover",
    fallbackHeading: "Understanding the problem",
    bg: "bg-white",
  },
  {
    key: "define",
    label: "Define",
    fallbackHeading: "Framing the opportunity",
    bg: "bg-bg-primary",
  },
  {
    key: "develop",
    label: "Develop",
    fallbackHeading: "Exploring solutions",
    bg: "bg-white",
  },
  {
    key: "deliver",
    label: "Deliver",
    fallbackHeading: "Shipping and impact",
    bg: "bg-bg-primary",
  },
] as const;

export default async function CaseStudyPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;

  if (!getPublishedCaseStudies().some((caseStudy) => caseStudy.slug === slug)) {
    notFound();
  }

  const meta = getCaseStudyMeta(slug);

  if (meta.passwordProtected && !(await isCaseStudyUnlocked(slug))) {
    const searchParams = await props.searchParams;
    return (
      <CaseStudyPasswordGate
        slug={slug}
        title={meta.title}
        showError={searchParams?.error === "1"}
      />
    );
  }

  const overviewParagraphs = meta.overview
    ? meta.overview.trim().split(/\n\s*\n/)
    : [LOREM_LONG];

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 h-dvh bg-linear-to-b from-accent-sage/12 to-35% to-bg-primary"
      />
      <section>
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
          <Button
            href="/#selected-work"
            variant="ghost"
            size="medium"
            className="gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            All projects
          </Button>
          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              {meta.image && (
                <Image
                  src={meta.image}
                  alt={meta.title}
                  fill
                  className="object-contain"
                />
              )}
            </div>
            <div>
              <p className="eyebrow">
                {meta.year ?? meta.date}
                {meta.role ? ` · ${meta.role}` : ""}
              </p>
              <h1 className="mt-2 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                {meta.title}
              </h1>
              <div className="mt-8 max-w-3xl">
                {overviewParagraphs.map((paragraph, i) => (
                  <p key={i} className="mt-6 font-body text-lg text-text">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <dl className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <dt className="eyebrow text-sm">Role</dt>
              <dd className="mt-1 font-body">{meta.roleDetail ?? LOREM_SHORT}</dd>
            </div>
            <div>
              <dt className="eyebrow text-sm">Product</dt>
              <dd className="mt-1 font-body">{meta.product ?? LOREM_SHORT}</dd>
            </div>
            <div>
              <dt className="eyebrow text-sm">Team</dt>
              <dd className="mt-1 font-body">{meta.team ?? LOREM_SHORT}</dd>
            </div>
          </dl>
        </div>
      </section>

      {PROCESS_SECTIONS.map((section) => {
        const metaRecord = meta as unknown as Record<
          string,
          string | undefined
        >;
        const heading =
          metaRecord[`${section.key}Heading`] ?? section.fallbackHeading;
        const body = metaRecord[`${section.key}Body`] ?? LOREM_LONG;

        return (
          <section key={section.label} className={section.bg}>
            <div className="mx-auto max-w-3xl px-4 py-24 md:px-10 lg:px-20">
              <p className="eyebrow">{section.label}</p>
              <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight">
                {heading}
              </h2>
              {renderRichText(body)}
            </div>
          </section>
        );
      })}
    </>
  );
}
