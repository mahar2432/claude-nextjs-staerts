import type { Metadata } from "next"

import { PageHeader } from "@/components/common/page-header"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  BooleanDemo,
  ClipboardDemo,
  DebounceDemo,
  MediaQueryDemo,
} from "./hook-demos"

export const metadata: Metadata = { title: "유틸 훅 예제" }

const demos = [
  {
    title: "useDebounceValue",
    description: "입력이 멈춘 뒤에만 값을 갱신합니다.",
    Demo: DebounceDemo,
  },
  {
    title: "useCopyToClipboard",
    description: "텍스트를 클립보드에 복사합니다.",
    Demo: ClipboardDemo,
  },
  {
    title: "useMediaQuery",
    description: "미디어 쿼리 결과에 따라 UI를 바꿉니다.",
    Demo: MediaQueryDemo,
  },
  {
    title: "useBoolean",
    description: "불리언 상태를 다루는 헬퍼를 제공합니다.",
    Demo: BooleanDemo,
  },
]

export default function HooksExamplePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="유틸 훅"
        description="직접 구현하기 전에 usehooks-ts에 이미 있는지 먼저 확인하세요."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {demos.map(({ title, description, Demo }) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle className="font-mono">{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Demo />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
