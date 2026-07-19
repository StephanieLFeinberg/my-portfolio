"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

const links = [
  { href: "/", label: "Projects" },
  { href: "/about", label: "About" },
] as const;

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="border-b border-text/10 bg-bg-primary">
      <nav className="flex items-center justify-between px-4 py-5 md:px-10 lg:px-20">
        <Link
          href="/"
          className="font-body text-xl font-bold tracking-wide text-brand-brown uppercase"
        >
          Stephanie Feinberg
        </Link>
        <div className="flex items-center gap-6">
          <ul className="flex gap-6 text-base">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`underline-offset-4 hover:underline ${
                      isActive ? "underline" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Button href="/contact" variant="primary" size="large">
            Contact
          </Button>
        </div>
      </nav>
    </header>
  );
}
