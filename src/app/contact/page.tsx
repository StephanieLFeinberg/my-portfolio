import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch.",
};

export default function ContactPage() {
  return (
    <Container>
      <div className="max-w-3xl">
        <h1 className="font-heading text-3xl font-semibold tracking-tight">
          Contact
        </h1>
        <p className="mt-4 text-text/80">
          Write how people can reach you here — email, LinkedIn, or a
          contact form.
        </p>
      </div>
    </Container>
  );
}
