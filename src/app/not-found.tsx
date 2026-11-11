import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
      <p className="text-6xl font-bold">404</p>
      <p className="text-muted-foreground">페이지를 찾을 수 없습니다.</p>
      <Button render={<Link href="/" />} nativeButton={false}>
        홈으로 돌아가기
      </Button>
    </div>
  )
}
