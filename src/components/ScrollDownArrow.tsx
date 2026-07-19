"use client";

export default function ScrollDownArrow() {
  return (
    <a
      href="#selected-work"
      aria-label="Scroll to selected work"
      className="mb-8 inline-block w-fit text-brand-brown transition-transform hover:translate-y-1"
      onClick={(e) => {
        e.preventDefault();
        document
          .getElementById("selected-work")
          ?.scrollIntoView({ behavior: "smooth" });
      }}
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
  );
}
