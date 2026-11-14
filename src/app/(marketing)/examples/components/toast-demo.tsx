"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"

// sonner 토스트 종류별 데모 — Toaster는 Providers에 이미 등록되어 있다
export function ToastDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" onClick={() => toast("기본 알림입니다")}>
        기본
      </Button>
      <Button variant="outline" onClick={() => toast.success("저장되었습니다")}>
        성공
      </Button>
      <Button variant="outline" onClick={() => toast.error("오류가 발생했습니다")}>
        오류
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.promise(new Promise((resolve) => setTimeout(resolve, 1500)), {
            loading: "처리 중...",
            success: "완료되었습니다",
            error: "실패했습니다",
          })
        }
      >
        Promise
      </Button>
    </div>
  )
}
