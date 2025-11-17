'use client'

import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CarouselProps {
  children: React.ReactNode[]
  itemsPerView?: number
}

export function Carousel({ children, itemsPerView = 3 }: CarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isScrolling, setIsScrolling] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<'left' | 'right' | null>(null)

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      setIsScrolling(true)
      setScrollDirection(direction)
      const scrollAmount = 400
      const newScrollLeft = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })

      setTimeout(() => {
        setIsScrolling(false)
        setScrollDirection(null)
      }, 600)
    }
  }

  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className="absolute -right-12 z-10 transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-primary hover:text-white"
        >
          <ChevronRight className="w-4 h-4 transition-transform duration-300" />
        </Button>

        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-2 [-webkit-overflow-scrolling:touch] transition-all duration-300"
          style={{ scrollBehavior: 'smooth' }}
        >
          {children && Array.isArray(children) && children.map((child, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                isScrolling ? 'opacity-90' : 'opacity-100'
              }`}
              style={{
                animation: scrollDirection 
                  ? `${scrollDirection === 'right' ? 'slideInRight' : 'slideInLeft'} 0.6s ease-out ${index * 0.08}s both`
                  : `slideIn 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {child}
            </div>
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className="absolute -left-12 z-10 transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-primary hover:text-white"
        >
          <ChevronLeft className="w-4 h-4 transition-transform duration-300" />
        </Button>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideOut {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-20px);
          }
        }
      `}</style>
    </div>
  )
}

export function CarouselItem({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`flex-shrink-0 w-80 ${className}`}>
      {children}
    </div>
  )
}
