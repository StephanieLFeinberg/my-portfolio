import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About",
  description: "Background and focus areas.",
};

export default function AboutPage() {
  return (
    <Container>
      <div className="max-w-3xl">
        <h1 className="font-heading text-3xl font-semibold tracking-tight">
          About
        </h1>
        <p className="mt-4 text-text/80">
          5+ years of experience simplifying complexity for B2B2C products
          to drive business impact. Passionate about data-driven
          approaches to delight users and make their lives easier. Take a
          look at my portfolio to see how I bridge business strategy with
          user needs!
        </p>
      </div>
    </Container>
  );
}
