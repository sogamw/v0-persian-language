'use client'

import { UserSidebar } from '@/components/user/sidebar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Baby, Calendar, Heart, AlertCircle, BookOpen, Users } from 'lucide-react'

export default function PregnancyTracker() {
  const pregnancyWeek = 20
  const dueDateDays = 140 // تقریبی

  return (
    <div className="flex h-screen bg-background">
      <UserSidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">چرخه بارداری</h1>
            <p className="text-muted-foreground">هفته به هفته رشد و تغییرات</p>
          </div>

          <div className="mb-8 rounded-lg overflow-hidden bg-gradient-to-r from-pink-50 to-rose-50 p-8 flex items-center justify-center">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ba9edddf1408b1ea57ba695eeeef8592-BelxU9LTSrY9dq419VlG9c0Xsrx614.jpg"
              alt="زن حامله"
              className="w-64 h-64 object-contain"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* Pregnancy Progress */}
              <Card className="bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
                <CardHeader>
                  <CardTitle>وضعیت بارداری</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-bold">هفته {pregnancyWeek}</span>
                      <span className="text-sm text-muted-foreground">{pregnancyWeek}/40</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-accent h-3 rounded-full transition-all"
                        style={{ width: `${(pregnancyWeek / 40) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">روز‌های باقی</p>
                      <p className="text-2xl font-bold text-accent">{dueDateDays}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">تاریخ تقریبی</p>
                      <p className="text-lg font-bold">15 مهرماه</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">سلامتی</p>
                      <p className="text-lg font-bold text-green-600">خوب</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Development Info */}
              <Card>
                <CardHeader>
                  <CardTitle>توسعه جنین - هفته {pregnancyWeek}</CardTitle>
                  <CardDescription>رشد و تغییرات</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <p className="font-medium text-foreground mb-2">سایز جنین:</p>
                    <p className="text-sm">تقریباً مثل موز (حدود 16 سانتی‌متر)</p>
                  </div>
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <p className="font-medium text-foreground mb-2">وزن:</p>
                    <p className="text-sm">حدود 300 گرم</p>
                  </div>
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <p className="font-medium text-foreground mb-2">تغییرات این هفته:</p>
                    <ul className="text-sm list-disc list-inside space-y-1">
                      <li>سوند‌های جنین بهتر شنیده می‌شوند</li>
                      <li>حرکات جنین محسوس‌تر هستند</li>
                      <li>ریه‌های جنین در حال توسعه است</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Health Checklist */}
              <Card>
                <CardHeader>
                  <CardTitle>چک‌لیست سلامتی</CardTitle>
                  <CardDescription>نکات مهم برای این دوره</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { task: 'مصرف ویتامین‌های پیشگیری‌کننده', done: true },
                    { task: 'تمرین‌های ملایم و نرمش', done: true },
                    { task: 'خواب کافی (7-9 ساعت)', done: false },
                    { task: 'تغذیه متوازن و حاوی پروتئین', done: true },
                    { task: 'نوشیدن کافی آب (8-10 لیوان)', done: false },
                    { task: 'معاینات دوره‌ای پزشک', done: true },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 border border-border rounded-lg">
                      <input type="checkbox" checked={item.done} readOnly className="w-5 h-5 text-primary" />
                      <span className={item.done ? 'text-muted-foreground line-through' : 'text-foreground'}>
                        {item.task}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Appointments */}
              <Card>
                <CardHeader>
                  <CardTitle>معاینات پزشک</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="border border-border rounded-lg p-4 hover:bg-secondary/50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-bold">معاینه سونوگرافی</p>
                        <p className="text-sm text-muted-foreground">بررسی وضعیت جنین</p>
                      </div>
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">انجام شد</span>
                    </div>
                    <p className="text-xs text-muted-foreground">15 فروردین 1404</p>
                  </div>
                  <div className="border border-border rounded-lg p-4 hover:bg-secondary/50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-bold">معاینه سه‌ماهه دوم</p>
                        <p className="text-sm text-muted-foreground">بررسی کامل</p>
                      </div>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">رزرو شده</span>
                    </div>
                    <p className="text-xs text-muted-foreground">20 اردیبهشت 1404</p>
                    <Button size="sm" className="mt-2 w-full">تغییر نوبت</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">اطلاعات سریع</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">تاریخ آخرین قاعدگی</p>
                    <p className="font-bold">20 دی 1403</p>
                  </div>
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">تاریخ زایمان تقریبی</p>
                    <p className="font-bold">15 مهرماه 1404</p>
                  </div>
                </CardContent>
              </Card>

              {/* Symptoms */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">علائم فعلی</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-sm">
                    <p className="font-medium mb-2">علائم کنونی:</p>
                    <div className="space-y-1">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" defaultChecked className="w-4 h-4" />
                        <span>حالت تهوع</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" defaultChecked className="w-4 h-4" />
                        <span>خستگی</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4" />
                        <span>سردرد</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4" />
                        <span>درد کمر</span>
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Important */}
              <Card className="border-yellow-200 bg-yellow-50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    اطلاعات مهم
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    اگر از علائمی مثل خون‌ریزی شدید، سردرد شدید، یا تنگی نفس احساس کنید، فوری با پزشک تماس بگیرید.
                  </p>
                </CardContent>
              </Card>

              {/* Resources */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">منابع</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <BookOpen className="w-4 h-4 ml-2" />
                    آموزش‌های بارداری
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Users className="w-4 h-4 ml-2" />
                    گروه‌های حمایتی
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
