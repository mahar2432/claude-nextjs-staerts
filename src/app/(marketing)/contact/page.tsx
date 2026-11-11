import type { Metadata } from "next"

import { PageHeader } from "@/components/common/page-header"
import { Container } from "@/components/layout/container"
import { ContactForm } from "./contact-form"

export const metadata: Metadata = { title: "문의하기" }

export default function ContactPage() {
  return (
    <Container className="max-w-xl space-y-8 py-12">
      <PageHeader title="문의하기" description="궁금한 점을 남겨주세요." />
      <ContactForm />
    </Container>
  )
}
