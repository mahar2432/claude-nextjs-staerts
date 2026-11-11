import Link from "next/link"
import { Layers, Moon, ShieldCheck } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { siteConfig } from "@/config/site"

const features = [
  {
    icon: Layers,
    title: "계층형 컴포넌트",
    description: "ui → common → layout 순서로 재사용성을 높인 구조",
  },
  {
    icon: Moon,
    title: "다크모드",
    description: "next-themes 기반, 깜빡임 없이 시스템 테마를 따라갑니다",
  },
  {
    icon: ShieldCheck,
    title: "폼 검증",
    description: "react-hook-form + zod로 타입 안전한 폼 처리",
  },
]

export default function HomePage() {
  return (
    <Container className="py-16 sm:py-24">
      <section className="mx-auto max-w-2xl space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {siteConfig.name}
        </h1>
        <p className="text-lg text-muted-foreground">
          {siteConfig.description}
        </p>
        <div className="flex justify-center gap-3">
          <Button size="lg" render={<Link href="/dashboard" />} nativeButton={false}>
            대시보드 보기
          </Button>
          <Button
            size="lg"
            variant="outline"
            render={<Link href="/contact" />}
            nativeButton={false}
          >
            문의하기
          </Button>
        </div>
      </section>

      <section className="mt-20 grid gap-4 sm:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="mb-2 size-6" />
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>
    </Container>
  )
}
