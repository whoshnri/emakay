"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ImageModal } from "@/components/image-modal"

const portfolioItems = [
  {
    id: 1,
    src: "/elegant-black-dress-model.png",
    alt: "Evening Collection - Black Silk Dress",
    description: "Minimalist evening wear with architectural silhouette",
  },
  {
    id: 2,
    src: "/minimalist-white-blazer.png",
    alt: "Contemporary Blazer",
    description: "Structured blazer in premium wool blend",
  },
  {
    id: 3,
    src: "/beige-trench-coat-model.png",
    alt: "Signature Trench",
    description: "Reimagined classic with modern proportions",
  },
  {
    id: 4,
    src: "/geometric-dress-fashion.png",
    alt: "Geometric Print Dress",
    description: "Hand-printed silk with abstract motifs",
  },
  {
    id: 5,
    src: "/minimalist-white-shirt-model.png",
    alt: "Essential Shirt",
    description: "Perfect proportions in organic cotton",
  },
  {
    id: 6,
    src: "/black-leather-jacket-fashion.png",
    alt: "Leather Jacket",
    description: "Handcrafted from ethically sourced leather",
  },
]

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState<(typeof portfolioItems)[0] | null>(null)

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="minimal-grid">
            {portfolioItems.map((item) => (
              <div key={item.id} className="group cursor-pointer" onClick={() => setSelectedImage(item)}>
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 space-y-1">
                  <h3 className="font-medium text-sm">{item.alt}</h3>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      <ImageModal
        src={selectedImage?.src || ""}
        alt={selectedImage?.alt || ""}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  )
}
