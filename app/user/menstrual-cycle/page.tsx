'use client'

import { UserSidebar } from '@/components/user/sidebar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, Calendar, TrendingUp, AlertCircle, Info } from 'lucide-react'
import { useState } from 'react'

export default function MenstrualCycle() {
  const [showLog, setShowLog] = useState(false)

  return (
    <div className="flex h-screen bg-background">
      <UserSidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">چرخه قاعدگی</h1>
            <p className="text-muted-foreground">نمایش اطلاعات دقیق چرخه قاعدگی شما</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* Current Cycle Info */}
              <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle>چرخه فعلی</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">روز چرخه</p>
                      <p className="text-3xl font-bold text-primary">14</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">روز شروع</p>
                      <p className="text-xl font-bold">1 فروردین</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">مدت دوره</p>
                      <p className="text-xl font-bold">5 روز</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">نوع</p>
                      <p className="text-xl font-bold text-green-600">منظم</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cycle Phases */}
              <Card>
                <CardHeader>
                  <CardTitle>فازهای چرخه</CardTitle>
                  <CardDescription>هر فاز نیاز‌های مختلفی دارد</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: 'فاز قاعدگی', days: '1-5', color: 'bg-red-100', description: 'حالات خلقی تغییر‌پذیر، خستگی' },
                    { name: 'فاز فولیکولی', days: '6-13', color: 'bg-yellow-100', description: 'انرژی بالا، تمرکز خوب' },
                    { name: 'فاز تخمک‌گذاری', days: '14-15', color: 'bg-pink-100', description: 'حداکثر باروری' },
                    { name: 'فاز لوتئال', days: '16-28', color: 'bg-purple-100', description: 'احساسات عمیق‌تر' },
                  ].map((phase, i) => (
                    <div key={i} className={`${phase.color} rounded-lg p-4`}>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-bold text-foreground">{phase.name}</p>
                          <p className="text-sm text-muted-foreground">روز‌های {phase.days}</p>
                        </div>
                      </div>
                      <p className="text-sm">{phase.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Cycle Calendar */}
              <Card>
                <CardHeader>
                  <CardTitle>تقویم چرخه</CardTitle>
                  <CardDescription>نمایش گرافیکی چرخه 3 ماه آینده</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {['فروردین', 'اردیبهشت', 'خردادماه'].map((month, mi) => (
                      <div key={mi}>
                        <p className="font-medium text-foreground mb-2">{month}</p>
                        <div className="flex gap-1 flex-wrap">
                          {Array.from({ length: 30 }).map((_, i) => {
                            let color = 'bg-gray-100'
                            if (i + 1 <= 5) color = 'bg-red-200'
                            else if (i + 1 <= 13) color = 'bg-yellow-200'
                            else if (i + 1 <= 15) color = 'bg-pink-200'
                            else if (i + 1 <= 28) color = 'bg-purple-200'
                            return (
                              <button
                                key={i}
                                className={`w-8 h-8 rounded text-xs font-medium ${color} hover:opacity-80 transition-opacity`}
                                title={`${i + 1} ${month}`}
                              >
                                {i + 1}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Symptoms Log */}
              <Card>
                <CardHeader>
                  <CardTitle>علائم</CardTitle>
                  <CardDescription>علائم ثبت شده این دوره</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" onClick={() => setShowLog(!showLog)} className="w-full mb-4">
                    {showLog ? 'بستن' : 'ثبت علائم'}
                  </Button>
                  {showLog && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {['درد شکم', 'سردرد', 'خستگی', 'تورم پستان', 'تغییر خلق', 'تشنج عضلات', 'بی‌خوابی', 'تمرکز کم', 'تحریک‌پذیری'].map((symptom) => (
                        <button
                          key={symptom}
                          className="p-2 border border-border rounded-lg hover:bg-secondary transition-colors text-sm"
                        >
                          {symptom}
                        </button>
                      ))}
                    </div>
                  )}
                  <div className="mt-4 space-y-2">
                    <p className="font-medium text-foreground">علائم ثبت شده:</p>
                    <div className="flex flex-wrap gap-2">
                      {['درد شکم', 'خستگی'].map((symptom) => (
                        <span key={symptom} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                          {symptom}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Predictions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">پیش‌بینی‌ها</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-red-100 rounded-lg">
                    <p className="text-sm font-medium mb-1">قاعدگی بعدی</p>
                    <p className="font-bold text-lg">29 فروردین</p>
                  </div>
                  <div className="p-3 bg-pink-100 rounded-lg">
                    <p className="text-sm font-medium mb-1">تخمک‌گذاری</p>
                    <p className="font-bold text-lg">14 اردیبهشت</p>
                  </div>
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <p className="text-sm font-medium mb-1">فاز باروری</p>
                    <p className="font-bold text-lg">12-16 اردیبهشت</p>
                  </div>
                </CardContent>
              </Card>

              {/* Health Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">نکات سلامتی</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 border border-blue-200 bg-blue-50 rounded-lg">
                    <p className="text-sm">
                      این دوره‌ها از روز 1 تا 5 است. مراقب علائم ناخوشایند باشید.
                    </p>
                  </div>
                  <div className="p-3 border border-green-200 bg-green-50 rounded-lg">
                    <p className="text-sm">
                      روز‌های 6-13 انرژی بالایی دارید. بهترین وقت برای ورزش است.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Statistics */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">آمار</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">میانگین دوره</span>
                    <span className="font-bold">28 روز</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">مدت دوره</span>
                    <span className="font-bold">5-6 روز</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">منظم بودن</span>
                    <span className="font-bold text-green-600">عالی</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">سابقه ثبتی</span>
                    <span className="font-bold">12 ماه</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
