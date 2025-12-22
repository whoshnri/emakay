"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X } from "lucide-react"

// Mock data until the database is connected
const mockBrainDump = [
  {
    id: '1',
    title: 'Experimental Garment #1',
    description: 'A fusion of organic and synthetic textures.',
    coverImage: 'https://via.placeholder.com/300x200',
    gallery: [],
    published: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    title: 'Deconstructed Jacket',
    description: 'Classic tailoring reimagined with raw edges.',
    coverImage: 'https://via.placeholder.com/300x200',
    gallery: [],
    published: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const mockSiteSettings = {
  contactEmail: 'xyz@gmail.com',
};

export default function BrainDumpPage() {
  const [selectedItem, setSelectedItem] = useState<(typeof mockBrainDump)[0] | null>(null)

  const handleOrder = () => {
    if (selectedItem) {
      window.location.href = `mailto:${mockSiteSettings.contactEmail}?subject=Inquiry about: ${selectedItem.title}&body=I would like to inquire about the ${selectedItem.title}.`
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-serif text-3xl font-bold mb-4">Brain Dump</h1>
          <p className="text-muted-foreground mb-12">
            Anything in the Brain Dump can be bought.
            Contact: <a href={`mailto:${mockSiteSettings.contactEmail}`} className="underline">{mockSiteSettings.contactEmail}</a>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockBrainDump.map((item) => (
              <Card
                key={item.id}
                className="group cursor-pointer border-0 shadow-none"
                onClick={() => setSelectedItem(item)}
              >
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={item.coverImage || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 space-y-2">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setSelectedItem(null)}>
          <Card className="relative max-w-3xl border border-foreground mx-4 p-0 rounded-none max-h-[90%]" onClick={(e) => e.stopPropagation()}>
            <span onClick={() => setSelectedItem(null)} className="absolute -top-3 -right-4 bg-foreground p-2 text-background">
              <X className="w-4 h-4"/>
            </span>
            <CardContent className="p-0 flex">
              <div className=" aspect-square overflow-hidden bg-muted p-0 w-[50%]">
                <img
                  src={selectedItem.coverImage || "/placeholder.svg"}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col">
                <h2 className="bg-foreground text-background font-serif text-lg font-bold mb-6 text-center uppercase py-3">Inquire about Item</h2>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="font-medium text-lg mb-2">{selectedItem.title}</h3>
                    <p className="text-sm text-muted-foreground">{selectedItem.description}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 mt-auto">
                  <Button onClick={handleOrder} className="flex-1 h-12">
                    Contact to Inquire
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
      <Footer />
    </div>
  )
}
