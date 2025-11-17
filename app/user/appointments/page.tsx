'use client'

import { UserSidebar } from '@/components/user/sidebar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, MapPin, Phone, MessageSquare, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export default function UserAppointments() {
  const [showBooking, setShowBooking] = useState(false)
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null)

  const doctors = [
    { id: '1', name: 'دکتر سارا میرزایی', specialty: 'متخصص سلامت زنان', rating: 4.8, reviews: 124 },
    { id: '2', name: 'دکتر علی احمدی', specialty: 'متخصص تغذیه زنان', rating: 4.7, reviews: 98 },
    { id: '3', name: 'دکتر مریم شریفی', specialty: 'متخصص دوران بارداری', rating: 4.9, reviews: 156 },
    { id: '4', name: 'دکتر نازنین رفیعی', specialty: 'متخصص سلامت نوجوان', rating: 4.6, reviews: 87 },
  ]

  const appointments = [
    { date: '1404/1/15', time: '10:00', doctor: 'دکتر سارا میرزایی', status: 'تایید شده', type: 'مشاوره' },
    { date: '1404/1/20', time: '14:00', doctor: 'دکتر علی احمدی', status: 'تایید شده', type: 'بررسی تغذیه' },
  ]

  const consultations = [
    { id: '1', title: 'سوال درباره علائم قاعدگی نامنظم', doctor: 'دکتر سارا میرزایی', status: 'جواب انتظار', date: '1404/1/10' },
    { id: '2', title: 'مشاوره رژیم غذایی', doctor: 'دکتر علی احمدی', status: 'پاسخ داده شده', date: '1404/1/8' },
  ]

  return (
    <div className="flex h-screen bg-background">
      <UserSidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">نوبت‌ها و مشاوره</h1>
            <p className="text-muted-foreground">رزرو نوبت یا مشاوره آنلاین با پزشکان</p>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b border-border">
            <button className="pb-2 px-4 border-b-2 border-primary font-medium text-primary">
              نوبت‌های من
            </button>
            <button className="pb-2 px-4 text-muted-foreground hover:text-foreground">
              مشاوره‌های آنلاین
            </button>
            <button className="pb-2 px-4 text-muted-foreground hover:text-foreground">
              رزرو جدید
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* Upcoming Appointments */}
              <Card>
                <CardHeader>
                  <CardTitle>نوبت‌های آینده</CardTitle>
                  <CardDescription>نوبت‌های رزرو شده شما</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {appointments.length > 0 ? (
                    appointments.map((apt, i) => (
                      <div key={i} className="border border-border rounded-lg p-4 hover:bg-secondary/50 transition-colors">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="font-bold text-foreground">{apt.doctor}</p>
                            <p className="text-sm text-muted-foreground">{apt.type}</p>
                          </div>
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                            {apt.status}
                          </span>
                        </div>
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
                        <div className="flex gap-2 mt-4">
                          <Button size="sm" variant="outline">تغییر</Button>
                          <Button size="sm" variant="outline">لغو</Button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-muted-foreground py-4">هیچ نوبت رزرو شده‌ای ندارید</p>
                  )}
                </CardContent>
              </Card>

              {/* Online Consultations */}
              <Card>
                <CardHeader>
                  <CardTitle>مشاوره‌های آنلاین</CardTitle>
                  <CardDescription>مشاوره‌های متنی و تصویری</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {consultations.map((consultation) => (
                    <div key={consultation.id} className="border border-border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-bold text-foreground">{consultation.title}</p>
                          <p className="text-sm text-muted-foreground">{consultation.doctor}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          consultation.status === 'پاسخ داده شده' 
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {consultation.status}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">{consultation.date}</p>
                      <Button size="sm" variant="ghost" className="w-full justify-start">
                        <MessageSquare className="w-4 h-4 ml-2" />
                        مشاهده مشاوره
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Book New Appointment */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">رزرو نوبت جدید</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" onClick={() => setShowBooking(!showBooking)}>
                    <Calendar className="w-4 h-4 ml-2" />
                    رزرو نوبت
                  </Button>
                </CardContent>
              </Card>

              {/* Doctor Selection */}
              {showBooking && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">انتخاب پزشک</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 max-h-96 overflow-y-auto">
                    {doctors.map((doctor) => (
                      <button
                        key={doctor.id}
                        onClick={() => setSelectedDoctor(doctor.id)}
                        className={`w-full text-right p-3 rounded-lg border transition-colors ${
                          selectedDoctor === doctor.id
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:bg-secondary/50'
                        }`}
                      >
                        <p className="font-medium text-foreground">{doctor.name}</p>
                        <p className="text-xs text-muted-foreground mb-1">{doctor.specialty}</p>
                        <div className="flex items-center gap-1 text-xs text-yellow-600">
                          <span>⭐ {doctor.rating}</span>
                          <span>({doctor.reviews})</span>
                        </div>
                      </button>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* Consultation Types */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">نوع مشاوره</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="w-4 h-4 ml-2" />
                    تماس تلفنی
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="w-4 h-4 ml-2" />
                    مشاوره متنی
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="w-4 h-4 ml-2" />
                    ویدئو کال
                  </Button>
                </CardContent>
              </Card>

              {/* Support */}
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">نیاز به کمک؟</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-3">تیم پشتیبانی ما آماده کمک است</p>
                  <Button size="sm" className="w-full">تماس با پشتیبانی</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
