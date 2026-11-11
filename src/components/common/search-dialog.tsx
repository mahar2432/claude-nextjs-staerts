"use client"

import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { useEventListener } from "usehooks-ts"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { siteConfig } from "@/config/site"
import { useUiStore } from "@/stores/ui-store"

// 검색 열기 버튼 — zustand 스토어로 다이얼로그를 연다
export function SearchButton() {
  const setSearchOpen = useUiStore((state) => state.setSearchOpen)

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="검색 (⌘K)"
      onClick={() => setSearchOpen(true)}
    >
      <Search className="size-4" />
    </Button>
  )
}

// 검색(커맨드 팔레트) 다이얼로그 — ⌘K / Ctrl+K 단축키 지원
export function SearchDialog() {
  const router = useRouter()
  const open = useUiStore((state) => state.searchOpen)
  const setOpen = useUiStore((state) => state.setSearchOpen)
  const toggle = useUiStore((state) => state.toggleSearch)

  useEventListener("keydown", (event) => {
    if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
      event.preventDefault()
      toggle()
    }
  })

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      title="검색"
      description="이동할 페이지를 검색하세요"
    >
      <Command>
        <CommandInput placeholder="페이지 검색..." />
        <CommandList>
          <CommandEmpty>결과가 없습니다.</CommandEmpty>
          <CommandGroup heading="페이지">
            {siteConfig.mainNav.map((item) => (
              <CommandItem
                key={item.href}
                onSelect={() => {
                  setOpen(false)
                  router.push(item.href)
                }}
              >
                <item.icon />
                {item.title}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  )
}
