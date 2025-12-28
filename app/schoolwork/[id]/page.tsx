import { Metadata } from "next"
import prisma from "@/lib/prisma.engine"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const item = await prisma.schoolWork.findUnique({ where: { id } })

  if (!item) return { title: "Not Found" }

  return {
    title: `${item.title} | EMA KAY`,
    description: item.description,
  }
}

export default async function SchoolworkItemPage({ params }: Props) {
  const { id } = await params
  const item = await prisma.schoolWork.findUnique({ where: { id } })

  if (!item) notFound()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-32 pb-48">
        <article className="max-w-7xl mx-auto px-6">
          <header className="mb-24 space-y-8 max-w-4xl">
            <div className="text-[10px] uppercase tracking-[0.5em] font-black text-muted-foreground italic">Portfolio Artifact</div>
            <h1 className="font-serif text-6xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.8]">
              {item.title}
            </h1>
            <p className="text-sm md:text-base uppercase tracking-widest font-bold opacity-60 max-w-2xl leading-relaxed italic">
              {item.description}
            </p>
          </header>

          <div className="space-y-12">
            <div className="aspect-video w-full bg-muted border border-border/50 overflow-hidden relative">
              <img
                src={item.coverImage}
                alt={item.title}
                className="w-full h-full object-cover grayscale-0"
              />
            </div>

            {item.gallery.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {item.gallery.map((img, idx) => (
                  <div key={idx} className="aspect-square bg-muted border border-border/50 overflow-hidden">
                    <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-48 pt-12 border-t border-border/30 flex justify-between items-end">
            <div className="space-y-2">
              <div className="text-[10px] uppercase tracking-[0.2em] font-black opacity-30 italic">Timeline</div>
              <div className="text-xs font-mono uppercase tracking-[0.3em] font-black">{new Date(item.createdAt).getFullYear()} EDITION</div>
            </div>
            <a href="/schoolwork" className="text-[10px] uppercase tracking-[0.5em] font-black hover:opacity-50 transition-opacity border-b border-foreground pb-2">
              Back to Archive —
            </a>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
