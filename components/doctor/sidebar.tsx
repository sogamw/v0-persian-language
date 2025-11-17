'use client'

import Link from 'next/link'
import { Home, Calendar, Users, MessageSquare, FileText, Settings } from 'lucide-react'

export function DoctorSidebar() {
  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border">
      <div className="p-6 border-b border-sidebar-border">
        <h2 className="text-xl font-bold text-sidebar-primary">پنل پزشک</h2>
      </div>
      
      <nav className="p-4 space-y-2">
        <Link href="/doctor" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground">
          <Home className="w-5 h-5" />
          <span>داشبورد</span>
        </Link>
        
        <Link href="/doctor/appointments" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground">
          <Calendar className="w-5 h-5" />
          <span>نوبت‌های من</span>
        </Link>
        
        <Link href="/doctor/patients" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground">
          <Users className="w-5 h-5" />
          <span>بیماران</span>
        </Link>
        
        <Link href="/doctor/consultations" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground">
          <MessageSquare className="w-5 h-5" />
          <span>مشاوره‌ها</span>
        </Link>
        
        <Link href="/doctor/reports" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground">
          <FileText className="w-5 h-5" />
          <span>گزارش‌های پزشکی</span>
        </Link>
        
        <Link href="/doctor/settings" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground">
          <Settings className="w-5 h-5" />
          <span>تنظیمات</span>
        </Link>
      </nav>
    </aside>
  )
}
