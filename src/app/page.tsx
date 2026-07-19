import Container from "@/components/ui/Container";
import CaseStudyCard from "@/components/CaseStudyCard";
import { getPublishedCaseStudies } from "@/lib/case-studies";

export default function Home() {
  const featured = getPublishedCaseStudies().slice(0, 4);

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 h-dvh bg-linear-to-b from-accent-sage/12 to-35% to-bg-primary"
      />
      <Container transparent>
        <section className="flex min-h-[70vh] flex-col">
          <div className="flex w-full max-w-4xl flex-1 flex-col">
            <div className="flex flex-1 flex-col justify-center">
              <p className="text-lg text-text">
                Hi, I&apos;m Stephanie Feinberg!
              </p>
              <h1 className="mt-4 font-heading text-5xl font-bold leading-tight sm:text-6xl">
                A senior product designer blending empathy, clarity, and
                impact.
              </h1>
            </div>
            <a
              href="#selected-work"
              aria-label="Scroll to selected work"
              className="mb-8 inline-block w-fit animate-point-down text-brand-brown transition-transform hover:translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-12 w-12"
              >
                <line x1="12" y1="4" x2="12" y2="19" />
                <polyline points="6 13 12 19 18 13" />
              </svg>
            </a>
          </div>
        </section>

        {featured.length > 0 && (
          <section id="selected-work" className="mt-20 scroll-mt-10">
            <h2 className="font-heading text-2xl font-semibold tracking-tight">
              Selected work
            </h2>
            <div className="mt-6 grid gap-8 lg:grid-cols-2">
              {featured.map((caseStudy, index) => (
                <CaseStudyCard
                  key={caseStudy.slug}
                  caseStudy={caseStudy}
                  index={index}
                />
              ))}
            </div>
          </section>
        )}
      </Container>
    </>
  );
}
