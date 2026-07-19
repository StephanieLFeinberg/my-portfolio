import type { Metadata } from "next";
import CaseStudyCard from "@/components/CaseStudyCard";
import Container from "@/components/ui/Container";
import { getAllCaseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies and selected projects.",
};

export default function WorkIndexPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <Container>
      <h1 className="font-heading text-3xl font-semibold tracking-tight">
        Work
      </h1>
      <p className="mt-2 text-text/80">Selected case studies.</p>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {caseStudies.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
        ))}
      </div>
    </Container>
  );
}
