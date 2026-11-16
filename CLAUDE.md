@AGENTS.md

# 프로젝트 가이드

Next.js(App Router, Cache Components) + shadcn/ui(base-nova) 스타터 킷.

## 디렉토리 구조

```
src/
├─ config/site.ts        사이트명·내비게이션 등 전역 설정 (단일 출처)
├─ components/
│  ├─ ui/                shadcn 프리미티브 — CLI로만 추가, 수정 최소화
│  ├─ common/            ui를 조합한 재사용 블록 (Logo, ThemeToggle, PageHeader ...)
│  ├─ layout/            Header, Footer, Sidebar, Container 등 페이지 골격
│  └─ providers/         전역 프로바이더 (Providers에서 한 번에 조립)
├─ stores/               zustand 스토어
├─ hooks/                커스텀 훅 (유틸 훅은 usehooks-ts 우선)
└─ app/
   ├─ (marketing)/       헤더+푸터 레이아웃의 공개 페이지
   └─ (dashboard)/       사이드바 레이아웃의 대시보드
```

의존 방향: `app → layout → common → ui` (역방향 import 금지)

## 라이브러리 원칙: 바퀴를 재발명하지 않는다

| 용도 | 사용 |
|---|---|
| UI | shadcn/ui (`npx shadcn@latest add <name>`) |
| 테마 | next-themes |
| 토스트 | sonner |
| 폼 검증 | react-hook-form + zod |
| 유틸 훅 (미디어쿼리, 로컬스토리지 등) | **usehooks-ts** |
| 전역 UI 상태 | zustand |
| 서버 데이터 캐싱 | @tanstack/react-query (필요할 때 추가) |

## 상태 선택 기준

- 한 컴포넌트의 영속 값 → `useLocalStorage` (usehooks-ts)
- 여러 컴포넌트가 공유하는 상태 → zustand (`persist` 없이)
- 서버 데이터 → react-query

## SSR 규칙

- `useLocalStorage`, `useMediaQuery`에는 항상 `{ initializeWithValue: false }`를 준다 (하이드레이션 불일치 방지).
- 저장값에 따라 UI가 깜빡일 수 있으면 `useIsClient()`로 마운트 후에만 렌더한다.
- zustand 스토어는 `"use client"` 컴포넌트에서만 사용한다 (서버에서 전역 상태가 요청 간 공유됨).

## 이 프로젝트의 함정

- **Cache Components**: 프리렌더 중 `new Date()`, `Math.random()` 등 불안정한 값 사용 시 빌드가 실패한다. `"use cache"` 컴포넌트로 분리하거나 클라이언트에서 계산한다.
- **base-ui 기반 shadcn**: `asChild`가 없다. 링크 버튼은 `<Button render={<Link href="..." />} nativeButton={false}>`.
- **`CommandDialog`**: children을 `<Command>`로 감싸지 않으므로 사용처에서 직접 감싼다.
- `LayoutProps`, `PageProps` 타입은 `next build`/`next dev` 시 생성된다. `.next`를 지우면 `tsc`가 실패하니 먼저 빌드한다.

## 규칙

- 코드 주석·커밋 메시지·문서는 한국어, 변수/함수명은 영어.
- 변경 후 `npm run lint`와 `npm run build`가 통과해야 한다.
- 코드 구현(기능 추가·버그 수정·리팩터링)을 마치면, 완료 보고 전에 `code-reviewer` 서브에이전트를 실행한다. 변경 파일 목록과 변경 의도를 함께 전달하고, Critical 지적은 수정한 뒤 마무리한다.
