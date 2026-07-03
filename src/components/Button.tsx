import { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
  download?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({ variant = "primary", href, className, children, icon, download, ...props }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center gap-2 transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-accent text-white rounded-full px-6 py-3 font-medium hover:bg-accent-ink hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/30 group",
    secondary: "bg-white border border-line-strong text-ink rounded-full px-6 py-3 font-medium hover:border-accent hover:text-accent hover:shadow-md group",
    ghost: "text-ink hover:text-accent relative group"
  };
  
  const iconClasses = "transition-transform duration-200 group-hover:translate-x-1";

  const classes = cn(baseClasses, variants[variant], className);

  if (href) {
    if (download || href.startsWith("http") || href.startsWith("/")) {
      return (
        <a href={href} className={classes} download={download} {...props}>
          {children}
          {icon && <span className={iconClasses}>{icon}</span>}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...props}>
        {children}
        {icon && <span className={iconClasses}>{icon}</span>}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {icon && <span className={iconClasses}>{icon}</span>}
    </button>
  );
}
