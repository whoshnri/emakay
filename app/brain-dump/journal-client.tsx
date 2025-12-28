"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface Post {
    id: string
    title: string
    description: string
    coverImage: string
    gallery: string[]
    published: boolean
    createdAt: Date
    updatedAt: Date
}

interface JournalClientProps {
    posts: Post[]
    contactEmail: string
}

export function JournalClient({ posts, contactEmail }: JournalClientProps) {
    const [selectedItem, setSelectedItem] = useState<Post | null>(null)

    const handleOrder = () => {
        if (selectedItem) {
            window.location.href = `mailto:${contactEmail}?subject=Inquiry about: ${selectedItem.title}&body=I would like to inquire about the ${selectedItem.title}.`
        }
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {posts.map((item) => (
                    <div
                        key={item.id}
                        className="group cursor-pointer space-y-8"
                        onClick={() => setSelectedItem(item)}
                    >
                        <div className="aspect-square overflow-hidden bg-muted border border-border/50 relative">
                            <img
                                src={item.coverImage || "/placeholder.svg"}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />np
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-serif text-2xl italic font-bold tracking-tight uppercase leading-none">{item.title}</h3>
                            <p className="text-[10px] uppercase tracking-[0.3em] font-black text-muted-foreground leading-relaxed line-clamp-3">
                                {item.description}
                            </p>
                            <div className="pt-4 flex items-center gap-4">
                                <div className="h-px w-8 bg-foreground group-hover:w-12 transition-all" />
                                <span className="text-[10px] uppercase tracking-[0.5em] font-black opacity-50 group-hover:opacity-100 transition-opacity">Expand</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/15 backdrop-blur-sm p-4" onClick={() => setSelectedItem(null)}>
                    <div
                        className="relative max-w-5xl w-full bg-background border border-border flex flex-col md:flex-row overflow-hidden h-fit max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedItem(null)}
                            className="absolute top-4 right-4 z-10 text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <X className="w-6 h-6 stroke-1" />
                        </button>

                        <div className="md:w-3/5 aspect-square md:aspect-auto overflow-hidden bg-muted border-r border-border">
                            <img
                                src={selectedItem.coverImage || "/placeholder.svg"}
                                alt={selectedItem.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="md:w-2/5 p-12 flex flex-col justify-between">
                            <div className="space-y-12">
                                <header className="space-y-4">
                                    <div className="text-[10px] uppercase tracking-[0.5em] font-black text-muted-foreground italic">Journal Entry</div>
                                    <h2 className="font-serif text-4xl font-black italic uppercase tracking-tighter leading-none">{selectedItem.title}</h2>
                                </header>

                                <p className="text-sm uppercase tracking-widest leading-loose font-medium opacity-70">
                                    {selectedItem.description}
                                </p>

                                {selectedItem.gallery && selectedItem.gallery.length > 0 && (
                                    <div className="grid grid-cols-3 gap-2">
                                        {selectedItem.gallery.map((img, i) => (
                                            <div key={i} className="aspect-square bg-muted">
                                                <img src={img} className="w-full h-full object-cover grayscale px-0.5" />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="mt-24 space-y-4">
                                <Button
                                    onClick={handleOrder}
                                    className="w-full h-16 uppercase tracking-[0.5em] font-black italic text-xs hover:bg-foreground hover:text-background transition-all"
                                >
                                    Inquire Now
                                </Button>
                                <div className="text-[9px] uppercase tracking-[0.2em] font-bold text-center text-muted-foreground opacity-50">
                                    Curated & Authenticated by EMA KAY
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
