import type { Metadata } from "next"
import { Info } from "lucide-react"

import { PageHeader } from "@/components/common/page-header"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ToastDemo } from "./toast-demo"

export const metadata: Metadata = { title: "UI 컴포넌트 예제" }

const buttonVariants = [
  "default",
  "secondary",
  "outline",
  "ghost",
  "destructive",
  "link",
] as const

const badgeVariants = [
  "default",
  "secondary",
  "outline",
  "destructive",
] as const

// 예제 섹션 하나를 감싸는 카드
function Section({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

export default function ComponentsExamplePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="UI 컴포넌트"
        description="shadcn/ui(base-ui) 컴포넌트 사용 예시입니다. 링크 버튼은 asChild 대신 render 속성을 사용합니다."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Section title="Button" description="variant 별 버튼 스타일">
          <div className="flex flex-wrap gap-2">
            {buttonVariants.map((variant) => (
              <Button key={variant} variant={variant}>
                {variant}
              </Button>
            ))}
          </div>
        </Section>

        <Section title="Badge" description="상태나 분류를 표시하는 배지">
          <div className="flex flex-wrap gap-2">
            {badgeVariants.map((variant) => (
              <Badge key={variant} variant={variant}>
                {variant}
              </Badge>
            ))}
          </div>
        </Section>

        <Section title="Tabs" description="같은 영역에서 콘텐츠를 전환">
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="account">계정</TabsTrigger>
              <TabsTrigger value="password">비밀번호</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="pt-2 text-sm text-muted-foreground">
              계정 정보를 변경할 수 있습니다.
            </TabsContent>
            <TabsContent value="password" className="pt-2 text-sm text-muted-foreground">
              비밀번호를 변경할 수 있습니다.
            </TabsContent>
          </Tabs>
        </Section>

        <Section title="Accordion" description="접고 펼치는 콘텐츠 목록">
          <Accordion>
            <AccordionItem value="q1">
              <AccordionTrigger>스타터 킷은 무료인가요?</AccordionTrigger>
              <AccordionContent>네, 자유롭게 사용할 수 있습니다.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>컴포넌트는 어떻게 추가하나요?</AccordionTrigger>
              <AccordionContent>
                npx shadcn@latest add &lt;name&gt; 명령을 사용합니다.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Section>

        <Section title="Dialog & Tooltip" description="오버레이 컴포넌트">
          <div className="flex flex-wrap items-center gap-2">
            <Dialog>
              <DialogTrigger render={<Button variant="outline" />}>
                다이얼로그 열기
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>정말 진행할까요?</DialogTitle>
                  <DialogDescription>
                    이 작업은 예제이므로 실제로 아무 일도 일어나지 않습니다.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose render={<Button variant="outline" />}>
                    취소
                  </DialogClose>
                  <DialogClose render={<Button />}>확인</DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Tooltip>
              <TooltipTrigger
                render={<Button variant="ghost" size="icon" aria-label="도움말" />}
              >
                <Info />
              </TooltipTrigger>
              <TooltipContent>툴팁 내용입니다</TooltipContent>
            </Tooltip>
          </div>
        </Section>

        <Section title="Toast" description="sonner 기반 알림">
          <ToastDemo />
        </Section>

        <Section title="Skeleton" description="로딩 중 자리 표시">
          <div className="flex items-center gap-4">
            <Skeleton className="size-12 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}
