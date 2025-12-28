import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import prisma from "@/lib/prisma.engine"
import { JournalClient } from "./journal-client"

export default async function BrainDumpPage() {
  const posts = await prisma.brainDump.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' }
  })

  const settings = await prisma.siteSettings.findUnique({
    where: { id: 'singleton' }
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <header className="mb-32">
            <h1 className="font-serif text-7xl md:text-9xl font-black italic uppercase tracking-tighter leading-none mb-8">
              Brain Dump
            </h1>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-muted-foreground max-w-sm leading-loose">
                Experimental concepts, moodboards, and pieces available for curation.
              </p>
              <div className="text-[10px] uppercase tracking-[0.2em] font-black border-l border-border pl-8">
                Inquiries: {settings?.contactEmail || 'studio@emakay.com'}
              </div>
            </div>
          </header>

          <JournalClient posts={posts} contactEmail={settings?.contactEmail || 'studio@emakay.com'} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
