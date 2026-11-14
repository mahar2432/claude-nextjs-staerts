import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { PageHeader } from "@/components/common/page-header"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = { title: "예제" }

export default function ExamplesPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="예제"
        description="스타터 킷에 포함된 라이브러리를 실제로 사용하는 방법을 확인하세요."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {siteConfig.examples.map((example) => (
          <Link key={example.href} href={example.href} className="group">
            <Card className="h-full transition-colors group-hover:bg-muted/50">
              <CardHeader>
                <example.icon className="mb-2 size-6" />
                <CardTitle className="flex items-center gap-2">
                  {example.title}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </CardTitle>
                <CardDescription>{example.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
