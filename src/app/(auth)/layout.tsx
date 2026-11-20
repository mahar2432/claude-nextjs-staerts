import { Logo } from "@/components/common/logo"

// 헤더·푸터 없이 카드를 화면 중앙에 배치하는 인증 페이지 전용 레이아웃
export default function AuthLayout({ children }: LayoutProps<"/">) {
  return (
    <main className="flex min-h-svh flex-1 flex-col items-center justify-center gap-6 bg-muted/40 p-6 md:p-10">
      <Logo className="text-lg" />
      {children}
    </main>
  )
}
