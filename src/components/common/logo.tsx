import Link from "next/link"
import { Sparkles } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function Logo({
  className,
  onClick,
}: {
  className?: string
  // 시트·사이드바 안에서 이동 후 패널을 닫을 때 사용한다
  onClick?: () => void
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn("flex items-center gap-2 font-semibold", className)}
    >
      <Sparkles className="size-5" />
      <span>{siteConfig.name}</span>
    </Link>
  )
}
