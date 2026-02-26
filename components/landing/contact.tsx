"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { toast } from "sonner"

const formSchema = z.object({
  name: z.string().min(2, "이름은 2글자 이상이어야 합니다."),
  phone: z.string().regex(/^010-\d{3,4}-\d{4}$/, "올바른 연락처 형식이 아닙니다. (예: 010-0000-0000)"),
  email: z.string().email("올바른 이메일 주소를 입력해주세요.").optional().or(z.literal("")),
  type: z.string().min(1, "문의 유형을 선택해주세요."),
  message: z.string().min(10, "문의 내용은 10자 이상 작성해주세요."),
})

type FormValues = z.infer<typeof formSchema>

const contactInfo = [
  { icon: Phone, label: "전화", value: "1544-8972", href: "tel:1544-8972" },
  { icon: Mail, label: "이메일", value: "info@joeunenergy.com", href: "mailto:info@joeunenergy.com" },
  { icon: MapPin, label: "주소", value: "경기도 파주시 법원읍", href: undefined },
  { icon: Clock, label: "운영시간", value: "월-금 09:00 ~ 18:00", href: undefined },
]

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      type: "",
      message: "",
    },
  })

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
    toast.success("상담 신청이 정상적으로 접수되었습니다.")
    reset()
  }

  return (
    <section id="contact" className="bg-card py-24">
      <ScrollReveal className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Contact Us
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
            무료 상담 신청
          </h2>
          <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-primary" />
          <p className="mx-auto max-w-xl text-muted-foreground">
            태양광 설치, ESS 솔루션, 정부 지원사업에 대해 궁금한 점이 있으시면
            언제든 문의해 주세요. 전문 상담사가 친절하게 안내해 드립니다.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-semibold text-foreground transition-colors hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 overflow-hidden rounded-xl border border-border bg-muted">
              <div className="flex h-48 items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto mb-2 h-8 w-8 text-primary/50" />
                  <p className="text-sm text-muted-foreground">경기도 파주시 법원읍</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center rounded-xl border border-border bg-background p-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">상담 신청이 완료되었습니다</h3>
                <p className="text-muted-foreground">
                  빠른 시일 내에 담당자가 연락드리겠습니다.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => setSubmitted(false)}
                >
                  추가 문의하기
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="rounded-xl border border-border bg-background p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                      이름 <span className="text-destructive">*</span>
                    </label>
                    <input
                      {...register("name")}
                      id="name"
                      placeholder="홍길동"
                      className={`w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-ring ${errors.name ? "border-destructive" : "border-input"
                        }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
                      연락처 <span className="text-destructive">*</span>
                    </label>
                    <input
                      {...register("phone")}
                      id="phone"
                      placeholder="010-0000-0000"
                      className={`w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-ring ${errors.phone ? "border-destructive" : "border-input"
                        }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                      이메일
                    </label>
                    <input
                      {...register("email")}
                      id="email"
                      placeholder="email@example.com"
                      className={`w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-ring ${errors.email ? "border-destructive" : "border-input"
                        }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="type" className="mb-1.5 block text-sm font-medium text-foreground">
                      문의 유형 <span className="text-destructive">*</span>
                    </label>
                    <select
                      {...register("type")}
                      id="type"
                      className={`w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-ring ${errors.type ? "border-destructive" : "border-input"
                        }`}
                    >
                      <option value="">선택해주세요</option>
                      <option value="residential">주택용 태양광</option>
                      <option value="commercial">상업용 태양광</option>
                      <option value="industrial">산업용 태양광</option>
                      <option value="ess">ESS 솔루션</option>
                      <option value="consulting">에너지 컨설팅</option>
                      <option value="etc">기타 문의</option>
                    </select>
                    {errors.type && (
                      <p className="mt-1 text-xs text-destructive">{errors.type.message}</p>
                    )}
                  </div>
                </div>
                <div className="mt-5">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                    문의 내용 <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={5}
                    placeholder="설치 희망 위치, 지붕 형태, 예산 등을 알려주시면 더 정확한 상담이 가능합니다."
                    className={`w-full resize-none rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-ring ${errors.message ? "border-destructive" : "border-input"
                      }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {isSubmitting ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="mr-2 h-4 w-4" />
                  )}
                  {isSubmitting ? "신청 중..." : "상담 신청하기"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
