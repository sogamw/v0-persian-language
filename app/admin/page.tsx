'use client'

import { AdminSidebar } from '@/components/admin/sidebar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, ClipboardList, MessageSquare, TrendingUp } from 'lucide-react'

export default function AdminDashboard() {
  const stats = [
    {
      title: 'کل کاربران',
      value: '1,234',
      icon: Users,
      change: '+12% این ماه',
      color: 'text-primary'
    },
    {
      title: 'پزشکان فعال',
      value: '45',
      icon: ClipboardList,
      change: '+3 پزشک جدید',
      color: 'text-accent'
    },
    {
      title: 'نوبت‌های رزرو شده',
      value: '567',
      icon: MessageSquare,
      change: '+34% این ماه',
      color: 'text-primary'
    },
    {
      title: 'مشاوره‌های فعال',
      value: '89',
      icon: TrendingUp,
      change: '+15 امروز',
      color: 'text-accent'
    }
  ]

  return (
    <div className="flex h-screen bg-background">
      <AdminSidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">داشبورد ادمین</h1>
            <p className="text-muted-foreground">خوش آمدید به سامانه مدیریت سلامت زنان</p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <Card key={stat.title}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardDescription>{stat.title}</CardDescription>
                        <CardTitle className="text-3xl mt-2">{stat.value}</CardTitle>
                      </div>
                      <Icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{stat.change}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Recent Activity */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>فعالیت‌های اخیر</CardTitle>
              <CardDescription>آخرین تغییرات در سامانه</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { user: 'فاطمه رضایی', action: 'ثبت‌نام کرد', time: '2 ساعت پیش' },
                  { user: 'دکتر علی احمدی', action: 'پروفایل به‌روزرسانی کرد', time: '3 ساعت پیش' },
                  { user: 'مریم شریفی', action: 'یک نوبت رزرو کرد', time: '5 ساعت پیش' },
                  { user: 'دکتر سارا میرزایی', action: 'پروتکل درمانی اضافه کرد', time: '1 روز پیش' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-b-0">
                    <div>
                      <p className="font-medium text-foreground">{item.user}</p>
                      <p className="text-sm text-muted-foreground">{item.action}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>اقدامات سریع</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button variant="outline" className="w-full justify-center">
                  افزودن پزشک جدید
                </Button>
                <Button variant="outline" className="w-full justify-center">
                  مشاهده گزارش‌ها
                </Button>
                <Button variant="outline" className="w-full justify-center">
                  ارسال اطلاع‌رسانی
                </Button>
                <Button variant="outline" className="w-full justify-center">
                  تنظیمات سامانه
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
