import Link from "next/link";
import { cn } from "@/app/_lib/cn";
import { type ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  ComponentPropsWithoutRef<"button"> & { as?: "button"; href?: never };

type ButtonAsLink = ButtonBaseProps &
  ComponentPropsWithoutRef<typeof Link> & { as: "link"; href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-[#F4B51C] hover:bg-[#D89A0D] text-[#142315] font-bold shadow-sm hover:shadow",
  secondary: "bg-[#142315] hover:bg-[#263C20] text-white font-bold shadow-sm hover:shadow",
  outline: "border-2 border-[#F4B51C] text-[#F4B51C] hover:bg-[#F4B51C] hover:text-[#142315] font-bold",
  ghost: "border border-white/30 text-white hover:bg-white/10 font-semibold",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-xs px-4 py-2 tracking-widest",
  md: "text-sm px-6 py-3 tracking-widest",
  lg: "text-sm md:text-base px-8 py-3.5 tracking-widest",
};

export default function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, as, ...rest } = props;

  const baseClass = cn(
    "inline-flex items-center justify-center gap-2 rounded transition-all duration-200 uppercase",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (as === "link") {
    const { href, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={baseClass} {...(linkRest as object)}>
        {linkRest.children}
      </Link>
    );
  }

  return (
    <button className={baseClass} {...(rest as ComponentPropsWithoutRef<"button">)} />
  );
}
