import Link from "next/link"

import { Container } from "@/components/layout/container"
import { siteConfig } from "@/config/site"

// Cache Components에서는 프리렌더 중 new Date() 사용이 금지되므로 캐시된 컴포넌트로 분리한다
async function CurrentYear() {
  "use cache"
  return <>{new Date().getFullYear()}</>
}

export function SiteFooter() {
  return (
    <footer className="border-t py-6">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p>
          © <CurrentYear /> {siteConfig.name}. All rights reserved.
        </p>
        <nav className="flex gap-4">
          {siteConfig.footerLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  )
}
