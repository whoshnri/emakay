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
    <div className="fixed inset-0 z-50 items-center flex justify-center bg-black/80" onClick={onClose}>
      <div className="relative max-w-[50%] max-h-[90%] overflow-hidden p-4">
        {/* <span
          onClick={onClose}
          className="absolute -top-2 -right-2 z-10 p-3 flex items-center bg-background/80 backdrop-blur-sm cursor-pointer"
        >
          <X className="h-4 w-4" />
        </span> */}
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className="aspect-square object-contain w-full h-full"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  )
}
