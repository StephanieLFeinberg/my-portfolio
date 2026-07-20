import Button from "@/components/ui/Button";
import { unlockCaseStudy } from "@/lib/case-study-actions";

export default function CaseStudyPasswordGate({
  slug,
  title,
  showError,
}: {
  slug: string;
  title: string;
  showError: boolean;
}) {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-bg-primary">
      <div className="w-full max-w-sm px-4">
        <p className="eyebrow">Protected</p>
        <h1 className="mt-2 font-heading text-3xl font-semibold tracking-tight">
          {title}
        </h1>
        <p className="mt-4 font-body text-text/80">
          This project is password protected. Enter the password to view it.
        </p>
        <form action={unlockCaseStudy} className="mt-8">
          <input type="hidden" name="slug" value={slug} />
          <label htmlFor="password" className="eyebrow text-sm">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoFocus
            className="mt-2 w-full rounded-full border border-text/20 bg-white px-5 py-2 font-body text-base text-text focus:border-brand-brown focus:outline-none"
          />
          {showError && (
            <p className="mt-3 text-sm text-red-700">
              That password isn&apos;t right. Try again.
            </p>
          )}
          <Button
            type="submit"
            variant="primary"
            size="medium"
            className="mt-6 w-full"
          >
            View project
          </Button>
        </form>
      </div>
    </section>
  );
}
