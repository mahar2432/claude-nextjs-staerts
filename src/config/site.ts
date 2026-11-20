import {
  BookOpen,
  Boxes,
  Database,
  FormInput,
  Home,
  LayoutDashboard,
  LogIn,
  Mail,
  Settings,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react"

export type NavItem = {
  title: string
  href: string
  icon: LucideIcon
}

export type ExampleItem = NavItem & {
  description: string
}

// 사이트 전역 설정 — 이름, 설명, 내비게이션을 한 곳에서 관리한다.
export const siteConfig = {
  name: "Next Starter",
  description: "Next.js + shadcn/ui 기반의 재사용 가능한 스타터 킷",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  mainNav: [
    { title: "홈", href: "/", icon: Home },
    { title: "예제", href: "/examples", icon: BookOpen },
    { title: "대시보드", href: "/dashboard", icon: LayoutDashboard },
    { title: "문의하기", href: "/contact", icon: Mail },
    { title: "로그인", href: "/login", icon: LogIn },
  ] satisfies NavItem[],
  // 대시보드 사이드바 메뉴
  dashboardNav: [
    { title: "개요", href: "/dashboard", icon: LayoutDashboard },
    { title: "사용자", href: "/dashboard/users", icon: Users },
    { title: "설정", href: "/dashboard/settings", icon: Settings },
  ] satisfies NavItem[],
  // 예제 서브 페이지 목록 — 예제 홈 카드와 서브 내비게이션이 함께 사용한다
  examples: [
    {
      title: "UI 컴포넌트",
      href: "/examples/components",
      icon: Boxes,
      description: "버튼, 배지, 탭, 아코디언, 다이얼로그, 토스트 등 shadcn/ui 쇼케이스",
    },
    {
      title: "폼",
      href: "/examples/forms",
      icon: FormInput,
      description: "react-hook-form + zod로 Select, Checkbox, Switch까지 검증하는 회원가입 폼",
    },
    {
      title: "상태 관리",
      href: "/examples/state",
      icon: Database,
      description: "zustand 공유 상태와 useLocalStorage 영속 상태 비교",
    },
    {
      title: "유틸 훅",
      href: "/examples/hooks",
      icon: Wrench,
      description: "usehooks-ts의 디바운스, 클립보드, 미디어쿼리, 토글 훅",
    },
  ] satisfies ExampleItem[],
  footerLinks: [
    { title: "이용약관", href: "#" },
    { title: "개인정보처리방침", href: "#" },
  ],
}
