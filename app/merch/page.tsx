"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X } from "lucide-react"

const merchItems = [
  {
    id: 1,
    name: "Signature Tote",
    price: "$120",
    image: "/minimalist-black-leather-tote.png",
    description: "Handcrafted leather tote with minimal branding",
  },
  {
    id: 2,
    name: "Cotton T-Shirt",
    price: "$45",
    image: "/white-organic-cotton-tee.png",
    description: "Organic cotton tee with subtle logo placement",
  },
  {
    id: 3,
    name: "Silk Scarf",
    price: "$85",
    image: "/geometric-silk-scarf.png",
    description: "Hand-printed silk scarf with signature pattern",
  },
  {
    id: 4,
    name: "Wool Beanie",
    price: "$35",
    image: "/placeholder-l0dwa.png",
    description: "Merino wool beanie in classic black",
  },
]

export default function MerchPage() {
  const [selectedItem, setSelectedItem] = useState<(typeof merchItems)[0] | null>(null)

  const handleOrder = () => {
    if (selectedItem) {
      window.location.href = `mailto:hello@designer.com?subject=Order: ${selectedItem.name}&body=I would like to order the ${selectedItem.name} (${selectedItem.price}). Please send me payment and shipping details.`
    }
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-serif text-3xl font-bold mb-12">Merchandise</h1>

          <div className="minimal-grid">
            {merchItems.map((item) => (
              <Card
                key={item.id}
                className="group cursor-pointer border-0 shadow-none"
                onClick={() => setSelectedItem(item)}
              >
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">{item.name}</h3>
                      <span className="font-medium">{item.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setSelectedItem(null)}>
          <Card className="relative max-w-3xl border border-foreground mx-4 p-0 rounded-none max-h-[90%]" onClick={(e) => e.stopPropagation()}>
            <span onClick={() => setSelectedItem(null)} className="absolute -top-3 -right-4 bg-foreground p-2 text-background">
              <X className="w-4 h-4"/>
            </span>
            <CardContent className="p-0 flex">
              <div className=" aspect-square overflow-hidden bg-muted p-0 w-[50%]">
                <img
                  src={selectedItem.image || "/placeholder.svg"}
                  alt={selectedItem.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col">
                <h2 className="bg-foreground text-background font-serif text-lg font-bold mb-6 text-center uppercase py-3">GET ITEM</h2>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="font-medium text-lg mb-2">{selectedItem.name}</h3>
                    <p className="text-sm text-muted-foreground">{selectedItem.description}</p>
                  </div>
                  <div className="text-right md:text-left">
                    <div className="text-2xl font-bold">{selectedItem.price}</div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 mt-auto">
                  <Button onClick={handleOrder} className="flex-1 h-12">
                    Contact to Order
                  </Button>
                  <Button variant={null} onClick={() => setSelectedItem(null)} className="h-12 border border-foreground">
                    Cancel
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
