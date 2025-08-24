"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl font-bold tracking-tight">
          EMAKAY
        </Link>

        <nav className="flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-muted-foreground transition-colors">
            Work
          </Link>
          <Link href="/merch" className="text-sm font-medium hover:text-muted-foreground transition-colors">
            Merch
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-muted-foreground transition-colors">
            About
          </Link>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-9 h-9 p-0"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>
      </div>
    </header>
  )
}
