import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import prisma from "@/lib/prisma.engine"

export default async function AboutPage() {
  const settings = await prisma.siteSettings.findUnique({
    where: { id: 'singleton' }
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-24 items-start">
            <div className="md:col-span-7 space-y-12">
              <h1 className="font-serif text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.8]">
                Ema Kay
              </h1>

              <div className="space-y-8 text-sm md:text-base uppercase tracking-widest leading-loose font-medium opacity-80 whitespace-pre-wrap">
                {settings?.aboutText || "I am a fashion designer dedicated to creating architecture for the body. Based on the intersection of minimalist elegance and sustainable craftsmanship, my practice revolves around the dialogue between form and textile."}
              </div>


              <div className="pt-24 border-t border-border/30">
                <h2 className="text-[10px] uppercase tracking-[0.5em] font-black mb-8 opacity-30 text-muted-foreground italic">Studio Contact</h2>
                <div className="space-y-4">
                  <a
                    href={`mailto:${settings?.contactEmail || 'studio@emakay.com'}`}
                    className="block font-serif text-3xl font-bold italic hover:opacity-50 transition-opacity"
                  >
                    {settings?.contactEmail || 'studio@emakay.com'}
                  </a>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-black opacity-50">Global Inquiries & Curation</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 aspect-3/4 bg-muted border border-border/50 overflow-hidden group">
              <img
                src={settings?.aboutImage || "/placeholder.svg"}
                alt="Designer portrait"
                className="w-full h-full object-cover transition-transform duration-2000 group-hover:scale-110 grayscale"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
