"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

const items = [{ title: "전체", href: "/examples" }, ...siteConfig.examples]

// 예제 섹션 상단의 서브 내비게이션 — 현재 예제를 강조한다
export function ExamplesNav() {
  const pathname = usePathname()

  return (
    <nav
      aria-label="예제 목록"
      className="flex gap-1 overflow-x-auto border-b pb-px"
    >
      {items.map((item) => {
        const active = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "-mb-px shrink-0 border-b-2 px-3 py-2 text-sm transition-colors hover:text-foreground",
              active
                ? "border-primary font-medium text-foreground"
                : "border-transparent text-muted-foreground"
            )}
          >
            {item.title}
          </Link>
        )
      })}
    </nav>
  )
}
