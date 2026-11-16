"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { toast } from "sonner"
import {
  useBoolean,
  useCopyToClipboard,
  useDebounceValue,
  useIsClient,
  useMediaQuery,
} from "usehooks-ts"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"

// useDebounceValue: 입력이 멈춘 뒤에만 값이 갱신된다 (검색 API 호출 최적화 등)
export function DebounceDemo() {
  const [value, setValue] = useState("")
  const [debounced] = useDebounceValue(value, 500)

  return (
    <div className="space-y-3">
      <Input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="빠르게 입력해 보세요"
        aria-label="디바운스 입력"
      />
      <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
        <dt className="text-muted-foreground">즉시 값</dt>
        <dd className="truncate">{value || "—"}</dd>
        <dt className="text-muted-foreground">500ms 디바운스</dt>
        <dd className="truncate font-medium">{debounced || "—"}</dd>
      </dl>
    </div>
  )
}

// useCopyToClipboard: 클립보드 복사 후 결과를 상태로 확인한다
export function ClipboardDemo() {
  const [copiedText, copy] = useCopyToClipboard()
  const command = "npx shadcn@latest add button"

  async function handleCopy() {
    const ok = await copy(command)
    if (ok) toast.success("복사되었습니다")
    else toast.error("복사에 실패했습니다")
  }

  return (
    <div className="flex items-center gap-2">
      <code className="flex-1 truncate rounded-md bg-muted px-3 py-1.5 font-mono text-sm">
        {command}
      </code>
      <Button variant="outline" size="icon" aria-label="명령어 복사" onClick={handleCopy}>
        {copiedText === command ? <Check /> : <Copy />}
      </Button>
    </div>
  )
}

// useMediaQuery: 화면 크기·사용자 설정에 반응한다 (SSR에선 initializeWithValue: false 필수)
export function MediaQueryDemo() {
  const isClient = useIsClient()
  const isDesktop = useMediaQuery("(min-width: 768px)", {
    initializeWithValue: false,
  })
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)", {
    initializeWithValue: false,
  })

  // 마운트 전에는 실제 값을 알 수 없으므로, 틀린 값 대신 스켈레톤을 보여준다
  if (!isClient) return <Skeleton className="h-12 w-full" />

  return (
    <div className="flex flex-wrap gap-2 text-sm">
      <Badge variant={isDesktop ? "default" : "secondary"}>
        {isDesktop ? "데스크톱 너비" : "모바일 너비"}
      </Badge>
      <Badge variant="outline">
        시스템 테마: {prefersDark ? "다크" : "라이트"}
      </Badge>
      <p className="w-full text-muted-foreground">
        브라우저 창 크기를 바꿔 보세요.
      </p>
    </div>
  )
}

// useBoolean: on/off 상태와 setTrue·setFalse·toggle 헬퍼를 한 번에 제공한다
export function BooleanDemo() {
  const { value, toggle, setTrue, setFalse } = useBoolean(false)

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" onClick={toggle}>
          토글
        </Button>
        <Button variant="outline" onClick={setTrue}>
          켜기
        </Button>
        <Button variant="outline" onClick={setFalse}>
          끄기
        </Button>
      </div>
      <p className="text-sm">
        현재 상태: <Badge variant={value ? "default" : "secondary"}>{value ? "ON" : "OFF"}</Badge>
      </p>
    </div>
  )
}
