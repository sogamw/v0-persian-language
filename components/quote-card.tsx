'use client'

import { Heart } from 'lucide-react'

export function QuoteCard() {
  return (
    <div className="relative my-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-gradient-to-r from-pink-50 to-white rounded-3xl border border-pink-200 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          {/* Decorative hearts background */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
            <Heart className="w-full h-full fill-primary text-primary" />
          </div>
          <div className="absolute bottom-0 left-0 w-24 h-24 opacity-5">
            <Heart className="w-full h-full fill-primary text-primary" />
          </div>

          <div className="relative flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
            {/* Text Content */}
            <div className="flex-1 text-right">
              <div className="flex items-center justify-end gap-2 mb-6">
                <Heart className="w-6 h-6 text-primary fill-primary animate-pulse" />
                <h3 className="text-2xl font-bold text-foreground">پیام محبت</h3>
              </div>
              
              <p className="text-lg leading-relaxed text-muted-foreground mb-4 italic font-serif">
                {`"تو نه تنها یک بدن نیستی، تو احساس، تو رویا، تو امید است.
                درونت یک قلب می‌تپد که هر روز برای تو می‌جنگد.
                خود را دوست بدار، چون تو شایسته‌ی محبت‌های جهان هستی."`}
              </p>

              <div className="text-primary font-semibold">
                - سامانه سلامت زنان
              </div>
            </div>

            {/* Image */}
            <div className="flex-shrink-0">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/719d158822e67bff1c6ea0571c70665a-A6BGmAh86WsYqVyxI002bZvhlkAgx1.jpg"
                alt="زن با قلب"
                className="w-48 h-48 object-contain animate-in fade-in slide-in-from-left duration-500"
              />
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-4 left-4 text-pink-300 opacity-30">
            <Heart className="w-4 h-4 fill-current" />
          </div>
          <div className="absolute bottom-4 right-4 text-pink-300 opacity-30">
            <Heart className="w-4 h-4 fill-current" />
          </div>
        </div>
      </div>
    </div>
  )
}
