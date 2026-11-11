import { SearchDialog } from "@/components/common/search-dialog"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"

// 앱 전역 프로바이더를 한 곳에 모아 root layout을 단순하게 유지한다.
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>{children}</TooltipProvider>
      <SearchDialog />
      <Toaster richColors position="top-center" />
    </ThemeProvider>
  )
}
