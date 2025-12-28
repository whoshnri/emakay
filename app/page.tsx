import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { BookOpen, Lightbulb, ArrowRight } from "lucide-react"

export default async function HomePage() {

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="flex items-center justify-center px-6 py-24 pt-32 border-b border-border">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter mb-8 leading-[0.95] animate-fade-in">
            You've probably never seen this before
          </h1>
          <p className="text-base md:text-lg lg:text-xl tracking-wide max-w-3xl mx-auto leading-relaxed opacity-70 animate-fade-in-up">
            I create fashion blends that make you reimagine the concept of <span className="italic font-semibold">wearable art</span>
          </p>
        </div>
      </section>

      {/* Exploration Cards Section */}
      <section className="py-24 px-6 bg-secondary/30 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

            {/* Schoolwork Card */}
            <Link
              href="/schoolwork"
              className="group bg-card border border-border p-8 md:p-10 transition-all duration-500 hover:border-foreground hover:shadow-2xl "
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <BookOpen className="w-10 h-10 md:w-12 md:h-12 stroke-[1.5] transition-transform duration-500 group-hover:scale-110" />
                </div>

                <h3 className="font-serif text-3xl md:text-4xl font-black italic uppercase tracking-tighter mb-4">
                  Schoolwork
                </h3>

                <p className="text-sm md:text-base opacity-70 leading-relaxed mb-8 grow">
                  Explore my curated collection of design projects, creative experiments, and fashion studies that push boundaries.
                </p>

                <div className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold group-hover:gap-4 transition-all duration-300">
                  View Projects
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* Brain Dump Card */}
            <Link
              href="/braindump"
              className="group bg-card border border-border p-8 md:p-10 transition-all duration-500 hover:border-foreground hover:shadow-2xl "
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <Lightbulb className="w-10 h-10 md:w-12 md:h-12 stroke-[1.5] transition-transform duration-500 group-hover:scale-110" />
                </div>

                <h3 className="font-serif text-3xl md:text-4xl font-black italic uppercase tracking-tighter mb-4">
                  Brain Dump
                </h3>

                <p className="text-sm md:text-base opacity-70 leading-relaxed mb-8 grow">
                  Raw thoughts, feelings and random creative moments translated into design.
                </p>

                <div className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold group-hover:gap-4 transition-all duration-300">
                  View Projects
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>
      <section className=" border-t border-b border-border  py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-12">
            The Vision
          </h2>
          <p className="text-sm md:text-base uppercase tracking-[0.5em] font-bold max-w-3xl mx-auto leading-loose opacity-70 italic">
            "Fashion is not just about what we wear, but how we inhabit the space around us through the textiles we choose."
          </p>
        </div>
      </section>
      <Footer />
    </div>
  )
}
