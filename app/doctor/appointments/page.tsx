'use client'

import { DoctorSidebar } from '@/components/doctor/sidebar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, User, Phone, MessageSquare, CheckCircle, XCircle } from 'lucide-react'
import { useState } from 'react'

export default function DoctorAppointments() {
  const [filter, setFilter] = useState<'all' | 'today' | 'pending' | 'completed'>('all')

  const appointments = [
    { id: '1', patient: 'فاطمه رضایی', time: '09:00', date: '1404/1/12', status: 'تایید', type: 'مشاوره' },
    { id: '2', patient: 'مریم شریفی', time: '10:00', date: '1404/1/12', status: 'تایید', type: 'بررسی' },
    { id: '3', patient: 'نازنین احمدی', time: '11:00', date: '1404/1/12', status: 'منتظر', type: 'مشاوره' },
    { id: '4', patient: 'زهرا رفیعی', time: '14:00', date: '1404/1/12', status: 'تایید', type: 'بررسی' },
    { id: '5', patient: 'علا کریمی', time: '15:00', date: '1404/1/12', status: 'تکمیل شده', type: 'مشاوره' },
  ]

  const filteredAppointments = appointments.filter(apt => {
    if (filter === 'today') return apt.date === '1404/1/12'
    if (filter === 'pending') return apt.status === 'منتظر'
    if (filter === 'completed') return apt.status === 'تکمیل شده'
    return true
  })

  return (
    <div className="flex h-screen bg-background">
      <DoctorSidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">نوبت‌های من</h1>
            <p className="text-muted-foreground">مدیریت نوبت‌های بیماران</p>
          </div>

          {/* Filters */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {[
              { key: 'all', label: 'همه' },
              { key: 'today', label: 'امروز' },
              { key: 'pending', label: 'منتظر تأیید' },
              { key: 'completed', label: 'تکمیل شده' }
            ].map((f) => (
              <Button
                key={f.key}
                variant={filter === f.key ? 'default' : 'outline'}
                onClick={() => setFilter(f.key as any)}
              >
                {f.label}
              </Button>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Appointments List */}
              <div className="space-y-4">
                {filteredAppointments.map((apt) => (
                  <Card key={apt.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex gap-4 flex-1">
                          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <User className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <p className="font-bold text-foreground">{apt.patient}</p>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                apt.status === 'تایید'
                                  ? 'bg-green-100 text-green-800'
                                  : apt.status === 'منتظر'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}>
                                {apt.status}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">{apt.type}</p>
                            <div className="flex gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {apt.date}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {apt.time}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <Button size="sm" variant="ghost" title="شروع نوبت">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          </Button>
                          <Button size="sm" variant="ghost" title="لغو">
                            <XCircle className="w-5 h-5 text-red-600" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">آمار امروز</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">نوبت‌های کل</span>
                    <span className="font-bold text-2xl">5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">تایید شده</span>
                    <span className="font-bold text-green-600">4</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">منتظر</span>
                    <span className="font-bold text-yellow-600">1</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">تکمیل شده</span>
                    <span className="font-bold text-gray-600">1</span>
                  </div>
                </CardContent>
              </Card>

              {/* Consultation Requests */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">درخواست‌های مشاوره</CardTitle>
                  <CardDescription>5 درخواست جدید</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="w-4 h-4 ml-2" />
                    مشاوره‌های انتظار
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="w-4 h-4 ml-2" />
                    تماس‌های درخواستی
                  </Button>
                </CardContent>
              </Card>

              {/* Add Availability */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">افزودن نوبت</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <Calendar className="w-4 h-4 ml-2" />
                    ایجاد دسترسی جدید
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
