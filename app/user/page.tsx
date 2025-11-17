'use client'

import { UserSidebar } from '@/components/user/sidebar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, Baby, Calendar, BookOpen, AlertCircle } from 'lucide-react'
import { Carousel, CarouselItem } from '@/components/carousel'
import Link from 'next/link'

export default function UserDashboard() {
  const cycleItems = [
    { phase: 'حیضی', days: '1-5', color: 'from-red-400/20 to-red-500/20', description: 'دوره حیض' },
    { phase: 'جریانی', days: '6-12', color: 'from-pink-400/20 to-pink-500/20', description: 'افزایش فولیکل' },
    { phase: 'تخمک‌ریزی', days: '13-14', color: 'from-yellow-400/20 to-yellow-500/20', description: 'اوج فرتیلیتی' },
    { phase: 'لوتئالی', days: '15-28', color: 'from-purple-400/20 to-purple-500/20', description: 'تهیه برای قاعدگی' },
  ]

  const teenArticles = [
    { title: 'تغییرات بدن در نوجوانی', icon: '👧' },
    { title: 'مراقبت از پوست', icon: '✨' },
    { title: 'بهداشت شخصی', icon: '🧴' },
    { title: 'تغذیه سالم نوجوان', icon: '🥗' },
    { title: 'فعالیت جسمانی', icon: '🏃' },
  ]

  return (
    <div className="flex h-screen bg-background">
      <UserSidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">سلام فاطمه</h1>
            <p className="text-muted-foreground">شاخصه‌ های سلامت شما امروز</p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardDescription className="text-primary">روز قاعدگی</CardDescription>
                  <Heart className="w-5 h-5 text-primary fill-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">14</p>
                <p className="text-sm text-muted-foreground mt-1">روز باقی مانده</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardDescription className="text-accent">نوبت بعدی</CardDescription>
                  <Calendar className="w-5 h-5 text-accent" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-accent">7</p>
                <p className="text-sm text-muted-foreground mt-1">روز تا نوبت</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardDescription className="text-primary">نمره سلامت</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">8.5/10</p>
                <p className="text-sm text-muted-foreground mt-1">عالی</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardDescription className="text-accent">آخرین بررسی</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">15</p>
                <p className="text-sm text-muted-foreground mt-1">روز پیش</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Features */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" />
                    چرخه قاعدگی
                  </CardTitle>
                  <CardDescription>فازهای چرخه قاعدگی شما - بکشید به چپ و راست</CardDescription>
                </CardHeader>
                <CardContent>
                  <Carousel itemsPerView={3}>
                    {cycleItems.map((item, idx) => (
                      <CarouselItem key={idx}>
                        <Card className={`bg-gradient-to-br ${item.color} border-0 h-full`}>
                          <CardHeader>
                            <CardTitle className="text-lg">{item.phase}</CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-2xl font-bold text-primary mb-2">{item.days}</p>
                            <p className="text-sm text-muted-foreground">روز</p>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </Carousel>
                </CardContent>
              </Card>

              {/* Health Tips */}
              <Card>
                <CardHeader>
                  <CardTitle>نکات سلامتی امروز</CardTitle>
                  <CardDescription>بکشید به چپ و راست</CardDescription>
                </CardHeader>
                <CardContent>
                  <Carousel itemsPerView={2}>
                    {[
                      { icon: '💧', text: 'کافی آب بنوشید - حداقل 8 لیوان در روز' },
                      { icon: '🥗', text: 'تغذیه متوازن شامل سبزیجات و پروتئین' },
                      { icon: '🏃', text: '30 دقیقه فعالیت جسمانی خفیف' },
                      { icon: '😴', text: '7-9 ساعت خواب کافی' },
                      { icon: '🧘', text: 'یوگا یا مدیتیشن برای کاهش استرس' },
                      { icon: '❤️', text: 'ارتباط اجتماعی و احساس خوب' },
                    ].map((tip, i) => (
                      <CarouselItem key={i}>
                        <div className="flex gap-3 p-4 bg-gradient-to-br from-pink-50 to-white border border-pink-200 rounded-lg h-full">
                          <span className="text-2xl flex-shrink-0">{tip.icon}</span>
                          <p className="text-sm text-foreground">{tip.text}</p>
                        </div>
                      </CarouselItem>
                    ))}
                  </Carousel>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-accent" />
                    سلامت نوجوان
                  </CardTitle>
                  <CardDescription>مقالات و نکات سلامتی برای نوجوانان - بکشید به چپ و راست</CardDescription>
                </CardHeader>
                <CardContent>
                  <Carousel itemsPerView={3}>
                    {teenArticles.map((article, idx) => (
                      <CarouselItem key={idx}>
                        <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-0 h-full flex flex-col">
                          <CardHeader className="flex-1">
                            <div className="text-4xl mb-3">{article.icon}</div>
                            <CardTitle className="text-base">{article.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <Button size="sm" variant="outline" className="w-full">
                              خواندن
                            </Button>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </Carousel>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Features */}
            <div className="space-y-6">
              {/* Pregnancy Tracker */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Baby className="w-5 h-5 text-accent" />
                    چرخه بارداری
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    شروع چرخه
                  </Button>
                  <p className="text-xs text-muted-foreground mt-3">
                    اگر بارداری می‌دانید یا فکر می‌کنید باردار هستید
                  </p>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">اقدامات سریع</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link href="/user/appointments">
                    <Button variant="ghost" className="w-full justify-start">
                      <Calendar className="w-4 h-4 ml-2" />
                      رزرو نوبت جدید
                    </Button>
                  </Link>
                  <Link href="/user/health-library">
                    <Button variant="ghost" className="w-full justify-start">
                      <BookOpen className="w-4 h-4 ml-2" />
                      مطالب آموزشی
                    </Button>
                  </Link>
                  <Button variant="ghost" className="w-full justify-start">
                    <AlertCircle className="w-4 h-4 ml-2" />
                    پشتیبانی
                  </Button>
                </CardContent>
              </Card>

              {/* Alerts */}
              <Card className="border-yellow-200 bg-yellow-50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    یادآوری
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">نوبت سالانه بررسی فراموش نشود</p>
                  <Button size="sm" className="mt-2 w-full">رزرو بررسی</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
