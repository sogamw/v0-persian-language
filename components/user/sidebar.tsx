'use client'

import Link from 'next/link'
import { Home, Heart, Baby, Calendar, BookOpen, Settings } from 'lucide-react'

export function UserSidebar() {
  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border">
      <div className="p-6 border-b border-sidebar-border">
        <h2 className="text-xl font-bold text-sidebar-primary">سلامت من</h2>
      </div>
      
      <nav className="p-4 space-y-2">
        <Link href="/user" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground">
          <Home className="w-5 h-5" />
          <span>خانه</span>
        </Link>
        
        <Link href="/user/menstrual-cycle" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground">
          <Heart className="w-5 h-5" />
          <span>چرخه قاعدگی</span>
        </Link>
        
        <Link href="/user/pregnancy" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground">
          <Baby className="w-5 h-5" />
          <span>چرخه بارداری</span>
        </Link>
        
        <Link href="/user/appointments" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground">
          <Calendar className="w-5 h-5" />
          <span>نوبت‌ها و مشاوره</span>
        </Link>
        
        <Link href="/user/health-library" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground">
          <BookOpen className="w-5 h-5" />
          <span>کتاب‌خانه سلامت</span>
        </Link>
        
        <Link href="/user/settings" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground">
          <Settings className="w-5 h-5" />
          <span>تنظیمات</span>
        </Link>
      </nav>
    </aside>
  )
}
