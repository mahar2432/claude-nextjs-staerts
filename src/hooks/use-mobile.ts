import { useMediaQuery } from "usehooks-ts"

const MOBILE_BREAKPOINT = 768

// shadcn Sidebar가 import하는 훅 — 검증된 usehooks-ts의 useMediaQuery로 위임한다.
// initializeWithValue: false → 서버/첫 렌더는 false로 맞춰 하이드레이션 불일치를 막는다.
export function useIsMobile() {
  return useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`, {
    initializeWithValue: false,
  })
}
