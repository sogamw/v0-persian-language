'use client'

import { DoctorSidebar } from '@/components/doctor/sidebar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Users, MessageSquare, Clock } from 'lucide-react'

export default function DoctorDashboard() {
  const todayStats = [
    { title: 'نوبت‌های امروز', value: '8', icon: Calendar, color: 'text-primary' },
    { title: 'بیماران فعال', value: '156', icon: Users, color: 'text-accent' },
    { title: 'مشاوره‌های انتظار', value: '5', icon: MessageSquare, color: 'text-primary' },
    { title: 'ساعات کاری باقی‌مانده', value: '4', icon: Clock, color: 'text-accent' }
  ]

  return (
    <div className="flex h-screen bg-background">
      <DoctorSidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">داشبورد پزشک</h1>
            <p className="text-muted-foreground">دکتر سارا میرزایی - متخصص سلامت زنان</p>
          </div>

          {/* Today Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {todayStats.map((stat) => {
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
                </Card>
              )
            })}
          </div>

          {/* Today Schedule */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>برنامه‌ی امروز</CardTitle>
                  <CardDescription>نوبت‌های رزرو شده برای امروز</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { time: '09:00', patient: 'فاطمه رضایی', type: 'مشاوره، مشکل قاعدگی' },
                      { time: '10:00', patient: 'مریم شریفی', type: 'بررسی دوره بارداری' },
                      { time: '11:00', patient: 'نازنین احمدی', type: 'مشاوره تغذیه' },
                      { time: '14:00', patient: 'زهرا رفیعی', type: 'بررسی نتایج آزمایش' },
                      { time: '15:00', patient: 'علا کریمی', type: 'مشاوره ورزشی' },
                    ].map((appointment, i) => (
                      <div key={i} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted transition-colors">
                        <div>
                          <p className="font-medium text-foreground">{appointment.patient}</p>
                          <p className="text-sm text-muted-foreground">{appointment.type}</p>
                        </div>
                        <div className="text-left">
                          <p className="font-bold text-primary">{appointment.time}</p>
                          <Button size="sm" variant="ghost">شروع</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Pending Consultations */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle>مشاوره‌های در انتظار</CardTitle>
                <CardDescription>5 مشاوره منتظر پاسخ</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    'سوال درباره علائم قاعدگی نامنظم',
                    'مشاوره رژیم غذایی برای بارداری',
                    'سؤال درباره ورزش و فعالیت',
                    'مشکل خواب و استراحت',
                    'سوال درباره تغذیه نوجوان'
                  ].map((consultation, i) => (
                    <div key={i} className="p-3 bg-secondary/50 rounded-lg text-sm">
                      <p className="text-foreground">{consultation}</p>
                      <Button size="sm" className="mt-2 w-full" variant="ghost">
                        پاسخ دهی
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
