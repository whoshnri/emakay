import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import prisma from "@/lib/prisma.engine"
import { SchoolworkClient } from "./schoolwork-client"

export default async function SchoolworkPage() {
  const works = await prisma.schoolWork.findMany({
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-border pb-12">
            <div className="space-y-4">
              <h1 className="font-serif text-5xl md:text-7xl font-black italic uppercase tracking-tighter">
                Schoolwork
              </h1>
              <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-muted-foreground">
                Selected Academic & Professional Projects
              </p>
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] font-black opacity-30">
              Total items: {works.length}
            </div>
          </header>

          <SchoolworkClient works={works} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

