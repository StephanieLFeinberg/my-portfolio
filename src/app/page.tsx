import Container from "@/components/ui/Container";
import CaseStudyCard from "@/components/CaseStudyCard";
import ScrollDownArrow from "@/components/ScrollDownArrow";
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
          <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center">
            <div className="flex flex-1 flex-col justify-center">
              <h1 className="font-heading text-[52px] font-bold leading-tight tracking-tight sm:text-[64px]">
                <span className="line-mask">
                  <span
                    className="line-reveal"
                    style={{ animationDelay: "0s" }}
                  >
                    A senior product designer blending
                  </span>
                </span>
                <span className="line-mask">
                  <span
                    className="line-reveal"
                    style={{ animationDelay: "0.9s" }}
                  >
                    <span className="font-light italic">empathy</span>,{" "}
                    <span className="font-light italic">clarity</span>, and{" "}
                    <span className="font-light italic">impact</span>.
                  </span>
                </span>
              </h1>
            </div>
            <ScrollDownArrow />
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
