"use client"

import { useState } from "react"
import { X } from "lucide-react"

interface SchoolWork {
    id: string
    title: string
    description: string
    coverImage: string
    gallery: string[]
    createdAt: Date
    updatedAt: Date
}

interface SchoolworkClientProps {
    works: SchoolWork[]
}

export function SchoolworkClient({ works }: SchoolworkClientProps) {
    const [selectedItem, setSelectedItem] = useState<SchoolWork | null>(null)

    return (
        <>
            {/* Project Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-20">
                {works.map((item, index) => (
                    <div
                        key={item.id}
                        className="group cursor-pointer block"
                        onClick={() => setSelectedItem(item)}
                    >
                        {/* Card Image */}
                        <div className="aspect-4/3 bg-muted border border-border/50 overflow-hidden relative">
                            <img
                                src={item.coverImage}
                                alt={item.title}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-background px-3 py-1.5 border border-border text-[9px] md:text-[10px] uppercase tracking-widest font-black">
                                Project {index + 1}
                            </div>
                        </div>

                        {/* Card Content */}
                        <div className="mt-4 md:mt-6">
                            <h2 className="font-serif text-xl md:text-2xl font-bold italic tracking-tight mb-2 md:mb-3">
                                {item.title}
                            </h2>
                            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                                {item.description}
                            </p>
                            <div className="mt-3 text-[9px] md:text-[10px] uppercase tracking-wider font-bold opacity-50 group-hover:opacity-100 transition-opacity">
                                View Details →
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Project Details Modal */}
            {selectedItem && (
                <div
                    className="fixed inset-0  z-50 flex items-center justify-center bg-background/15 backdrop-blur-sm p-0 md:p-8"
                    onClick={() => setSelectedItem(null)}
                >
                    <div
                        className="relative w-[80vw] max-h-[90vh] h-fit max-w-3xl bg-background border-0 md:border border-foreground shadow-2xl my-0 md:my-8 overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedItem(null)}
                            className="fixed md:absolute top-4 right-4 z-20 bg-background border border-border p-2 hover:bg-foreground hover:text-background transition-all"
                        >
                            <X className="w-4 h-4 md:w-5 md:h-5" />
                        </button>

                        {/* Modal Content */}
                        <div className="p-6 md:p-10 lg:p-12 space-y-8 md:space-y-10">
                            {/* Header */}
                            <header className="space-y-3 md:space-y-4 pr-12">
                                <div className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] font-black text-muted-foreground italic">
                                    Schoolwork Case Study
                                </div>
                                <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-black italic uppercase tracking-tighter leading-[0.85]">
                                    {selectedItem.title}
                                </h2>
                            </header>

                            {/* Cover Image */}
                            <div className="w-full aspect-video bg-muted border border-border overflow-hidden">
                                <img
                                    src={selectedItem.coverImage}
                                    alt={selectedItem.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Description */}
                            <p className="text-sm md:text-base leading-relaxed md:leading-loose opacity-80 max-w-2xl">
                                {selectedItem.description}
                            </p>

                            {/* Gallery */}
                            {selectedItem.gallery && selectedItem.gallery.length > 0 && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-4">
                                    {selectedItem.gallery.map((img, i) => (
                                        <div key={i} className="aspect-square bg-muted border border-border overflow-hidden">
                                            <img
                                                src={img}
                                                alt={`Gallery image ${i + 1}`}
                                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Footer */}
                            <footer className="pt-8 md:pt-12 border-t border-border">
                                <button
                                    onClick={() => setSelectedItem(null)}
                                    className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] font-black hover:opacity-50 transition-opacity"
                                >
                                    ← Back to Overview
                                </button>
                            </footer>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
