'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import { Button } from "@/componentss/ui/button"
import { ChevronLeft, ChevronRight, Pause } from 'lucide-react'

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const slides = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Post%203-te6khPbiYv4amsnxDJcn2nXLJW9u8f.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KRV%20Promo%20Post%20Sept%2025%202024-xfJKzmNwDz7XKFb3odW87Zgaei31E0.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KRV%20Promo%20Post%20Feb%2021-8pqtemPaHMsm4uvFjhfzdvjpC9wEU8.png"
  ]

  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isPlaying, slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="relative flex h-full flex-col gap-4">
      {/* Carousel Container */}
      <div className="relative h-full w-full overflow-hidden rounded-xl">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute h-full w-full transition-opacity duration-500 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide || "/placeholder.svg"}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="absolute -bottom-12 left-1/2 flex -translate-x-1/2 items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="text-gray-600 hover:text-gray-900"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="text-gray-600 hover:text-gray-900"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={togglePlayPause}
          className="text-gray-600 hover:text-gray-900"
        >
          <Pause className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}

