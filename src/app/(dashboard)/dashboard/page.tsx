import type { Metadata } from "next"

import { PageHeader } from "@/components/common/page-header"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const metadata: Metadata = { title: "대시보드" }

const stats = [
  { label: "전체 사용자", value: "1,284", change: "+12%" },
  { label: "활성 세션", value: "342", change: "+4%" },
  { label: "신규 가입", value: "58", change: "-2%" },
]

export default function DashboardPage() {
  return (
    <>
      <PageHeader title="개요" description="서비스 현황을 한눈에 확인하세요." />
      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader>
              <CardDescription>{stat.label}</CardDescription>
              <CardTitle className="text-3xl">{stat.value}</CardTitle>
              <Badge variant="secondary" className="w-fit">
                {stat.change}
              </Badge>
            </CardHeader>
          </Card>
        ))}
      </div>
    </>
  )
}
