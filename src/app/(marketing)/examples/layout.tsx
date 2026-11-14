import { Container } from "@/components/layout/container"
import { ExamplesNav } from "@/components/layout/examples-nav"

// 예제 섹션 공통 레이아웃 — 서브 내비게이션 + 본문
export default function ExamplesLayout({
  children,
}: LayoutProps<"/examples">) {
  return (
    <Container className="space-y-8 py-12">
      <ExamplesNav />
      {children}
    </Container>
  )
}
