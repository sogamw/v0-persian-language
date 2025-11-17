'use client'

import { useState, useEffect } from 'react'
import { Heart, Stethoscope, Lightbulb, BookOpen, Share2, Phone } from 'lucide-react'
import Link from 'next/link'

export function BottomNav() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // نمایش هنگام اسکرول به بالا، مخفی هنگام اسکرول به پایین
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      {/* Bottom Navigation Bar */}
      <nav 
        className={`fixed bottom-0 left-0 right-0 bg-white border-t border-pink-100 z-40 transition-transform duration-300 shadow-2xl ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 relative">
            
            {/* سمت راست: کلینیک و توصیه روزانه */}
            <div className="flex items-center gap-8">
              <Link href="/clinic" className="group flex flex-col items-center gap-1 hover:text-pink-500 transition-colors">
                <Stethoscope className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="text-xs text-muted-foreground group-hover:text-pink-500">کلینیک</span>
              </Link>
              <Link href="/daily-tips" className="group flex flex-col items-center gap-1 hover:text-pink-500 transition-colors">
                <Lightbulb className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="text-xs text-muted-foreground group-hover:text-pink-500">توصیه روزانه</span>
              </Link>
            </div>

            {/* وسط: دایره قلبی */}
            <Link href="/" className="flex justify-center">
              <div className={`transition-all duration-300 ${
                isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
              }`}>
                <button className="relative group">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 animate-bounce" style={{ animationDuration: '2s' }}>
                    <Heart className="w-8 h-8 text-white fill-white" />
                  </div>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">خانه</span>
                </button>
              </div>
            </Link>

            {/* سمت چپ: مقالات و اشتراک تجربه */}
            <div className="flex items-center gap-8">
              <Link href="/articles" className="group flex flex-col items-center gap-1 hover:text-pink-500 transition-colors">
                <BookOpen className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="text-xs text-muted-foreground group-hover:text-pink-500">مقالات</span>
              </Link>
              <Link href="/share" className="group flex flex-col items-center gap-1 hover:text-pink-500 transition-colors">
                <Share2 className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="text-xs text-muted-foreground group-hover:text-pink-500">اشتراک تجربه</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Link href="/support" className="fixed right-6 bottom-32 z-50 group">
        <button className="w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 text-white">
          <Phone className="w-6 h-6" />
        </button>
        <span className="absolute -left-32 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white text-xs font-medium px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          پشتیبانی آنلاین
        </span>
      </Link>
    </>
  )
}
