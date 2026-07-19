export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-text/10 bg-bg-primary">
      <div className="flex flex-col gap-2 px-4 py-8 text-sm text-text/70 sm:flex-row sm:items-center sm:justify-between md:px-10 lg:px-20">
        <p>&copy; {year} Your Name</p>
        <div className="flex gap-4">
          <a
            href="https://github.com"
            className="underline-offset-4 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            className="underline-offset-4 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hello@example.com"
            className="underline-offset-4 hover:underline"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
