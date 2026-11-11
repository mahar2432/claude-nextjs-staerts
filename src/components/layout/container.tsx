import { cn } from "@/lib/utils"

// 콘텐츠 최대 너비와 좌우 여백을 통일하는 레이아웃 래퍼
export function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6", className)}
      {...props}
    />
  )
}
