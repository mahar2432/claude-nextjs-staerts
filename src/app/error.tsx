"use client"

import { useEffect } from "react"

import { Button } from "@/components/ui/button"

export default function ErrorPage({
  error,
  retry,
}: {
  error: unknown
  retry: () => void
}) {
  // 에러를 콘솔에 남긴다 — 실제 서비스에서는 에러 리포팅 서비스로 교체한다
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
      <p className="text-2xl font-bold">문제가 발생했습니다</p>
      <p className="text-muted-foreground">잠시 후 다시 시도해주세요.</p>
      {/* retry: 데이터를 다시 가져와 에러 경계의 자식을 재렌더한다 */}
      <Button onClick={() => retry()}>다시 시도</Button>
    </div>
  )
}
