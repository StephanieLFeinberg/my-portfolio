import type { ReactNode } from "react";

export default function Container({
  children,
  className = "",
  transparent = false,
}: {
  children: ReactNode;
  className?: string;
  transparent?: boolean;
}) {
  return (
    <div className={transparent ? "" : "bg-bg-primary"}>
      <div className={`px-4 py-16 md:px-10 lg:px-20 ${className}`}>
        {children}
      </div>
    </div>
  );
}
