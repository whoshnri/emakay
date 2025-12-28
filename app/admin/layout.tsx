import Link from "next/link"
import { Header } from "@/components/header"
import { LogoutButton } from "@/components/logout-button"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const navItems = [
    { label: "Schoolwork", href: "/admin" },
    { label: "Brain Dump", href: "/admin/brain-dump" },
    { label: "Settings", href: "/admin/settings" },
    { label: "Public Site", href: "/" },
  ]


  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <div className="flex pt-24 min-h-screen">
        <aside className="w-72 border-r border-border bg-card/50 hidden md:block">
          <nav className="p-12 space-y-12 fixed w-72 h-full flex flex-col">
            <div className="space-y-4 flex-1">
              <div className="text-[10px] uppercase tracking-[0.5em] font-black text-muted-foreground italic mb-8">Management Center</div>
              <ul className="space-y-6">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[10px] uppercase tracking-[0.3em] font-black hover:opacity-50 transition-opacity block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto space-y-12 pb-24">
              <LogoutButton />

              <div className="pt-12 border-t border-border/30">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground leading-loose italic">
                  Studio Management System v1.0 <br />
                  EMA KAY STUDIO 2025
                </p>
              </div>
            </div>
          </nav>
        </aside>


        <main className="flex-1 p-12 md:p-24 overflow-y-auto">
          <div className="max-w-5xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
