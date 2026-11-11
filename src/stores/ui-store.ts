import { create } from "zustand"

type UiState = {
  searchOpen: boolean
  setSearchOpen: (open: boolean) => void
  toggleSearch: () => void
}

// 여러 컴포넌트가 공유하는 UI 상태 스토어 (예: 헤더 버튼과 단축키가 같은 다이얼로그를 연다)
// - 영속 저장이 필요한 값은 여기 두지 말고 usehooks-ts의 useLocalStorage를 쓴다
// - 서버 컴포넌트에서는 사용 금지 (모듈 전역 상태가 요청 간에 공유되므로)
export const useUiStore = create<UiState>()((set) => ({
  searchOpen: false,
  setSearchOpen: (open) => set({ searchOpen: open }),
  toggleSearch: () => set((state) => ({ searchOpen: !state.searchOpen })),
}))
