"use client"

import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

// Select 표시 라벨 — base-ui Select는 items로 값→라벨을 매핑한다
const roles = {
  developer: "개발자",
  designer: "디자이너",
  planner: "기획자",
} as const

const schema = z
  .object({
    name: z.string().min(2, "이름은 2자 이상 입력해주세요"),
    email: z.email("올바른 이메일 형식이 아닙니다"),
    password: z.string().min(8, "비밀번호는 8자 이상이어야 합니다"),
    confirmPassword: z.string(),
    role: z.enum(["developer", "designer", "planner"], "직무를 선택해주세요"),
    terms: z.boolean().refine((checked) => checked, "약관에 동의해야 합니다"),
    newsletter: z.boolean(),
  })
  // 여러 필드를 비교하는 검증은 refine으로 처리하고 오류 위치를 path로 지정한다
  .refine((values) => values.password === values.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다",
    path: ["confirmPassword"],
  })

type FormInput = z.input<typeof schema>
type FormOutput = z.output<typeof schema>

// react-hook-form + zod 회원가입 폼 — Select/Checkbox/Switch는 Controller로 연결한다
export function SignupForm() {
  const form = useForm<FormInput, unknown, FormOutput>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: undefined,
      terms: false,
      newsletter: false,
    },
  })

  async function onSubmit(values: FormOutput) {
    await new Promise((resolve) => setTimeout(resolve, 500))
    toast.success(`${values.name}님, 가입을 환영합니다!`, {
      description: `직무: ${roles[values.role]} · 뉴스레터: ${values.newsletter ? "구독" : "미구독"}`,
    })
    form.reset()
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
      <FieldGroup>
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="signup-name">이름</FieldLabel>
              <Input
                {...field}
                id="signup-name"
                aria-invalid={fieldState.invalid}
                autoComplete="name"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="signup-email">이메일</FieldLabel>
              <Input
                {...field}
                id="signup-email"
                type="email"
                aria-invalid={fieldState.invalid}
                autoComplete="email"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="signup-password">비밀번호</FieldLabel>
              <Input
                {...field}
                id="signup-password"
                type="password"
                aria-invalid={fieldState.invalid}
                autoComplete="new-password"
              />
              <FieldDescription>8자 이상 입력하세요.</FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="confirmPassword"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="signup-confirm">비밀번호 확인</FieldLabel>
              <Input
                {...field}
                id="signup-confirm"
                type="password"
                aria-invalid={fieldState.invalid}
                autoComplete="new-password"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="role"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="signup-role">직무</FieldLabel>
              <Select
                items={roles}
                value={field.value ?? null}
                onValueChange={(value) => field.onChange(value ?? undefined)}
              >
                <SelectTrigger
                  id="signup-role"
                  className="w-full"
                  aria-invalid={fieldState.invalid}
                  onBlur={field.onBlur}
                >
                  <SelectValue placeholder="직무를 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(roles).map(([value, label]) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="newsletter"
          control={form.control}
          render={({ field }) => (
            <Field orientation="horizontal">
              <FieldContent>
                <FieldLabel htmlFor="signup-newsletter">뉴스레터 구독</FieldLabel>
                <FieldDescription>새 소식을 이메일로 받아봅니다.</FieldDescription>
              </FieldContent>
              <Switch
                id="signup-newsletter"
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </Field>
          )}
        />
        <Controller
          name="terms"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field orientation="horizontal" data-invalid={fieldState.invalid}>
              <Checkbox
                id="signup-terms"
                checked={field.value}
                onCheckedChange={field.onChange}
                aria-invalid={fieldState.invalid}
              />
              <FieldContent>
                <FieldLabel htmlFor="signup-terms">이용약관에 동의합니다</FieldLabel>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </FieldContent>
            </Field>
          )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "가입 중..." : "가입하기"}
        </Button>
      </FieldGroup>
    </form>
  )
}
