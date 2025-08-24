import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="font-serif text-4xl font-bold mb-8">About</h1>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  I am a fashion designer dedicated to creating timeless pieces that embody minimalist elegance and
                  sustainable craftsmanship. My work focuses on clean lines, premium materials, and thoughtful
                  construction.
                </p>
                <p>
                  Each piece is designed with intention, prioritizing quality over quantity. I believe in slow
                  fashion—creating garments that transcend seasonal trends and become cherished wardrobe staples.
                </p>
                <p>
                  My design philosophy centers on the intersection of form and function, where every detail serves a
                  purpose. From ethically sourced materials to meticulous attention to fit, each creation reflects a
                  commitment to excellence.
                </p>
              </div>
            </div>

            <div className="aspect-[3/4] bg-muted">
              <img src="/fashion-designer-portrait.png" alt="Designer portrait" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
