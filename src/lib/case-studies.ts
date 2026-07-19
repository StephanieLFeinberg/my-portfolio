import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CASE_STUDIES_DIR = path.join(process.cwd(), "src/content/case-studies");

export type CaseStudyFrontmatter = {
  title: string;
  summary: string;
  date: string;
  year?: string;
  role?: string;
  tags?: string[];
  image?: string;
  previewBg?: string;
};

export type CaseStudyMeta = CaseStudyFrontmatter & { slug: string };

export function getCaseStudySlugs(): string[] {
  return fs
    .readdirSync(CASE_STUDIES_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getCaseStudyMeta(slug: string): CaseStudyMeta {
  const filePath = path.join(CASE_STUDIES_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data } = matter(raw);
  return { slug, ...(data as CaseStudyFrontmatter) };
}

export function getAllCaseStudies(): CaseStudyMeta[] {
  return getCaseStudySlugs()
    .map(getCaseStudyMeta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
