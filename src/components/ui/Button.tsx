import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary";
type Size = "medium" | "large";

const base =
  "inline-flex items-center justify-center rounded-full font-body font-medium transition-colors";

const sizes: Record<Size, string> = {
  medium: "px-5 py-2 text-sm",
  large: "h-[46px] px-6 text-lg",
};

const variants: Record<Variant, string> = {
  primary: "bg-brand-brown text-white hover:bg-[#5B4744]",
  secondary:
    "border border-brand-brown bg-white text-brand-brown hover:bg-brand-brown hover:text-white",
};

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  href?: undefined;
};

type ButtonAsLink = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
  href: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
  variant = "primary",
  size = "large",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return <Link href={href} className={classes} {...rest} />;
  }

  return <button className={classes} {...(props as ButtonAsButton)} />;
}
