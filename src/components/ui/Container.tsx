import type { ReactNode } from "react";

export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="bg-bg-primary">
      <div className={`px-4 py-16 md:px-10 lg:px-20 ${className}`}>
        {children}
      </div>
    </div>
  );
}
