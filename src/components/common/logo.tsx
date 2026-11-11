import Link from "next/link"
import { Sparkles } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2 font-semibold", className)}
    >
      <Sparkles className="size-5" />
      <span>{siteConfig.name}</span>
    </Link>
  )
}
