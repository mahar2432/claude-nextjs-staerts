"use client"

import { Minus, Plus, RotateCcw } from "lucide-react"
import { useIsClient, useLocalStorage } from "usehooks-ts"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import { useCounterStore } from "@/stores/counter-store"

// zustand: 값을 표시만 하는 컴포넌트 — 필요한 조각만 구독한다
export function CounterDisplay() {
  const count = useCounterStore((state) => state.count)

  return (
    <div className="flex items-center justify-between rounded-lg border p-4">
      <span className="text-sm text-muted-foreground">컴포넌트 A (표시)</span>
      <span className="text-3xl font-bold tabular-nums">{count}</span>
    </div>
  )
}

// zustand: 값을 변경만 하는 컴포넌트 — 액션만 구독하므로 count 변경 시 리렌더되지 않는다
export function CounterControls() {
  const increment = useCounterStore((state) => state.increment)
  const decrement = useCounterStore((state) => state.decrement)
  const reset = useCounterStore((state) => state.reset)

  return (
    <div className="flex items-center justify-between rounded-lg border p-4">
      <span className="text-sm text-muted-foreground">컴포넌트 B (조작)</span>
      <div className="flex gap-2">
        <Button variant="outline" size="icon" aria-label="감소" onClick={decrement}>
          <Minus />
        </Button>
        <Button variant="outline" size="icon" aria-label="증가" onClick={increment}>
          <Plus />
        </Button>
        <Button variant="ghost" size="icon" aria-label="초기화" onClick={reset}>
          <RotateCcw />
        </Button>
      </div>
    </div>
  )
}

// useLocalStorage: 한 컴포넌트의 영속 값 — 새로고침해도 유지된다
export function PersistedNote() {
  const [note, setNote] = useLocalStorage("example-note", "", {
    initializeWithValue: false,
  })
  // 저장값을 읽기 전 빈 값이 잠깐 보이는 깜빡임을 막기 위해 마운트 후에만 렌더
  const isClient = useIsClient()

  if (!isClient) return <Skeleton className="h-8 w-full" />

  return (
    <div className="space-y-2">
      <Input
        value={note}
        onChange={(event) => setNote(event.target.value)}
        placeholder="메모를 입력하고 새로고침해 보세요"
        aria-label="영속 메모"
      />
      <p className="text-sm text-muted-foreground">
        저장된 글자 수: <Badge variant="secondary">{note.length}</Badge>
      </p>
    </div>
  )
}
