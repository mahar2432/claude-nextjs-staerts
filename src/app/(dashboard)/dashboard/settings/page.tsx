import type { Metadata } from "next"

import { PageHeader } from "@/components/common/page-header"

export const metadata: Metadata = { title: "설정" }

export default function Page() {
  return <PageHeader title="설정" description="이 페이지를 구현하세요." />
}
