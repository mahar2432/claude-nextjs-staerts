import type { Metadata } from "next"

import { PageHeader } from "@/components/common/page-header"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CounterControls, CounterDisplay, PersistedNote } from "./state-demos"

export const metadata: Metadata = { title: "상태 관리 예제" }

export default function StateExamplePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="상태 관리"
        description="상황에 맞는 상태 도구를 고르는 기준을 예제로 확인하세요."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>zustand — 공유 상태</CardTitle>
            <CardDescription>
              props 전달 없이 떨어진 두 컴포넌트가 같은 값을 공유합니다. 새로고침하면
              초기화됩니다.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <CounterDisplay />
            <CounterControls />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>useLocalStorage — 영속 상태</CardTitle>
            <CardDescription>
              한 컴포넌트에서만 쓰는 값을 브라우저에 저장합니다. 새로고침해도 유지됩니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <PersistedNote />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
