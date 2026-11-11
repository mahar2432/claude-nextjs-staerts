import { AnnouncementBanner } from "@/components/common/announcement-banner"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"

// 헤더 + 본문 + 푸터로 구성된 공개 페이지용 레이아웃
export default function MarketingLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <AnnouncementBanner message="스타터 킷에 오신 것을 환영합니다 🎉" />
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  )
}
