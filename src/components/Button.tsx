import Link from "next/link"
import { cn } from "@/lib/utils"

type Variant = "primary" | "secondary" | "outline" | "ghost"

export default function Button({
  children,
  href,
  onClick,
  className,
  variant = "primary",
  type = "button",
}: {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  variant?: Variant
  type?: "button" | "submit"
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 focus-visible:ring-offset-2 ring-offset-white"

  const styles: Record<Variant, string> = {
    primary:
      "bg-sky-600 text-white hover:bg-sky-700 shadow-[0_10px_25px_-12px_rgba(2,132,199,.6)]",
    secondary:
      "bg-slate-900 text-white hover:bg-slate-800 shadow-[0_10px_25px_-12px_rgba(15,23,42,.45)]",
    outline:
      "border border-slate-200 text-slate-900 hover:bg-slate-50",
    ghost:
      "text-slate-700 hover:bg-slate-100",
  }

  if (href) {
    return (
      <Link href={href} className={cn(base, styles[variant], className)}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={cn(base, styles[variant], className)}>
      {children}
    </button>
  )
}
