import type { Metadata } from "next"

import { LoginForm } from "./login-form"

export const metadata: Metadata = { title: "로그인" }

export default function LoginPage() {
  return (
    <div className="w-full max-w-sm">
      <LoginForm />
    </div>
  )
}
