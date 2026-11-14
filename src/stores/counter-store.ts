import { create } from "zustand"

type CounterState = {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

// 상태 관리 예제용 카운터 스토어 — 서로 떨어진 컴포넌트가 같은 값을 공유한다
// (persist를 쓰지 않으므로 새로고침하면 초기화된다)
export const useCounterStore = create<CounterState>()((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}))
