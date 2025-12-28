"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-0 md:px-6 py-4 flex-col flex md:flex-row gap-2 md:gap-0 items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-black tracking-tighter uppercase italic">
          EMA KAY
        </Link>

        <nav className="flex items-center px-6 gap-12 pt-3 md:pt-0 border-t md:border-none">
          <Link href="/schoolwork" className="text-xs uppercase tracking-widest font-bold hover:text-muted-foreground transition-all duration-300">
            Schoolwork
          </Link>
          <Link href="/brain-dump" className="text-xs uppercase tracking-widest font-bold hover:text-muted-foreground transition-all duration-300">
            Brain Dump
          </Link>
          <Link href="/about" className="text-xs uppercase tracking-widest font-bold hover:text-muted-foreground transition-all duration-300">
            About
          </Link>

        </nav>
      </div>
    </header>
  )
}
