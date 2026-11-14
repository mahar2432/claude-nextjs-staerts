import type { Metadata } from "next"

import { PageHeader } from "@/components/common/page-header"
import { SignupForm } from "./signup-form"

export const metadata: Metadata = { title: "폼 예제" }

export default function FormsExamplePage() {
  return (
    <div className="max-w-xl space-y-8">
      <PageHeader
        title="폼"
        description="react-hook-form + zod로 입력값, 비밀번호 확인, Select, Checkbox, Switch를 검증합니다."
      />
      <SignupForm />
    </div>
  )
}
