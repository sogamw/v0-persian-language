'use client'

import Link from 'next/link'
import { Users, ClipboardList, Settings, MessageSquare, BarChart3, Home } from 'lucide-react'

export function AdminSidebar() {
  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border">
      <div className="p-6 border-b border-sidebar-border">
        <h2 className="text-xl font-bold text-sidebar-primary">سلامت زنان</h2>
      </div>
      
      <nav className="p-4 space-y-2">
        <Link href="/admin" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground">
          <Home className="w-5 h-5" />
          <span>داشبورد</span>
        </Link>
        
        <Link href="/admin/users" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground">
          <Users className="w-5 h-5" />
          <span>مدیریت کاربران</span>
        </Link>
        
        <Link href="/admin/doctors" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground">
          <ClipboardList className="w-5 h-5" />
          <span>مدیریت پزشکان</span>
        </Link>
        
        <Link href="/admin/appointments" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground">
          <MessageSquare className="w-5 h-5" />
          <span>نوبت‌ها و مشاوره</span>
        </Link>
        
        <Link href="/admin/analytics" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground">
          <BarChart3 className="w-5 h-5" />
          <span>گزارش‌ها</span>
        </Link>
        
        <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground">
          <Settings className="w-5 h-5" />
          <span>تنظیمات</span>
        </Link>
      </nav>
    </aside>
  )
}
