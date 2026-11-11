import { LayoutDashboard, Home, Mail, type LucideIcon } from "lucide-react"

export type NavItem = {
  title: string
  href: string
  icon: LucideIcon
}

// 사이트 전역 설정 — 이름, 설명, 내비게이션을 한 곳에서 관리한다.
export const siteConfig = {
  name: "Next Starter",
  description: "Next.js + shadcn/ui 기반의 재사용 가능한 스타터 킷",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  mainNav: [
    { title: "홈", href: "/", icon: Home },
    { title: "대시보드", href: "/dashboard", icon: LayoutDashboard },
    { title: "문의하기", href: "/contact", icon: Mail },
  ] satisfies NavItem[],
  footerLinks: [
    { title: "이용약관", href: "#" },
    { title: "개인정보처리방침", href: "#" },
  ],
}
