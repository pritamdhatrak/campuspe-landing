export default function Container({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return <div className={["container", className].filter(Boolean).join(" ")}>{children}</div>
}
