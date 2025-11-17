'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart, Users, ClipboardList, Book, ArrowRight, X } from 'lucide-react'
import Link from 'next/link'
import { Carousel, CarouselItem } from '@/components/carousel'
import { QuoteCard } from '@/components/quote-card'

export default function Home() {
  const [userType, setUserType] = useState<'user' | 'doctor' | 'admin' | null>(null)
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null)

  const featureDetails = {
    'چرخه قاعدگی': {
      title: 'چرخه قاعدگی',
      icon: Heart,
      description: 'نظارت بر چرخه قاعدگی و پیش‌بینی دقیق',
      details: [
        'تقویم تفصیلی چرخه قاعدگی',
        'پیش‌بینی روزهای بارور',
        'ثبت نشانه‌های جسمی و روحی',
        'یادآوری‌های خودکار',
        'آمار و نمودارهای دقیق'
      ]
    },
    'چرخه بارداری': {
      title: 'چرخه بارداری',
      icon: Heart,
      description: 'طول مدت بارداری و نکات مهم',
      details: [
        'تقویم هفتگی حاملگی',
        'تغییرات جسمی و روانی',
        'توصیه‌های تغذیه‌ای',
        'نکات ایمنی و احتیاطات',
        'آماده‌سازی برای تولد'
      ]
    },
    'مشاوره پزشک': {
      title: 'مشاوره پزشک',
      icon: Users,
      description: 'ارتباط مستقیم با پزشکان متخصص',
      details: [
        'مشاوره آنلاین با پزشکان',
        'نوبت‌دهی سریع و آسان',
        'سابقه مشاوره‌ها',
        'نسخه‌های الکترونیکی',
        'تعریف شکایت و علائم'
      ]
    },
    'سلامت نوجوان': {
      title: 'سلامت نوجوان',
      icon: Book,
      description: 'آموزش و راهنمایی برای نوجوانان',
      details: [
        'آموزش تغییرات دوران بلوغ',
        'مقالات علمی و قابل‌اعتماد',
        'پاسخ به سوالات رایج',
        'راهنمایی بهداشتی',
        'حمایت روانی و عاطفی'
      ]
    },
    'تغذیه سالم': {
      title: 'تغذیه سالم',
      icon: Heart,
      description: 'برنامه تغذیه‌ای متناسب با دوران',
      details: [
        'برنامه تغذیه شخصی‌سازی‌شده',
        'لیست غذاهای توصیه‌شده',
        'فیلم‌های آموزش پخت',
        'محاسبه نیاز کالری روزانه',
        'مشاوره با متخصص تغذیه'
      ]
    },
    'ورزش و فعالیت': {
      title: 'ورزش و فعالیت',
      icon: Heart,
      description: 'برنامه ورزشی شخصی‌سازی‌شده',
      details: [
        'برنامه ورزشی مناسب با سن',
        'فیلم‌های تمرین و حرکات',
        'ردیابی فعالیت روزانه',
        'توصیه‌های ایمنی ورزشی',
        'انگیزه‌دهی و مشاوره فیتنس'
      ]
    }
  }

  if (userType === 'user') {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto py-20 px-4 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">داشبورد کاربر</h1>
          <p className="text-lg text-muted-foreground mb-8">در حال بارگذاری...</p>
          <Link href="/user">
            <Button size="lg">رفتن به داشبورد</Button>
          </Link>
          <Button variant="outline" onClick={() => setUserType(null)} className="ml-4">
            بازگشت
          </Button>
        </div>
      </div>
    )
  }

  if (userType === 'doctor') {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto py-20 px-4 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">پنل پزشک</h1>
          <p className="text-lg text-muted-foreground mb-8">در حال بارگذاری...</p>
          <Link href="/doctor">
            <Button size="lg">رفتن به داشبورد</Button>
          </Link>
          <Button variant="outline" onClick={() => setUserType(null)} className="ml-4">
            بازگشت
          </Button>
        </div>
      </div>
    )
  }

  if (userType === 'admin') {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto py-20 px-4 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">پنل ادمین</h1>
          <p className="text-lg text-muted-foreground mb-8">در حال بارگذاری...</p>
          <Link href="/admin">
            <Button size="lg">رفتن به داشبورد</Button>
          </Link>
          <Button variant="outline" onClick={() => setUserType(null)} className="ml-4">
            بازگشت
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-pink-100">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-primary fill-primary" />
            <h1 className="text-2xl font-bold text-primary">سلامت زنان</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section with Image */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div className="flex-1 text-center md:text-right">
              <h2 className="text-5xl font-bold text-foreground mb-4">
                سامانه جامع سلامت زنان
              </h2>
              <p className="text-xl text-muted-foreground">
                از دوران نوجوانی تا بزرگسالی، ما در کنار شما هستیم
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ba9edddf1408b1ea57ba695eeeef8592-BelxU9LTSrY9dq419VlG9c0Xsrx614.jpg"
                alt="زن حامله با قلب و گیاهان"
                className="w-80 h-80 object-contain animate-in fade-in slide-in-from-right duration-500"
              />
            </div>
          </div>
        </div>

        {/* User Type Selection */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* User Card */}
          <Card 
            className="cursor-pointer hover:shadow-lg hover:border-primary transition-all"
            onClick={() => setUserType('user')}
          >
            <CardHeader>
              <Users className="w-12 h-12 text-primary mb-3" />
              <CardTitle>کاربر</CardTitle>
              <CardDescription>ورود به داشبورد شخصی</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                ورود
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Doctor Card */}
          <Card 
            className="cursor-pointer hover:shadow-lg hover:border-primary transition-all"
            onClick={() => setUserType('doctor')}
          >
            <CardHeader>
              <ClipboardList className="w-12 h-12 text-accent mb-3" />
              <CardTitle>پزشک</CardTitle>
              <CardDescription>ورود به پنل پزشکی</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                ورود
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Admin Card */}
          <Card 
            className="cursor-pointer hover:shadow-lg hover:border-primary transition-all"
            onClick={() => setUserType('admin')}
          >
            <CardHeader>
              <Book className="w-12 h-12 text-accent mb-3" />
              <CardTitle>ادمین</CardTitle>
              <CardDescription>مدیریت سیستم</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                ورود
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quote Card Section */}
        <QuoteCard />

        {/* Features Carousel */}
        <div className="mt-20">
          <Carousel itemsPerView={3}>
            {Object.entries(featureDetails).map(([key, feature]) => {
              const IconComponent = feature.icon
              return (
                <CarouselItem key={key}>
                  <Card 
                    className="h-full cursor-pointer hover:shadow-xl hover:border-primary transition-all duration-300 transform hover:scale-105 active:scale-95"
                    onClick={() => setSelectedFeature(key)}
                  >
                    <CardHeader>
                      <IconComponent className="w-8 h-8 text-primary mb-2" />
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              )
            })}
          </Carousel>
        </div>

        {/* Modal for Feature Details */}
        {selectedFeature && featureDetails[selectedFeature as keyof typeof featureDetails] && (
          <div 
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={() => setSelectedFeature(null)}
          >
            <Card 
              className="w-full max-w-2xl animate-in zoom-in-95 duration-300 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <CardHeader className="flex flex-row items-start justify-between pb-6 border-b">
                <div>
                  <CardTitle className="text-2xl">{featureDetails[selectedFeature as keyof typeof featureDetails].title}</CardTitle>
                  <CardDescription className="mt-2">
                    {featureDetails[selectedFeature as keyof typeof featureDetails].description}
                  </CardDescription>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedFeature(null)}
                  className="hover:bg-pink-100"
                >
                  <X className="w-5 h-5" />
                </Button>
              </CardHeader>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-4 text-foreground">ویژگی‌های اصلی:</h3>
                <ul className="space-y-3">
                  {featureDetails[selectedFeature as keyof typeof featureDetails].details.map((detail, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-3 animate-in slide-in-from-left duration-300"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90 transition-colors">
                  شروع کردن
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-pink-100 mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>تمام حقوق محفوظ است © 2025 سلامت زنان</p>
        </div>
      </footer>
    </div>
  )
}
