import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function StyleGuidePage() {
  return (
    <Container>
      <h1 className="font-heading text-3xl">Style Guide</h1>

      <section className="mt-12">
        <h2 className="font-heading text-xl">Backgrounds</h2>
        <div className="mt-4 flex gap-4">
          <div className="flex h-24 w-40 items-end rounded-lg border border-text/10 bg-bg-primary p-3 text-xs">
            bg-primary
          </div>
          <div className="flex h-24 w-40 items-end rounded-lg border border-text/10 bg-bg-secondary p-3 text-xs">
            bg-secondary
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-xl">Buttons</h2>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <Button variant="primary" size="large">
            Primary Large
          </Button>
          <Button variant="secondary" size="large">
            Secondary Large
          </Button>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <Button variant="primary" size="medium">
            Primary Medium
          </Button>
          <Button variant="secondary" size="medium">
            Secondary Medium
          </Button>
        </div>
      </section>

      <section className="mt-12 max-w-xl">
        <h2 className="font-heading text-xl">Typography</h2>
        <h3 className="mt-4 font-heading text-3xl">
          The quick brown fox jumps over the lazy dog
        </h3>
        <p className="mt-3 font-body">
          Headings and body text are both set in Lato. This paragraph
          demonstrates the typeface at reading size.
        </p>
      </section>
    </Container>
  );
}
