import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import {
  getAllCaseStudies,
  getCaseStudyMeta,
  getCaseStudySlugs,
} from "@/lib/case-studies";

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const meta = getCaseStudyMeta(slug);
  return { title: meta.title, description: meta.summary };
}

export default async function CaseStudyPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;

  if (!getAllCaseStudies().some((caseStudy) => caseStudy.slug === slug)) {
    notFound();
  }

  const meta = getCaseStudyMeta(slug);
  const { default: CaseStudyContent } = await import(
    `@/content/case-studies/${slug}.mdx`
  );

  return (
    <Container>
      <article className="mx-auto max-w-3xl">
        <header className="mb-10">
          <p className="text-xs uppercase tracking-wide text-text/60">
            {meta.year ?? meta.date}
            {meta.role ? ` · ${meta.role}` : ""}
          </p>
          <h1 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            {meta.title}
          </h1>
          <p className="mt-4 text-lg text-text/80">{meta.summary}</p>
        </header>
        <div className="prose prose-headings:font-heading max-w-none">
          <CaseStudyContent />
        </div>
      </article>
    </Container>
  );
}
