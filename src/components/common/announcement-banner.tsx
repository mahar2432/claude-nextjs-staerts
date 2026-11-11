"use client"

import { X } from "lucide-react"
import { useIsClient, useLocalStorage } from "usehooks-ts"

import { Button } from "@/components/ui/button"

// 닫으면 localStorage에 기억하는 공지 배너 (useLocalStorage 예제)
export function AnnouncementBanner({ message }: { message: string }) {
  // 서버/첫 렌더는 항상 false → 하이드레이션 불일치 방지
  const [dismissed, setDismissed] = useLocalStorage(
    "announcement-dismissed",
    false,
    { initializeWithValue: false }
  )
  // 저장값을 읽기 전에 배너가 깜빡이지 않도록 클라이언트 마운트 후에만 표시
  const isClient = useIsClient()

  if (!isClient || dismissed) return null

  return (
    <div className="flex items-center justify-center gap-2 bg-primary px-4 py-2 text-sm text-primary-foreground">
      <p>{message}</p>
      <Button
        variant="ghost"
        size="icon-xs"
        aria-label="공지 닫기"
        className="hover:bg-primary-foreground/20 hover:text-primary-foreground"
        onClick={() => setDismissed(true)}
      >
        <X />
      </Button>
    </div>
  )
}
