"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageModalProps {
  src: string
  alt: string
  isOpen: boolean
  onClose: () => void
}

export function ImageModal({ src, alt, isOpen, onClose }: ImageModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 items-center flex justify-center bg-black/95 transition-all duration-500 p-4 md:p-12"
      onClick={onClose}
    >
      <div className="relative max-w-full max-h-full overflow-hidden border border-white/5 bg-background shadow-2xl">
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className="object-contain w-auto h-[80vh] rounded-none shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent backdrop-blur-[2px] opacity-0 hover:opacity-100 transition-opacity duration-500">
          <p className="text-white text-[10px] uppercase tracking-[0.4em] font-bold text-center italic">{alt}</p>
        </div>
      </div>
      <button
        onClick={onClose}
        className="absolute top-12 right-12 text-white/30 hover:text-white transition-all duration-300 group"
      >
        <X className="w-8 h-8 stroke-1 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  )
}
